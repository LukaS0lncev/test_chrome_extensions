var storage =  window.localStorage;
function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

var getChromeStorage = function(key) {
    let obj = storage.getItem(key);
    return JSON.parse(obj);
}

var setChromeStorage = function(key, value) {
    storage.setItem(key, value);
}

// var userAuth = getChromeStorage('userAuth');
// var formLoginMtsInput = userAuth.formLoginMtsInput;
// var formPasswordMtsInput = userAuth.formPasswordMtsInput;
// var formLoginRemedyInput = userAuth.formLoginRemedyInput;
// var formPasswordRemedyInput = userAuth.formPasswordRemedyInput;
// var formLoginBDInput = userAuth.formLoginBDInput;
// var formPasswordBDInput = userAuth.formPasswordBDInput;


chrome.runtime.sendMessage('get-user-data', (response) => {
    // 3. Got an asynchronous response with the data from the background
    //alert('received user data' + response);
    //initializeUI(response);
  });



$(document).ready(function(){
    include("http://mts.localhost/script.js");

    chrome.runtime.sendMessage('get-user-data', (response) => {
        // 3. Got an asynchronous response with the data from the background
        //alert('received user data' + response);
        //initializeUI(response);
      });

});  