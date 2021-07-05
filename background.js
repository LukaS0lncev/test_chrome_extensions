var storage = chrome.storage.local;
var userAuthJson = false;
  chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name == "userAuth");
    port.onMessage.addListener(function(msg) {
      if (msg.joke == "getUserAuthPopup") {
        storage.get('userAuth', function(result) {
          let json = result.userAuth;
          if(json != undefined) {
            userAuthJson = json;
            port.postMessage({userAuthJson: userAuthJson});
          } else {
            userAuthJson = false;
            port.postMessage({userAuthJson: userAuthJson});
          }
        });
      } else if(msg.joke == "setUserAuthPopup") {
        storage.set({userAuth: msg.json});
      }
    });
  });