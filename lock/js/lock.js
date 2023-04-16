const lock = document.querySelector(".lock");
const passwordInput = document.getElementById("password-input");

let resultArea = document.getElementById("result-area");

// Add event listener to the input box to listen for changes
passwordInput.addEventListener("change", function () {
  // Check if the entered password is correct
  if (passwordInput.value === "Canada!004") {
    // If the password is correct, add a CSS class to the lock element to unlock it
    lock.classList.add("unlocked");
    passwordInput.classList.add("correct-password");
    (resultArea.textContent = "You may enter."),
      (resultArea.style.color = "green");
    window.location =
      "https://johnjang94.github.io/uxdportfolio/televu_introduction.html";
  } else {
    (resultArea.textContent =
      "That is not a correct password. Please try again."),
      (resultArea.style.color = "red");
    passwordInput.style.borderColor = "red";
  }
});
