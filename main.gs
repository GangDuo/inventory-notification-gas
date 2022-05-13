const HowManyMonthsAgo = 2;
const HowManyDaysIsDuration = 14;

function sendMail() {
  var prop = PropertiesService.getScriptProperties().getProperties();

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(prop.TBL_NAME);
  var rows = sheet.getDataRange().getValues();
  var recipient = rows.slice(1).map(columns => columns[prop.TBL_COL_EMAIL]);

  var tmpl = HtmlService.createTemplateFromFile('message');
  tmpl.targetMonth = Utilities.formatDate(targetMonth(), 'Asia/Tokyo', 'M月');
  tmpl.deadlineForReply = `${Utilities.formatDate(deadlineForReply(), 'Asia/Tokyo', 'M月d日')}（${dayOfWeek(deadlineForReply())}）`;
  
  var prefix = `【回答期限${Utilities.formatDate(deadlineForReply(), 'Asia/Tokyo', 'M/d')}】`;
  GmailApp.sendEmail(recipient.join(), prefix + prop.MSG_SUBJECT, 'HTMLメールが表示できません。', {
    from: prop.MSG_FROM,
    noReply: true,
    htmlBody: tmpl.evaluate().getContent(),
  });
}

function targetMonth() {
  var d = new Date;
  d.setMonth(d.getMonth() + HowManyMonthsAgo);
  return d;
}

function deadlineForReply() {
  var d = new Date;
  d.setDate(d.getDate() + HowManyDaysIsDuration);
  return d;
}

function dayOfWeek(d) {
    var x = d.getDay();
    return ['日', '月', '火', '水', '木', '金', '土'][x];
}