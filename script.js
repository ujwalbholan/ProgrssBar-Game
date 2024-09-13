const bar1 = document.getElementById("val1");
const bar2 = document.getElementById("val2");
const winner1 = document.getElementById("showDamageLevel");
const winner2 = document.getElementById("showDamageLevel2");
const winner = document.getElementById("showDamageLevel3");
const btnAttack = document.getElementById("buttenAttack");
const reSetBtn = document.getElementById("button");

function myChangeVal() {
  let val = Math.floor(Math.random() * 10);
  let progressVal = bar1.value - val;
  bar1.value = progressVal;
  //   console.log(progressVal);

  progressVal < 0 ? 0 : progressVal;

  let val1 = Math.floor(Math.random() * 10);
  let progressVal1 = bar2.value - val1;
  bar2.value = progressVal1;
  //   console.log(progressVal1);

  progressVal1 < 0 ? 0 : progressVal1;

  const element = document.createElement("div");
  element.innerText = `Player 1 attack by -> ${val} %`;
  winner1.prepend(element);

  const element2 = document.createElement("div");
  element2.innerText = `Player 2 attack by -> ${val1} %`;
  winner2.prepend(element2);

  if (progressVal <= 0) {
    winner.innerText = "PLAYER 2 Won The Game";
    btnAttack.setAttribute("disabled", "");
    reSetBtn.style["display"] = "block";
  } else if (progressVal1 <= 0) {
    winner.innerText = "PLAYER 1 Won The Game";
    btnAttack.setAttribute("disabled", "");
    reSetBtn.style["display"] = "block";
  }

  // element2.className = "generatedDiv";
}

function reset() {
  window.location.reload();
}
