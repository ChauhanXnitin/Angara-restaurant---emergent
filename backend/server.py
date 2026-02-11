from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import httpx


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ReservationCreate(BaseModel):
    name: str
    email: Optional[str] = ""
    phone: str
    date: str
    time: str
    guests: str
    message: Optional[str] = ""

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/reservations")
async def create_reservation(reservation: ReservationCreate):
    """
    Create a new table reservation and send to Google Sheets via webhook
    """
    try:
        # Get the Google Sheets webhook URL from environment
        webhook_url = os.environ.get('GOOGLE_SHEETS_WEBHOOK_URL')
        
        if not webhook_url:
            logger.warning("Google Sheets webhook URL not configured")
            raise HTTPException(
                status_code=500, 
                detail="Reservation system not configured. Please contact restaurant directly."
            )
        
        # Prepare data for Google Sheets
        reservation_data = {
            "name": reservation.name,
            "email": reservation.email,
            "phone": reservation.phone,
            "date": reservation.date,
            "time": reservation.time,
            "guests": reservation.guests,
            "message": reservation.message
        }
        
        # Send to Google Sheets webhook
        async with httpx.AsyncClient(timeout=10.0) as client:
            response = await client.post(
                webhook_url,
                json=reservation_data,
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code != 200:
                logger.error(f"Google Sheets webhook failed: {response.text}")
                raise HTTPException(
                    status_code=500,
                    detail="Failed to save reservation. Please try again."
                )
        
        logger.info(f"Reservation created successfully for {reservation.name}")
        
        return {
            "success": True,
            "message": "Reservation request received! We'll call you shortly to confirm.",
            "data": reservation_data
        }
        
    except httpx.TimeoutException:
        logger.error("Google Sheets webhook timeout")
        raise HTTPException(
            status_code=504,
            detail="Reservation system is taking too long. Please try again."
        )
    except httpx.RequestError as e:
        logger.error(f"Google Sheets webhook request error: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Failed to process reservation. Please contact us directly."
        )
    except Exception as e:
        logger.error(f"Unexpected error in reservation: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="An unexpected error occurred. Please try again."
        )

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()