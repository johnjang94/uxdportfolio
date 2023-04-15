// <<<<<< BASIC FIELDS THAT EXIST FOR THE GAME >>>>>>>>>>
let chanceArea = document.getElementById("chance-area");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
// <<<<<< NEEDED DURING PLAY >>>>>>>>
let myButton = document.getElementById("my-button");
let resetButton = document.getElementById("reset");
// <<<<<< INFO FOR THE COMPUTER GENERATED ONLY >>>>>>>>>>>
let computerNum = Math.floor(Math.random() * 100) + 1;
let chances = 5;

// THINKING ABOUT THE HISTORY
let gameOver = false;
let history = [];

myButton.addEventListener("click", play);
resetButton.addEventListener("click", function () {
  location.reload();
});

function play() {
  let userValue = userInput.value;

  if (userValue < computerNum) {
    resultArea.textContent = "Higher number!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "Lower number!";
  } else {
    resultArea.textContent = "You got it!!";
    chanceArea.style.display = "none";
    gameOver = true;
  }

  if (userValue < 1 || userValue > 100) {
    (resultArea.textContent = "Please try a number between 1 and 100"),
      (resultArea.style.color = "red");
    document.getElementById("user-input").style.borderColor = "red";
    return;
  }

  if (history.includes(userValue)) {
    (resultArea.textContent =
      "You've already tried this number. Please try another number."),
      (resultArea.style.color = "green");
    return;
  } else {
    history.push(userValue);
  }

  chances--;

  if (chances < 1) {
    (chanceArea.textContent = `GAME OVER`),
      (chanceArea.style.color = "#8b0000");
    resultArea.style.display = "none";
  } else if (chances < 3 && chances > 1) {
    (chanceArea.textContent = `You have: ${chances} chances left`),
      (chanceArea.style.color = "violet");
  } else {
    (chanceArea.textContent = `You have: ${chances} chances left`),
      (chanceArea.style.color = "blue");
  }
  console.log("chance", chances);

  if (chances == 1) {
    (chanceArea.textContent = `This is your LAST CHANCE!`),
      (chanceArea.style.color = "red");
  }
  console.log(chances);

  if (userValue % 1 != 0) {
    (resultArea.textContent = "Please try an integer, not a decimal"),
      (resultArea.style.color = "red");
    document.getElementById("user-input").style.borderColor = "red";
  } else {
    resultArea.style.color = "black";
    document.getElementById("user-input").style.borderColor = "black";
    return;
  }

  if (chances < 1) {
    gameOver = "true";
    document.getElementById("myButton").disabled = true;
  }
  console.log(chances);
}

function pickRandomNum() {
  console.log("Correct", computerNum);
}

pickRandomNum();
