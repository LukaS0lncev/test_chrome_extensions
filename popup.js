var port = chrome.runtime.connect({name: "userAuth"});
var userAuthObj = false;
port.postMessage({joke: "getUserAuthPopup"});
port.onMessage.addListener(function(msg) {
  if (msg.userAuthJson) {
    userAuthObj = JSON.parse(msg.userAuthJson);
  }
});


$(function(){
    $(document).ready(function(){
        if(userAuthObj) {
            $("#formLoginMtsInput").val(userAuthObj.formLoginMtsInput);
            $("#formPasswordMtsInput").val(userAuthObj.formPasswordMtsInput);
            $("#formLoginRemedyInput").val(userAuthObj.formLoginRemedyInput);
            $("#formPasswordRemedyInput").val(userAuthObj.formPasswordRemedyInput);
            $("#formLoginBDInput").val(userAuthObj.formLoginBDInput);
            $("#formPasswordBDInput").val(userAuthObj.formPasswordBDInput);
        }
    });  

    $("#assistant_form_save").click(function() {
        let formLoginMtsInput = $("#formLoginMtsInput").val();
        let formPasswordMtsInput = $("#formPasswordMtsInput").val();
        let formLoginRemedyInput = $("#formLoginRemedyInput").val();
        let formPasswordRemedyInput = $("#formPasswordRemedyInput").val();
        let formLoginBDInput = $("#formLoginBDInput").val();
        let formPasswordBDInput = $("#formPasswordBDInput").val();
        let userAuth = {
            formLoginMtsInput: formLoginMtsInput,
            formPasswordMtsInput: formPasswordMtsInput,
            formLoginRemedyInput: formLoginRemedyInput,
            formPasswordRemedyInput: formPasswordRemedyInput,
            formLoginBDInput: formLoginBDInput,
            formPasswordBDInput: formPasswordBDInput
        };
        let userAuthJson = JSON.stringify(userAuth); 
        port.postMessage({joke: "setUserAuthPopup", json: userAuthJson});
        window.close();
    });
    
});



