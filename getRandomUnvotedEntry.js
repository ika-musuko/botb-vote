const unvotedEntries = Array.from(document.querySelectorAll(".boxLink"))
  .filter(el => {
    const unvotedIndicator = el.querySelector(".t0.fright");
    return unvotedIndicator && unvotedIndicator.children.length > 0;
  })
  .map(el => el.href);

const randomUnvotedEntry = unvotedEntries[Math.floor(Math.random() * unvotedEntries.length)];

// return value
randomUnvotedEntry;
