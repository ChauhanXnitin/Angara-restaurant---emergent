# Google Sheets Webhook Setup Instructions

## Step 1: Create a New Google Sheet

1. Go to https://sheets.google.com
2. Click **"+ Blank"** to create a new spreadsheet
3. Name it: **"Angara Restaurant Reservations"**

## Step 2: Set Up the Headers

In the first row of your sheet, add these column headers:
```
Name | Email | Phone | Date | Time | Guests | Message | Timestamp
```

## Step 3: Add Apps Script

1. In your Google Sheet, click **Extensions > Apps Script**
2. Delete any existing code
3. Copy and paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Create a new row with the data
    var newRow = [
      data.name || '',
      data.email || '',
      data.phone || '',
      data.date || '',
      data.time || '',
      data.guests || '',
      data.message || '',
      new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    ];
    
    // Append the row to the sheet
    sheet.appendRow(newRow);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'Reservation saved successfully' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        message: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (disk icon)
5. Name the project: **"Reservation Webhook"**

## Step 4: Deploy as Web App

1. Click **Deploy > New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure:
   - **Description**: Reservation Webhook
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. **Authorize** the app (you may need to click "Advanced" and "Go to project")
7. **Copy the Web App URL** - it will look like:
   ```
   https://script.google.com/macros/s/ABC123.../exec
   ```

## Step 5: Share Your Webhook URL

Once you have the webhook URL, share it with me and I'll update the backend to use it!

**Note**: Keep this URL secure. Anyone with this URL can add data to your sheet.

---

## Testing Your Webhook

You can test if it's working using this curl command:
```bash
curl -X POST "YOUR_WEBHOOK_URL_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+91 1234567890",
    "date": "2025-01-15",
    "time": "19:00",
    "guests": "4",
    "message": "Test reservation"
  }'
```

If successful, you should see a new row in your Google Sheet!
