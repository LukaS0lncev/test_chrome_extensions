$(function(){
    $(document).ready(function(){
        chrome.runtime.sendMessage({key: 'getUserAuth', data: {key: 'userAuth'}}, function  (response){
            
            //console.log('response',response);
            alert(response);
            if(response) {
                //let userAuth = JSON.parse(response.json);
                let userAuth = {};
                $("#formLoginMtsInput").val(userAuth.formLoginMtsInput);
                $("#formPasswordMtsInput").val(userAuth.formPasswordMtsInput);
                $("#formLoginRemedyInput").val(userAuth.formLoginRemedyInput);
                $("#formPasswordRemedyInput").val(userAuth.formPasswordRemedyInput);
                $("#formLoginBDInput").val(userAuth.formLoginBDInput);
                $("#formPasswordBDInput").val(userAuth.formPasswordBDInput);
            }
          });
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
        chrome.runtime.sendMessage({key: 'setUserAuth', data: {
            key: 'userAuth', 
            json: userAuthJson
        }}, (res) => {});
        window.close();
    });
    
});



