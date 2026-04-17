/**
 * Google Apps Script for Lim Cheng Boon Portfolio Testimonials API
 * 
 * Instructions:
 * 1. Open your Google Sheet.
 * 2. Go to Extensions -> Apps Script.
 * 3. Delete any existing code and paste this in.
 * 4. Click 'Deploy' -> 'New Deployment'.
 * 5. Select type: 'Web App'.
 * 6. Set 'Execute as' to 'Me'.
 * 7. Set 'Who has access' to 'Anyone'.
 * 8. Copy the Web App URL and provide it to your developer.
 */

function doGet() {
  const sheetId = SpreadsheetApp.getActiveSpreadsheet().getId();
  const sheetName = "Form Responses 1"; // Make sure this matches your sheet tab name
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  
  if (!sheet) {
    return ContentService.createTextOutput(JSON.stringify({ error: "Sheet not found" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const rows = data.slice(1);

  const testimonials = rows
    .filter(row => {
      const disclaimer = String(row[9] || "");
      return disclaimer.includes("Yes") || disclaimer.includes("同意");
    })
    .map((row, index) => {
      const name = String(row[2] || "");
      const title = String(row[3] || "");
      const quoteEn = String(row[7] || "");
      const quoteCn = String(row[8] || "");
      
      return {
        id: index + 100, // Offset to avoid ID collision with local data
        name: `${name} ${title}`.trim(),
        name_cn: `${name} ${title}`.trim(),
        quote_en: quoteEn || quoteCn, // Fallback to Mandarin if English is empty
        quote_cn: quoteCn || quoteEn, // Fallback to English if Mandarin is empty
        club_en: String(row[5] || ""),
        club_cn: String(row[5] || ""),
        role_en: String(row[6] || ""),
        role_cn: String(row[6] || ""),
        district: String(row[4] || "80")
      };
    });

  const output = JSON.stringify(testimonials);
  
  return ContentService.createTextOutput(output)
    .setMimeType(ContentService.MimeType.JSON);
}
