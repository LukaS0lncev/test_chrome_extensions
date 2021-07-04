var storage =  window.localStorage;

$(function(){
    $(document).ready(function(){
        let userAuth = getChromeStorage('userAuth');
        if(userAuth) {
            $("#formLoginMtsInput").val(userAuth.formLoginMtsInput);
            $("#formPasswordMtsInput").val(userAuth.formPasswordMtsInput);
            $("#formLoginRemedyInput").val(userAuth.formLoginRemedyInput);
            $("#formPasswordRemedyInput").val(userAuth.formPasswordRemedyInput);
            $("#formLoginBDInput").val(userAuth.formLoginBDInput);
            $("#formPasswordBDInput").val(userAuth.formPasswordBDInput);
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
        setChromeStorage('userAuth', userAuthJson);
        window.close();
    });

    var getChromeStorage = function(key) {
        let obj = storage.getItem(key);
        return JSON.parse(obj);
    }
    
    var setChromeStorage = function(key, value) {
        storage.setItem(key, value);
    }
    
});

