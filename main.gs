function sendMail() {
  const colEmail = 1;

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName('シート1');
  var rows = sheet.getDataRange().getValues();
  var recipient = rows.slice(1).map(columns => columns[colEmail]);
  console.log(recipient);
}
