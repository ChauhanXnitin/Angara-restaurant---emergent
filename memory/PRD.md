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

#### Frontend (MVP with Mock Data)
1. **Navigation Bar**
   - Fixed header with smooth scrolling
   - Desktop & mobile responsive menu
   - Call Now CTA button
   
2. **Hero Section**
   - Restaurant name in English & Hindi
   - 4.7 rating display
   - Tagline: "Pure Vegetarian Excellence"
   - Info cards (Hours, Price, Location)
   - Primary CTAs (Reserve Table, View Menu)
   - High-quality restaurant interior image
   - Floating special attributes card

3. **About Section**
   - Restaurant story and philosophy
   - "Why Customers Love Us" (4 key points with icons)
   - Values section (Inclusive, Sustainable, Community)
   
4. **Menu Section**
   - Featured dishes showcase (4 items)
   - Complete menu with categories:
     - Starters (4 items)
     - Main Course (4 items)
     - Breads (4 items)
     - Rice & Biryani (2 items)
     - Beverages (3 items)
   - Category filtering
   - Professional food photography
   - Pricing display with Indian Rupee symbol

5. **Reviews Section**
   - 4.7 star rating display
   - 6 customer testimonials with ratings
   - Review cards with hover effects

6. **Gallery Section**
   - 8 professional images (food, ambiance, dining)
   - Category filtering (All, Food, Ambiance, Dining)
   - Hover effects with captions

7. **Contact Section**
   - Contact information (Address, Phone, Hours, Instagram)
   - Google Maps integration
   - Table Reservation Form:
     - Name, Email, Phone (required)
     - Date, Time, Number of Guests (required)
     - Special Requests (optional)
     - Mock form submission with toast notification

8. **Footer**
   - Restaurant branding
   - Quick navigation links
   - Contact information
   - Social media link

#### Design Implementation
- Lime-yellow (#ECEC75) primary background
- Black buttons with hover effects
- Crimson Text serif for headings
- Consistent spacing and layout
- Responsive design for all screen sizes
- Smooth transitions and hover effects
- Professional food photography from Unsplash/Pexels

## Prioritized Backlog

### P0 - Backend Development (Next Phase)
1. **Database Models**
   - Menu items collection
   - Reservations collection
   - Reviews collection (optional)

2. **API Endpoints**
   - GET /api/menu - Fetch menu items
   - POST /api/reservations - Create table reservation
   - GET /api/restaurant-info - Fetch restaurant details

3. **Frontend-Backend Integration**
   - Replace mock data with API calls
   - Form submission to backend
   - Error handling and loading states

### P1 - Enhanced Features
1. **Admin Panel** (Optional)
   - Menu management
   - Reservation management
   - View customer inquiries

2. **Email Notifications**
   - Reservation confirmation emails
   - Admin notification for new bookings

3. **WhatsApp Integration**
   - Direct WhatsApp booking link
   - Quick order via WhatsApp

### P2 - Additional Features
1. **Online Ordering System**
   - Cart functionality
   - Order placement
   - Payment integration

2. **Customer Accounts**
   - User registration/login
   - Booking history
   - Favorites menu items

3. **Multi-language Support**
   - Hindi language toggle
   - Content translation

## Next Tasks List
1. **User Confirmation**: Get client approval on design and content
2. **Content Updates**: Replace placeholder images with actual restaurant photos (if provided)
3. **Backend Development**: Build FastAPI endpoints and MongoDB integration
4. **Form Integration**: Connect reservation form to backend
5. **Testing**: End-to-end testing of all features
6. **Deployment**: Prepare for production deployment

## Notes
- All images are professional stock photos that can be replaced with actual restaurant photos
- Reservation form currently shows mock toast notification
- Menu prices are sample data and should be updated with actual pricing
- Instagram link is active and clickable
- Google Maps integration is functional
