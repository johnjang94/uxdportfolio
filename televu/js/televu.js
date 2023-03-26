// =============== RESOURCE FROM THE LIBRARY =======================
function expandImage() {
  let img = document.getElementById("overview1");
  let name = document.getElementById("glassvu");
  let message = document.getElementById("message");
  // Background for first picture
  let box = document.getElementById("image-container");
  let closeBtn = document.getElementById("close-btn");
  // Second picture
  let img2 = document.getElementById("overview2");
  let name2 = document.getElementById("reportvu");
  // Third picture
  let img3 = document.getElementById("overview3");
  let name3 = document.getElementById("oldvid");

  // Hide overview3 completely (picture + name)
  img3.style.display = "none";
  name3.style.display = "none";

  // Hide overview2 completely (picture + name)
  img2.style.display = "none";
  name2.style.display = "none";

  // Hide message before expanding the image
  message.style.display = "none";
  closeBtn.style.display = "none";

  // Show everything else before expanding the image
  // Background
  box.style.backgroundColor = "#FAFAFA";
  box.style.width = "970px";
  box.style.height = "720px";
  box.style.marginLeft = "120px";
  box.style.transition = "ease-in-out";
  box.style.transitionDuration = "1s";
  // First picture
  img.classList.add("expanded");
  img.style.marginTop = "30px";
  img.style.marginLeft = "30px";
  img.style.width = "900px";
  img.style.height = "550px";
  img.style.transition = "ease-in-out";
  img.style.transitionDuration = "1s";
  name.style.display = "none";

  setTimeout(function () {
    message.style.display = "block";
    message.style.marginLeft = "25px";
    message.style.marginBottom = "20px";

    // Show close button after expanding the image
    closeBtn.style.display = "block";
    closeBtn.style.marginTop = "-700px";
    closeBtn.style.marginLeft = "610px";
  }, 1000);
}

function collapseImage() {
  let img = document.getElementById("overview1");
  let name = document.getElementById("glassvu");
  let message = document.getElementById("message");

  // Second picture
  let img2 = document.getElementById("overview2");
  let name2 = document.getElementById("reportvu");

  // Third picture
  let img3 = document.getElementById("overview3");
  let name3 = document.getElementById("oldvid");

  // Background
  let box = document.getElementById("image-container");
  let closeBtn = document.getElementById("close-btn");

  // hide overview2 and reportvu before collapsing the image
  img2.style.display = "none";
  name2.style.display = "none";
  closeBtn.style.display = "none";

  // hide glassvu before collapsing the image
  name.style.display = "none";

  // Collapse the image
  img.classList.remove("expanded");
  img.style.width = "328px";
  img.style.height = "217px";
  img.style.marginTop = "0px";
  img.style.marginLeft = "0px";
  img.style.transition = "ease-in-out";
  img.style.transitionDuration = "1s";

  // collapse the background
  box.style.backgroundColor = "#FFFFFF";
  box.style.transition = "ease-in-out";
  box.style.transitionDuration = "1s";
  message.style.display = "none";
  name.style.marginLeft = "3px";

  setTimeout(function () {
    // Show overview3 and original video after collapsing the image
    img3.style.display = "inline";
    img3.style.marginTop = "-720px";
    name3.style.display = "inline";
    name3.style.marginTop = "-490px";
    // Show overview2 and reportvu after collapsing the image
    img2.style.display = "inline";
    img2.style.marginTop = "-720px";
    name2.style.display = "inline";
    name2.style.marginTop = "-490px";
    // Show glassvu after collapsing the image
    img.style.display = "inline";
    name.style.display = "inline";
    name.style.marginLeft = "119px";
  }, 1000);
}

function toggleImage() {
  let img = document.getElementById("overview1");

  if (!img.classList.contains("expanded")) {
    expandImage();
  } else {
    collapseImage();
  }
}

//  ============== MY OWN EXPERIMENTATION ATTEMPTED ================
// let overview1 = document.getElementById("overview1");

// function expandImage() {
//   overview1.style.width = "1000px";
//   overview1.style.height = "auto";
// }

// function collapseImage() {
//   overview1.style.width = "328px";
//   overview1.style.height = "217px";
// }

// function toggleImage() {
//   if (overview1.addEventListener("click", expandImage())) {
//     return;
//   } else {
//     collapseImage();
//   }
// }

//  ============== RESOURCE FROM THE OLDER VERSION ================
// // POP-UP NAVIGATION MENU PICTURE FOR ASSUMPTIONS SECTION
// // POP-UP NAVIGATION MENU PICTURE FOR ASSUMPTIONS SECTION
// // POP-UP NAVIGATION MENU PICTURE FOR ASSUMPTIONS SECTION

// function togglePopup7() {
//   document.getElementById("popup-7").classList.toggle("active");
// }

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     document.getElementById("popup-7").classList.toggle("active");
//   }
// });

// // POP-UP ICONS & LAYOUTS PICTURE FOR ASSUMPTIONS SECTION
// // POP-UP ICONS & LAYOUTS PICTURE FOR ASSUMPTIONS SECTION
// // POP-UP ICONS & LAYOUTS PICTURE FOR ASSUMPTIONS SECTION

// function togglePopup8() {
//   document.getElementById("popup-8").classList.toggle("active");
// }

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     document.getElementById("popup-8").classList.toggle("active");
//   }
// });

// // POP-UP INTERACTIVITY PICTURE FOR ASSUMPTIONS SECTION
// // POP-UP INTERACTIVITY PICTURE FOR ASSUMPTIONS SECTION
// // POP-UP INTERACTIVITY PICTURE FOR ASSUMPTIONS SECTION

// function togglePopup9() {
//   document.getElementById("popup-9").classList.toggle("active");
// }

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     document.getElementById("popup-9").classList.toggle("active");
//   }
// });

// // POP-UP LOGIN PAGE PARAGRAPH FOR LESSONS LEARNED SECTION
// // POP-UP LOGIN PAGE PARAGRAPH FOR LESSONS LEARNED SECTION
// // POP-UP LOGIN PAGE PARAGRAPH FOR LESSONS LEARNED SECTION

// function togglePopup10() {
//   document.getElementById("popup-10").classList.toggle("active");
// }

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     document.getElementById("popup-10").classList.toggle("active");
//   }
// });

// // POP-UP NAVIGATION PAGE PARAGRAPH FOR LESSONS LEARNED SECTION
// // POP-UP NAVIGATION PAGE PARAGRAPH FOR LESSONS LEARNED SECTION
// // POP-UP NAVIGATION PAGE PARAGRAPH FOR LESSONS LEARNED SECTION

// function togglePopup11() {
//   document.getElementById("popup-11").classList.toggle("active");
// }

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     document.getElementById("popup-11").classList.toggle("active");
//   }
// });

// // POP-UP VIDEO-CONFERENCE SESSION PARAGRAPH FOR LESSONS LEARNED SECTION
// // POP-UP VIDEO-CONFERENCE SESSION PARAGRAPH FOR LESSONS LEARNED SECTION
// // POP-UP VIDEO-CONFERENCE SESSION PARAGRAPH FOR LESSONS LEARNED SECTION

// function togglePopup12() {
//   document.getElementById("popup-12").classList.toggle("active");
// }

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     document.getElementById("popup-12").classList.toggle("active");
//   }
// });

// // POP-UP HISTORY SESSION PARAGRAPH FOR LESSONS LEARNED SECTION
// // POP-UP HISTORY SESSION PARAGRAPH FOR LESSONS LEARNED SECTION
// // POP-UP HISTORY SESSION PARAGRAPH FOR LESSONS LEARNED SECTION

// function togglePopup13() {
//   document.getElementById("popup-13").classList.toggle("active");
// }

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     document.getElementById("popup-13").classList.toggle("active");
//   }
// });

// // POP-UP HISTORY SESSION PARAGRAPH FOR LESSONS LEARNED SECTION
// // POP-UP HISTORY SESSION PARAGRAPH FOR LESSONS LEARNED SECTION
// // POP-UP HISTORY SESSION PARAGRAPH FOR LESSONS LEARNED SECTION

// function togglePopup14() {
//   document.getElementById("popup-14").classList.toggle("active");
// }

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     document.getElementById("popup-14").classList.toggle("active");
//   }
// });

// // POP-UP HISTORY SESSION PARAGRAPH FOR LESSONS LEARNED SECTION
// // POP-UP HISTORY SESSION PARAGRAPH FOR LESSONS LEARNED SECTION
// // POP-UP HISTORY SESSION PARAGRAPH FOR LESSONS LEARNED SECTION

// function togglePopup15() {
//   document.getElementById("popup-15").classList.toggle("active");
// }

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     document.getElementById("popup-15").classList.toggle("active");
//   }
// });

// // POP-UP LOW-FIDELITY HISTORY PAGE FOR LESSONS LEARNED SECTION
// // POP-UP LOW-FIDELITY HISTORY PAGE FOR LESSONS LEARNED SECTION
// // POP-UP LOW-FIDELITY HISTORY PAGE FOR LESSONS LEARNED SECTION

// function togglePopup16() {
//   document.getElementById("popup-16").classList.toggle("active");
// }

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     document.getElementById("popup-16").classList.toggle("active");
//   }
// });

// // POP-UP LOW-FIDELITY HISTORY PAGE FOR LESSONS LEARNED SECTION
// // POP-UP LOW-FIDELITY HISTORY PAGE FOR LESSONS LEARNED SECTION
// // POP-UP LOW-FIDELITY HISTORY PAGE FOR LESSONS LEARNED SECTION

// function togglePopup17() {
//   document.getElementById("popup-17").classList.toggle("active");
// }

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     document.getElementById("popup-17").classList.toggle("active");
//   }
// });

// // POP-UP LOW-FIDELITY GLASSVU PAGE FOR LESSONS LEARNED SECTION
// // POP-UP LOW-FIDELITY GLASSVU PAGE FOR LESSONS LEARNED SECTION
// // POP-UP LOW-FIDELITY GLASSVU PAGE FOR LESSONS LEARNED SECTION

// function togglePopup18() {
//   document.getElementById("popup-18").classList.toggle("active");
// }

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     document.getElementById("popup-18").classList.toggle("active");
//   }
// });

// // POP-UP REDESIGNED REMOTEVU PAGE FOR LESSONS LEARNED SECTION
// // POP-UP REDESIGNED REMOTEVU PAGE FOR LESSONS LEARNED SECTION
// // POP-UP REDESIGNED REMOTEVU PAGE FOR LESSONS LEARNED SECTION

// function togglePopup19() {
//   document.getElementById("popup-19").classList.toggle("active");
// }

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     document.getElementById("popup-19").classList.toggle("active");
//   }
// });

// // POP-UP REDESIGNED VIDEO-CONFERENCE PAGE FOR LESSONS LEARNED SECTION
// // POP-UP REDESIGNED VIDEO-CONFERENCE PAGE FOR LESSONS LEARNED SECTION
// // POP-UP REDESIGNED VIDEO-CONFERENCE PAGE FOR LESSONS LEARNED SECTION

// function togglePopup20() {
//   document.getElementById("popup-20").classList.toggle("active");
// }

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     document.getElementById("popup-20").classList.toggle("active");
//   }
// });

// // POP-UP REDESIGNED LOGIN PAGE FOR LESSONS LEARNED SECTION
// // POP-UP REDESIGNED LOGIN PAGE FOR LESSONS LEARNED SECTION
// // POP-UP REDESIGNED LOGIN PAGE FOR LESSONS LEARNED SECTION

// function togglePopup21() {
//   document.getElementById("popup-21").classList.toggle("active");
// }

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     document.getElementById("popup-21").classList.toggle("active");
//   }
// });

// // POP-UP  RESAONSING FOR REDESIGNED HISTORY PAGE FOR LESSONS LEARNED SECTION
// // POP-UP  RESAONSING FOR REDESIGNED HISTORY PAGE FOR LESSONS LEARNED SECTION
// // POP-UP  RESAONSING FOR REDESIGNED HISTORY PAGE FOR LESSONS LEARNED SECTION

// function togglePopup22() {
//   document.getElementById("popup-22").classList.toggle("active");
// }

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     document.getElementById("popup-22").classList.toggle("active");
//   }
// });

// // POP-UP  RESAONSING FOR REDESIGNED HISTORY PAGE FOR LESSONS LEARNED SECTION
// // POP-UP  RESAONSING FOR REDESIGNED HISTORY PAGE FOR LESSONS LEARNED SECTION
// // POP-UP  RESAONSING FOR REDESIGNED HISTORY PAGE FOR LESSONS LEARNED SECTION

// function togglePopup23() {
//   document.getElementById("popup-23").classList.toggle("active");
// }

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     document.getElementById("popup-23").classList.toggle("active");
//   }
// });

// // POP-UP  RESAONSING FOR REDESIGNED GLASSVU PAGE FOR LESSONS LEARNED SECTION
// // POP-UP  RESAONSING FOR REDESIGNED GLASSVU PAGE FOR LESSONS LEARNED SECTION
// // POP-UP  RESAONSING FOR REDESIGNED GLASSVU PAGE FOR LESSONS LEARNED SECTION

// function togglePopup24() {
//   document.getElementById("popup-24").classList.toggle("active");
// }

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     document.getElementById("popup-24").classList.toggle("active");
//   }
// });

// // Video Play Settings //
// // Video Play Settings //
// // Video Play Settings //
// // Video Play Settings //
// // Video Play Settings //

// $(document).ready(function () {
//   var ctrlVideo = document.getElementById("video");

//   $("button").click(function () {
//     if ($("button").hasClass("active")) {
//       ctrlVideo.play();

//       $("button").html("Pause");
//       $("button").toggleClass("active");
//     } else {
//       ctrlVideo.pause();

//       $("button").html("play");
//       $("button").toggleClass("active");
//     }
//   });
// });

// var $container = $("#video1");
// var $video = $container.children("video"),
//   video = $video[0];
// var $controls = $container.children(".controls");
// var $play = $controls.children("button");

// // control visibility
// $container.on("mouseover mouseout", function (e) {
//   $controls.css(
//     "display",
//     e.type === "mouseout" && video.paused ? "none" : "block"
//   );
// });

// // play or pause
// $play.on("click", toggle);
// $video.on("click", toggle);

// function toggle() {
//   video[video.paused ? "play" : "pause"]();
// }

// // todo: cover more events (seeked, error etc.)
// $video.on("play pause ended", updateUI);

// // update control UI elements (todo: update time/progress etc.)
// function updateUI() {
//   $play.text(video.paused ? "Play" : "Pause");
// }
