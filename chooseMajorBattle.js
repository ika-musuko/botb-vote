const currentMajorBattles = Array.from(document.querySelectorAll(".boxLink"))
  .filter(el => {
    const completion = el.querySelector(".tb1");
    return completion && completion.textContent.includes("scheduled");
  })
  .map(el => el.href);

const randomCurrentMajorBattle = currentMajorBattles[Math.floor(Math.random() * currentMajorBattles.length)];

// return value
randomCurrentMajorBattle;
