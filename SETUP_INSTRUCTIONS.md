# 🚀 Angara Restaurant Website - Setup Instructions

## ✅ What's Already Done

Your restaurant website is complete with:
- Beautiful design with lime-yellow theme
- Complete menu, reviews, and gallery
- Table reservation form connected to backend
- Floating WhatsApp widget (bottom right corner)
- Responsive design for all devices

## 📋 What You Need to Do

### Step 1: Set Up Google Sheets (5 minutes)

Follow the detailed instructions in the file: **`GOOGLE_SHEETS_SETUP.md`**

**Quick Summary:**
1. Create a new Google Sheet
2. Add column headers: Name, Email, Phone, Date, Time, Guests, Message, Timestamp
3. Go to Extensions > Apps Script
4. Copy and paste the provided code
5. Deploy as Web App
6. Copy the webhook URL

### Step 2: Add Webhook URL to Backend

Once you have the webhook URL from Google Apps Script:

1. Open the file: `/app/backend/.env`
2. Find the line: `GOOGLE_SHEETS_WEBHOOK_URL=`
3. Paste your webhook URL after the `=`
4. Save the file
5. Restart backend: `sudo supervisorctl restart backend`

**Example:**
```env
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/ABC123DEF456.../exec
```

## 🧪 Testing the Integration

After adding the webhook URL:

1. **Test the form submission:**
   - Go to your website
   - Scroll to the "Visit Us" section
   - Fill out the reservation form
   - Click "Request Reservation"
   - You should see a success message
   - Check your Google Sheet - a new row should appear!

2. **Test WhatsApp widget:**
   - Look for the green WhatsApp button (bottom right corner)
   - Click it to see the chat popup
   - Click "Start Chat" - it should open WhatsApp with pre-filled message

## 📱 WhatsApp Widget

The WhatsApp widget is already configured with number: **8708206506**

Features:
- Always visible on all pages
- Floating button in bottom right
- Click to see chat popup
- Opens WhatsApp with pre-filled message: "Hello! I would like to make a reservation at Angara Restaurant."

## 🔧 Customization Options

### Change WhatsApp Number
Edit: `/app/frontend/src/components/WhatsAppWidget.jsx`
Line 6: `const phoneNumber = '918708206506';`

### Change Pre-filled Message
Edit: `/app/frontend/src/components/WhatsAppWidget.jsx`
Line 7: `const defaultMessage = '...';`

### Update Restaurant Details
Edit: `/app/frontend/src/data/mockData.js`
Update the `restaurantInfo` object

### Update Menu Items
Edit: `/app/frontend/src/data/mockData.js`
Update the `menuCategories` array

## 📊 Viewing Reservations

All reservations will be automatically saved to your Google Sheet with:
- Customer name
- Email (optional)
- Phone number
- Reservation date & time
- Number of guests
- Special requests
- Timestamp (when submitted)

## 🎨 Replace Stock Images

Current images are professional stock photos. To use your own:

1. Take high-quality photos of your restaurant and food
2. Upload them to a hosting service (Google Drive, Imgur, etc.)
3. Get public image URLs
4. Replace URLs in `/app/frontend/src/data/mockData.js`:
   - `featuredDishes` array
   - `menuCategories` array (item images)
   - `galleryImages` array

## 🚨 Important Notes

1. **Keep webhook URL secure** - Anyone with it can add data to your sheet
2. **Test before going live** - Submit a test reservation to verify
3. **Monitor your sheet** - Check regularly for new reservations
4. **Backup your sheet** - Download a copy regularly

## 💡 Tips

- You can share the Google Sheet with your team members
- Set up email notifications in Google Sheets to get alerts for new entries
- Use Google Sheets mobile app to view reservations on the go
- Consider adding data validation in Google Sheets for better data quality

## 📞 Contact Integration

The website includes multiple ways for customers to reach you:
- ✅ Table reservation form (saves to Google Sheets)
- ✅ WhatsApp chat widget
- ✅ Direct call button in navigation
- ✅ Phone number links
- ✅ Instagram link
- ✅ Google Maps integration

---

## Need Help?

If you encounter any issues:
1. Check that webhook URL is correctly added to `.env` file
2. Verify Google Apps Script is deployed correctly
3. Test the webhook using curl command (see GOOGLE_SHEETS_SETUP.md)
4. Check backend logs: `tail -f /var/log/supervisor/backend.*.log`
