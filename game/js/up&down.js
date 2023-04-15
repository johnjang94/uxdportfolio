// <<<<<< BASIC FIELDS THAT EXIST FOR THE GAME >>>>>>>>>>
let chanceArea = document.getElementById("chance-area");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
// <<<<<< NEEDED DURING PLAY >>>>>>>>
let go = document.getElementById("go");
let reset = document.getElementById("reset");
// <<<<<< INFO FOR THE COMPUTER GENERATED ONLY >>>>>>>>>>>
let computerNum = Math.floor(Math.random() * 100);

let chances = 5;
let gameOver = false;
let history = [];

userInput.addEventListener("focus", function () {
  userInput.value = "";
});

go.addEventListener("click", play);
resetButton.addEventListener("click", reset);

function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    console.log("Please try a number between 1 and 100.");
    return;
  }

  if (userValue % 1 != 0) {
    document.getElementById("userInput").style.borderColor = "red";
    console.log("please input an integer, not a decimal");
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent =
      "You've already tried this number. Please try another number.";
    return;
  }

  // <<<<<< Function about leftover chances >>>>>>
  chances--;
  chanceArea.textContent = `You have ${chances} left.`;
  console.log("chance", chances);

  if (userValue < computerNum) {
    resultArea.textContent = "UP!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "DOWN!";
  } else {
    resultArea.textContent = "YOU GOT IT!!";
    gameOver = true;
  }

  history.push(userValue);
  console.log(history);

  if (chances < 1) {
    gameOver = true;
  }
}

function reset() {
  userInput.value = "";
  pickRandomNum();

  resultArea.textContent = "Here is the outcome:";
}

pickRandomNum();
