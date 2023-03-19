// INTRODUCTION BACKGROUND ANIMATION
// INTRODUCTION BACKGROUND ANIMATION
// INTRODUCTION BACKGROUND ANIMATION
// INTRODUCTION BACKGROUND ANIMATION
// INTRODUCTION BACKGROUND ANIMATION

// PICTURE ANIMATION
// PICTURE ANIMATION

var $slider = document.getElementById("slider");
var $toggle = document.getElementById("toggle");

$toggle.addEventListener("click", function () {
  var isOpen = $slider.classList.contains("slide-in");

  $slider.setAttribute("class", isOpen ? "slide-out" : "slide-in");
});

// DESCRIPTION ANIMATION
// DESCRIPTION ANIMATION

var $slider = document.getElementById("slider2");
var $toggle = document.getElementById("toggle");

$toggle.addEventListener("click", function () {
  var isOpen = $slider.classList.contains("slide-in2");

  $slider.setAttribute("class", isOpen ? "slide-out2" : "slide-in2");
});

// SERVICE DESCRIPTION ANIMATION
// SERVICE DESCRIPTION ANIMATION

var slider = document.getElementById("slider3");
var toggle = document.getElementById("toggle");

toggle.addEventListener("click", function () {
  var isOpen = $slider.classList.contains("slide-in3");

  slider.setAttribute("class", isOpen ? "slide-out3" : "slide-in3");
});
