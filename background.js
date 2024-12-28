function navigateTo(tab, url, afterUpdate) {
  chrome.tabs.update(tab.id, { url: url });
  const runAfterUpdate = function() {
    afterUpdate();
    chrome.tabs.onUpdated.removeListener(runAfterUpdate);
  };
  chrome.tabs.onUpdated.addListener(runAfterUpdate);
}


chrome.browserAction.onClicked.addListener(function(tab) {

  // choose current major battle
  navigateTo(tab, "https://battleofthebits.com/arena/MajorBattles", function() {
    chrome.tabs.executeScript(tab.id, { file: "chooseMajorBattle.js" }, function(results) {

      // navigate to the battle
      const battleId = results[0];
      navigateTo(tab, `https://battleofthebits.com/arena/Battle/${battleId}`, function() {

        // get random unvoted entry
        chrome.tabs.executeScript(tab.id, { file: "getRandomUnvotedEntry.js" }, function(results) {

          // navigate to the unvoted entry
          const entryId = results[0];
          navigateTo(tab, `https://battleofthebits.com/arena/Entry//${entryId}`);
        });
      });
    });
  });
});
