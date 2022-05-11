function sendMail() {
  const colEmail = 1;

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName('シート1');
  var rows = sheet.getDataRange().getValues();
  for(let i = 1; i < rows.length; i++) {
    let columns = rows[i];
    console.log(columns[colEmail]);
  }
}
