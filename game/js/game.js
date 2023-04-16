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
  // Hide all other slides except the current one
  for (let i = 0; i < slides.length; i++) {
    if (i !== currentSlide) {
      slides[i].style.display = "none";
    } else {
      slides[i].style.display = "block";
    }
  }

  // Move to the next slide
  currentSlide = (currentSlide + 1) % slides.length;
}
