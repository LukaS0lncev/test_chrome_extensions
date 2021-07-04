//// background.js ////

var storage = chrome.storage.local;

  chrome.runtime.sendMessage.addListener((message, sender, sendResponse) => {
    if (message.key === 'get-user-data') {
      sendResponse('demo-user');
    }

    if (message.key === 'getUserAuth') {
        let key = message.data.key;
        storage.get(key, function(result) {
            let json = result[key];
            if(json != undefined) {
                //console.log(JSON.parse(json));
                sendResponse(true);
            } else {
                sendResponse(false);
            }
        });
    }

    if (message.key === 'setUserAuth') {
        let key = message.data.key, value = message.data.json;
        storage.set({key: value});
        //storage.set({[key]: value});
    }
  });