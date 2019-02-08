//alert("Hello from your Chrome extension!")
//var firstHref = $("a[href^='http']").eq(0).attr("href");
//var secondref = $("a[href^='http']").eq(1).attr("href");
  // var time_dur = document.querySelector('video').duration;
          
  // //var time_dur = document.getElementsByClassName("ytp-progress-bar ").getAttribute("aria-valuemax");

  // console.log(time_dur);
  
var vid = $('video').get(0);
if(vid){
vid.addEventListener('ended', function(e) {
  console.log("paldfds");
    chrome.runtime.sendMessage({message: "play_new_video"});
});
}