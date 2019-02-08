

// Called when the user clicks on the browser action.
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message == "play_new_video")
      {
        chrome.tabs.create({url : all_urls[0]})
        all_urls.splice(0,1);
      }
  });


all_urls= [];
all_times = [];
    function push_to_urls(info){
        all_urls.push(info.linkUrl);
        console.log(all_urls);
        
  
  }

    
        chrome.contextMenus.create({
            title : 'ADD this link',
    
            contexts: ['link'],
            onclick : push_to_urls
          });
          
          
          


    

