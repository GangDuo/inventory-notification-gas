function sendMail() {
  var prop = PropertiesService.getScriptProperties().getProperties();

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(prop.TBL_NAME);
  var rows = sheet.getDataRange().getValues();
  var recipient = rows.slice(1).map(columns => columns[prop.TBL_COL_EMAIL]);
  console.log(recipient);
}
