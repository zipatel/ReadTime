chrome.runtime.onMessage.addListener(function(message){
    if((message.from === 'content_script') && (message.subject === 'sendTime')){
        time = message.time;
        chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
          if(message.method == "getTime"){
            sendResponse(time);
          }
        });
    };
});