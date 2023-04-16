const slideshow = document.getElementById("slide-show");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 3000);

slideCount++;
// Check if the slide count is equal to 5
if (slideCount === 5) {
  // Set a delay of 8 seconds before displaying the next slide
  setInterval(nextSlide, 8000);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = "block";

  if (slides !== slides[currentSlide]) {
    slides.style.display = "none";
  }
}
