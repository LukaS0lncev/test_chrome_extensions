var port = chrome.runtime.connect({name: "userAuth"});
var userAuthObj = false;
function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

port.postMessage({joke: "getUserAuthPopup"});
port.onMessage.addListener(function(msg) {
  if (msg.userAuthJson) {
    userAuthObj = JSON.parse(msg.userAuthJson);
  }
});




$(document).ready(function(){

    if(userAuthObj) {
        var formLoginMtsInput = userAuthObj.formLoginMtsInput;
        var formPasswordMtsInput = userAuthObj.formPasswordMtsInput;
        var formLoginRemedyInput = userAuthObj.formLoginRemedyInput;
        var formPasswordRemedyInput = userAuthObj.formPasswordRemedyInput;
        var formLoginBDInput = userAuthObj.formLoginBDInput;
        var formPasswordBDInput = userAuthObj.formPasswordBDInput;
        //alert(formLoginMtsInput);
    }
});  