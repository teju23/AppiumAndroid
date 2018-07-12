var resourceId = function(resrId) {
  return `android=new UiSelector().resourceId("$resrId")`;
};
var classname = function(Name) {
  return `android=new UiSelector().className("$Name")`;
};
var textName = function(txt) {
  return `android=new UiSelector().text("$txt")`;
};
module.exports = {
  resourceId,classname,textName
};
