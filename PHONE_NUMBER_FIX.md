# 🔧 Quick Fix for Phone Number Error in Google Sheets

## Problem
Phone numbers showing "#ERROR!" with "formula parse error" in Google Sheet because numbers starting with "+" are interpreted as formulas.

## Solution
Update your Google Apps Script code to add a single quote prefix before phone numbers.

---

## Step-by-Step Fix

### 1. Open Your Google Sheet
Go to the sheet where reservations are being saved.

### 2. Open Apps Script Editor
- Click **Extensions** → **Apps Script**

### 3. Replace the Code
Delete the existing code and paste this updated version:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Format phone number to prevent formula error
    // Add single quote prefix to treat as text in Google Sheets
    var phoneNumber = data.phone || '';
    if (phoneNumber) {
      phoneNumber = "'" + phoneNumber;
    }
    
    // Create a new row with the data
    var newRow = [
      data.name || '',
      data.email || '',
      phoneNumber,
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

### 4. Save and Deploy
1. Click the **Save** button (disk icon)
2. Click **Deploy** → **Manage deployments**
3. Click the **Edit** button (pencil icon) next to your deployment
4. Under **Version**, select **New version**
5. Click **Deploy**
6. Close the dialog

### 5. Fix Existing Errors in Sheet (Optional)
For the existing rows with #ERROR!:

**Option 1: Manual Fix**
- Click on the error cell
- Type the phone number with a single quote at the start: `'+91 9876543210`
- Press Enter

**Option 2: Delete and Resubmit**
- Delete the rows with errors
- Submit new test reservations through the website

---

## What Changed?

### Before (Causing Error):
```javascript
data.phone || ''
```

### After (Fixed):
```javascript
var phoneNumber = data.phone || '';
if (phoneNumber) {
  phoneNumber = "'" + phoneNumber;  // Adds single quote prefix
}
```

The single quote (') tells Google Sheets to treat the value as text, not a formula.

---

## Testing the Fix

After updating the script:

1. Go to your website
2. Submit a new test reservation
3. Check the Google Sheet
4. Phone number should now display correctly: `+91 9876543210`

---

## Important Notes

- The single quote (') won't be visible in the cell
- The phone number will be stored as text
- Future reservations will work correctly
- Existing error rows need manual fix or resubmission
- No changes needed to your website code

---

## Alternative: Format Phone Column

If you prefer, you can also format the entire Phone column as Plain Text:

1. Click the **Phone** column header (column C)
2. Go to **Format** → **Number** → **Plain text**
3. Redeploy your Apps Script (without the quote fix)
4. Test again

However, the quote prefix method is more reliable and doesn't require column formatting.
