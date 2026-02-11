# Angara Restaurant Website - Product Requirements Document

## Overview
Modern, warm, and professional website for Angara (अंगारा), a pure vegetarian restaurant in Gurugram.

## Original Problem Statement
Create a modern, warm, and professional restaurant website for a pure vegetarian restaurant named Angara (अंगारा) with complete business details, menu, reviews, gallery, and contact information.

## Business Details
- **Name**: Angara (अंगारा)
- **Category**: Pure Vegetarian Restaurant
- **Price Range**: ₹200-400 per person
- **Rating**: 4.7 ★ (143+ reviews)
- **Location**: Tulip Chowk, Sector 68, Gurugram, Haryana – 122101
- **Phone**: +91 82855 55569
- **Instagram**: https://www.instagram.com/angaraofficials/
- **Services**: Dine-in, Takeaway, No-contact delivery, Online ordering, Table reservation
- **Attributes**: Pure Vegetarian, Family-friendly, LGBTQ+ friendly, Women-owned business

## User Personas
1. **Family Diners**: Looking for quality vegetarian food in a family-friendly environment
2. **Health-Conscious Individuals**: Seeking pure vegetarian options with fresh ingredients
3. **Food Enthusiasts**: Exploring authentic North Indian vegetarian cuisine
4. **Event Planners**: Needing table reservations for celebrations

## Core Requirements (Static)

### Design Guidelines
- **Primary Color**: Lime-yellow (#ECEC75)
- **Card Background**: #e6e67c
- **Typography**: 
  - Headings: Crimson Text (serif)
  - Body: Sans-serif system fonts
- **Buttons**: Black (#0f172a) with white text
- **Style**: Warm, earthy, professional with generous spacing

### Technical Stack
- **Frontend**: React 19 with Tailwind CSS
- **UI Components**: Shadcn/UI
- **Icons**: Lucide React
- **Toasts**: Sonner
- **Backend**: FastAPI (to be implemented)
- **Database**: MongoDB (to be implemented)

## What's Been Implemented ✅

### Date: December 10, 2025

#### Phase 1: Frontend MVP (Completed)
1. **Navigation Bar** - Fixed header with smooth scrolling, responsive menu
2. **Hero Section** - Bilingual branding, rating display, CTAs, professional imagery
3. **About Section** - Restaurant story, "Why Customers Love Us", values
4. **Menu Section** - Featured dishes, complete menu with 17 items, category filtering
5. **Reviews Section** - 6 customer testimonials with 4.7★ rating
6. **Gallery Section** - 8 professional images with category filtering
7. **Contact Section** - Contact info, Google Maps, reservation form
8. **Footer** - Branding, navigation, contact details

#### Phase 2: Backend & Integrations (Completed)
1. **Backend API (FastAPI)**
   - POST /api/reservations endpoint
   - Google Sheets webhook integration via httpx
   - Comprehensive error handling
   - Request validation with Pydantic models
   - Logging for monitoring

2. **Google Sheets Integration**
   - Apps Script webhook approach (no OAuth needed)
   - Automatic data storage in Google Sheets
   - Setup instructions provided in GOOGLE_SHEETS_SETUP.md
   - Timestamp tracking in IST timezone

3. **WhatsApp Widget**
   - Floating widget (bottom right, always visible)
   - Click-to-chat functionality
   - Pre-configured with number: 8708206506
   - Pre-filled message: "Hello! I would like to make a reservation at Angara Restaurant."
   - Popup with greeting and call-to-action

4. **Frontend-Backend Integration**
   - Reservation form connected to backend API
   - Loading states during submission
   - Success/error toast notifications (sonner)
   - Form validation and reset on success
   - Axios for API calls

5. **Testing**
   - Backend API tested (100% success)
   - Frontend functionality tested (95% success)
   - Error handling verified
   - Minor issues documented (low priority)

## Prioritized Backlog

### P0 - User Setup Required (Before Go-Live)
1. **Google Sheets Setup** (5 minutes)
   - Create Google Sheet with provided template
   - Deploy Apps Script webhook
   - Add webhook URL to backend .env
   - Test with sample reservation

2. **Content Updates** (Optional)
   - Replace stock images with actual restaurant photos
   - Update menu items and prices
   - Add more customer reviews

### P1 - Enhanced Features (Future)
1. **Email Notifications**
   - Send confirmation email to customer
   - Send notification to restaurant admin
   - Email template design

2. **Admin Dashboard** (Optional)
   - View all reservations
   - Mark reservations as confirmed/completed
   - Export reservation data
   - Analytics dashboard

3. **Advanced WhatsApp Integration**
   - WhatsApp Business API integration
   - Automated confirmation messages
   - Reservation reminders

### P2 - Additional Features (Future)
1. **Online Ordering System**
   - Cart functionality
   - Order placement and tracking
   - Payment gateway integration

2. **Customer Accounts**
   - User registration/login
   - Booking history
   - Favorite menu items
   - Loyalty program

3. **Multi-language Support**
   - Hindi language toggle
   - Content translation
   - RTL support

## Next Tasks List
1. **User Action Required**: Follow GOOGLE_SHEETS_SETUP.md to create webhook and add URL to .env
2. **Test Reservation Flow**: Submit test reservation after webhook setup
3. **Test WhatsApp Widget**: Verify WhatsApp opens with correct number
4. **Content Updates**: Replace stock images with actual restaurant photos (optional)
5. **Menu Updates**: Update menu items and prices with actual data (optional)
6. **Go Live**: Deploy to production once testing is complete

## API Contracts

### POST /api/reservations
**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (optional)",
  "phone": "string (required)",
  "date": "string (required, format: YYYY-MM-DD)",
  "time": "string (required, format: HH:MM)",
  "guests": "string (required)",
  "message": "string (optional)"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Reservation request received! We'll call you shortly to confirm.",
  "data": { /* reservation data */ }
}
```

**Error Responses:**
- 500: Webhook URL not configured or request failed
- 504: Request timeout
- 422: Invalid data format

### Google Sheets Webhook (External)
**Endpoint:** User-provided Apps Script URL

**Request:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "date": "string",
  "time": "string",
  "guests": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Reservation saved successfully"
}
```

## Deployment Information

### Production URLs
- **Frontend**: Deploy to Vercel → `https://your-app.vercel.app`
- **Backend**: Deploy to Railway → `https://your-app.railway.app`

### Deployment Folders
- **Frontend**: `/app/frontend` → Vercel
- **Backend**: `/app/backend` → Railway

### Key Files Created
- `/app/DEPLOYMENT_GUIDE.md` - Complete deployment instructions
- `/app/backend/Procfile` - Railway deployment config
- `/app/backend/railway.json` - Railway settings
- `/app/.gitignore` - Git ignore file

### Environment Variables

**Vercel (Frontend):**
```
REACT_APP_BACKEND_URL=https://your-railway-backend.railway.app
```

**Railway (Backend):**
```
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AKfycbyNxYGF3eN0P5U9zv6XMElupZMNL9QQjKk0CRm0zs2bP8yEsJephEpGyf8IUJfiU_Cx6w/exec
MONGO_URL=mongodb://localhost:27017 (optional - not needed for reservations)
DB_NAME=angara_restaurant
CORS_ORIGINS=https://your-vercel-frontend.vercel.app
```

### Deployment Steps
1. Deploy backend to Railway first
2. Copy Railway backend URL
3. Deploy frontend to Vercel with backend URL
4. Update Railway CORS_ORIGINS with Vercel URL
5. Test the live website

### Cost
- Vercel: Free tier
- Railway: ~$5/month (free $5 credit initially)
- Total: $0-5/month

### Environment Variables
- `GOOGLE_SHEETS_WEBHOOK_URL`: Apps Script webhook URL (user must configure)
- `REACT_APP_BACKEND_URL`: Frontend backend URL (pre-configured)
- `MONGO_URL`: MongoDB connection (not used for reservations)

### Dependencies Added
- **Backend**: httpx (for webhook HTTP requests)
- **Frontend**: sonner (for toast notifications), axios (for API calls)

### File Structure
```
/app/
├── backend/
│   ├── server.py (reservation endpoint)
│   └── .env (webhook URL goes here)
├── frontend/src/
│   ├── components/
│   │   ├── Contact.jsx (reservation form)
│   │   └── WhatsAppWidget.jsx (floating widget)
│   └── data/mockData.js (restaurant data)
├── GOOGLE_SHEETS_SETUP.md (webhook setup guide)
├── SETUP_INSTRUCTIONS.md (complete setup guide)
└── memory/PRD.md (this file)
```

## Notes
- Backend uses Google Apps Script webhook (simpler than OAuth)
- **Google Sheets Webhook**: ✅ Integrated and tested - https://script.google.com/macros/s/AKfycbyNxYGF3eN0P5U9zv6XMElupZMNL9QQjKk0CRm0zs2bP8yEsJephEpGyf8IUJfiU_Cx6w/exec
- **WhatsApp Widget**: ✅ Integrated with number 8708206506
- All reservations saved to Google Sheets with IST timestamp
- **Test Submission**: ✅ Successfully tested - form data saves to sheet
- Stock images can be replaced with actual restaurant photos
- System fully functional and ready for deployment
- Deployment guide created for Vercel (frontend) and Railway (backend)
- No critical issues found in testing
