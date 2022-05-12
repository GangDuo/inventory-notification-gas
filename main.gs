function sendMail() {
  var prop = PropertiesService.getScriptProperties().getProperties();

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(prop.TBL_NAME);
  var rows = sheet.getDataRange().getValues();
  var recipient = rows.slice(1).map(columns => columns[prop.TBL_COL_EMAIL]);

  GmailApp.sendEmail(recipient.join(), prop.MSG_SUBJECT, 'HTMLメールが表示できません。', {
    from: prop.MSG_FROM,
    noReply: true,
    htmlBody: HtmlService.createTemplateFromFile('message').evaluate().getContent(),
  });
}
