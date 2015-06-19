function backgroundScript() {
  chrome.tabs.onLoad.addListener(function(tab) {
    chrome.tabs.executeScript(null, {file: "content_script.js"});
  })
}