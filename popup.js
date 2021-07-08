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
            if(userAuthObj.authCheck == "yes") {
                $('#authCheck').prop('checked', true);
            } else {
                $('#authCheck').prop('checked', false);
            }

            if(userAuthObj.fecusPluginCheck == "yes") {
                $('#fecusPluginCheck').prop('checked', true);
            } else {
                $('#fecusPluginCheck').prop('checked', false);
            }

            $("#formLoginMtsInput").val(userAuthObj.formLoginMtsInput);
            $("#formPasswordMtsInput").val(userAuthObj.formPasswordMtsInput);
            $("#formLoginRemedyInput").val(userAuthObj.formLoginRemedyInput);
            $("#formPasswordRemedyInput").val(userAuthObj.formPasswordRemedyInput);
            $("#formLoginRemedyMgtsInput").val(userAuthObj.formLoginRemedyMgtsInput);
            $("#formPasswordRemedyMgtsInput").val(userAuthObj.formPasswordRemedyMgtsInput);
            $("#formLoginBDInput").val(userAuthObj.formLoginBDInput);
            $("#formPasswordBDInput").val(userAuthObj.formPasswordBDInput);
            $("#formLoginBDSamara").val(userAuthObj.formLoginBDSamara);
            $("#formPasswordBDSamara").val(userAuthObj.formPasswordBDSamara);
            $("#formLoginBDTolyatti").val(userAuthObj.formLoginBDTolyatti);
            $("#formPasswordBDTolyatti").val(userAuthObj.formPasswordBDTolyatti);
        }
    });  

    $("#assistant_form_save").click(function() {
        let authCheck;
        if ($("#authCheck").is(":checked")){
            authCheck = "yes";
        } else {
            authCheck = "no";
        }
        let fecusPluginCheck;
        if ($("#fecusPluginCheck").is(":checked")){
            fecusPluginCheck = "yes";
        } else {
            fecusPluginCheck = "no";
        }
        let formLoginMtsInput = $("#formLoginMtsInput").val();
        let formPasswordMtsInput = $("#formPasswordMtsInput").val();
        let formLoginRemedyInput = $("#formLoginRemedyInput").val();
        let formPasswordRemedyInput = $("#formPasswordRemedyInput").val();
        let formLoginRemedyMgtsInput = $("#formLoginRemedyMgtsInput").val();
        let formPasswordRemedyMgtsInput = $("#formPasswordRemedyMgtsInput").val();
        let formLoginBDInput = $("#formLoginBDInput").val();
        let formPasswordBDInput = $("#formPasswordBDInput").val();
        let formLoginBDSamara = $("#formLoginBDSamara").val();
        let formPasswordBDSamara = $("#formPasswordBDSamara").val();
        let formLoginBDTolyatti = $("#formLoginBDTolyatti").val();
        let formPasswordBDTolyatti = $("#formPasswordBDTolyatti").val();

        let userAuth = {
            authCheck: authCheck,
            fecusPluginCheck: fecusPluginCheck,
            formLoginMtsInput: formLoginMtsInput,
            formPasswordMtsInput: formPasswordMtsInput,
            formLoginRemedyInput: formLoginRemedyInput,
            formPasswordRemedyInput: formPasswordRemedyInput,
            formLoginRemedyMgtsInput: formLoginRemedyMgtsInput,
            formPasswordRemedyMgtsInput: formPasswordRemedyMgtsInput,
            formLoginBDInput: formLoginBDInput,
            formPasswordBDInput: formPasswordBDInput,
            formLoginBDSamara: formLoginBDSamara,
            formPasswordBDSamara: formPasswordBDSamara,
            formLoginBDTolyatti: formLoginBDTolyatti,
            formPasswordBDTolyatti: formPasswordBDTolyatti
        };
        let userAuthJson = JSON.stringify(userAuth); 
        port.postMessage({joke: "setUserAuthPopup", json: userAuthJson});
        window.close();
    });
    
});



