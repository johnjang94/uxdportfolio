// Swiper javascript
document.addEventListener("DOMContentLoaded", function () {
  const swiper = document.querySelector(".swiper");
  const images = swiper.querySelectorAll("img");
  let currentIndex = 0;

  function showImage(index) {
    images[currentIndex].style.opacity = 0;
    currentIndex = index;
    images[currentIndex].style.opacity = 1;
  }

  function nextImage() {
    const nextIndex = (currentIndex + 1) % images.length;
    showImage(nextIndex);
  }

  function prevImage() {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(prevIndex);
  }

  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");

  nextButton.addEventListener("click", nextImage);
  prevButton.addEventListener("click", prevImage);
});

// Video player
$(document).ready(function () {
  var ctrlVideo = document.getElementById("video");

  $("button").click(function () {
    if ($("button").hasClass("active")) {
      ctrlVideo.play();

      $("button").html("Pause");
      $("button").toggleClass("active");
    } else {
      ctrlVideo.pause();

      $("button").html("play");
      $("button").toggleClass("active");
    }
  });
});

var $container = $("#video1");
var $video = $container.children("video"),
  video = $video[0];
var $controls = $container.children(".controls");
var $play = $controls.children("button");

// control visibility
$container.on("mouseover mouseout", function (e) {
  $controls.css(
    "display",
    e.type === "mouseout" && video.paused ? "none" : "block"
  );
});

// play or pause
$play.on("click", toggle);
$video.on("click", toggle);

function toggle() {
  video[video.paused ? "play" : "pause"]();
}

// todo: cover more events (seeked, error etc.)
$video.on("play pause ended", updateUI);

// update control UI elements (todo: update time/progress etc.)
function updateUI() {
  $play.text(video.paused ? "Play" : "Pause");
}
