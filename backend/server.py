from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from pydantic import BaseModel
from typing import Optional
import httpx


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Create the main app without a prefix
app = FastAPI(
    title="Angara Restaurant API",
    description="Backend API for Angara Restaurant website with Google Sheets integration",
    version="1.0.0"
)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
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
    return {
        "message": "Angara Restaurant API",
        "status": "active",
        "version": "1.0.0"
    }

@api_router.get("/health")
async def health_check():
    """Health check endpoint for monitoring"""
    webhook_url = os.environ.get('GOOGLE_SHEETS_WEBHOOK_URL')
    return {
        "status": "healthy",
        "google_sheets_configured": bool(webhook_url)
    }

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
        async with httpx.AsyncClient(timeout=10.0, follow_redirects=True) as client:
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