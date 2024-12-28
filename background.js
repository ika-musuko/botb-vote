function navigateTo(tab, url, afterUpdate) {
  chrome.tabs.update(tab.id, { url: url });
  chrome.tabs.onUpdated.addListener(afterUpdate);
}

chrome.browserAction.onClicked.addListener(function(tab) {
  navigateTo(tab, "https://battleofthebits.com", () => {
    // choose a random major battle
    chrome.tabs.executeScript(tab.id, { file: "randomVote.js" }, function() {
    });
  });
});
