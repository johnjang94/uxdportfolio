// DESCRIPTIVE TAGS FOR THE FIRST PICTURE (Original GlassVU)
let image1 = document.getElementById("overview1");
let name1 = document.getElementById("name1");
// == ONCE EXPANDED, THE DETAIL TO SHOW UP FOR THE FIRST PICTURE (Original GlassVU) ==
let message1 = document.getElementById("message1");
let box1 = document.getElementById("image-container1");
let closeBtn1 = document.getElementById("close-btn1");

// DESCRIPTIVE TAGS FOR THE SECOND PICTURE (Original ReportVU)
let image2 = document.getElementById("overview2");
let name2 = document.getElementById("name2");
//  == ONCE EXPANDED, THE DETAIL TO SHOW UP FOR THE SECOND PICTURE (Original ReportVU) ==
let message2 = document.getElementById("message2");
let box2 = document.getElementById("image-container2");
let closeBtn2 = document.getElementById("close-btn2");

// DESCRIPTIVE TAGS FOR THE THIRD PICTURE (Original Video)
let image3 = document.getElementById("overview3");
let name3 = document.getElementById("name3");
//  == ONCE EXPANDED, THE DETAIL TO SHOW UP FOR THE SECOND PICTURE (Original ReportVU) ==
let message3 = document.getElementById("message3");
let box3 = document.getElementById("image-container3");
let closeBtn3 = document.getElementById("close-btn3");

// =============== FUNCTIONS TO BE DONE ============================
// =============== GlassVU PICTURE EXPANSION =======================
function expandImage1() {
  // FIRST PICTURE (Original GlassVU) = HIDE THE DETAIL, THE CLOSE (X) BUTTON, AND THE NAME TAG
  message1.style.display = "none";
  closeBtn1.style.display = "none";
  name1.style.display = "none";

  // SECOND PICTURE (Original ReportVU) = HIDE THE PICTURE AND THE TAG
  image2.style.display = "none";
  name2.style.display = "none";

  // THIRD PICTURE (Original Video) = HIDE THE PICTURE AND THE TAG
  image3.style.display = "none";
  name3.style.display = "none";

  // ONCE THE FIRST PICTURE IS "CLICKED" TO BE EXPANDED, THE BIGGER PICTURE AND THE DETAIL SHOWS UP WITH THE CLOSE (X) BUTTON
  // BIGGER FIRST PICTURE
  image1.classList.add("expanded");
  image1.style.marginTop = "30px";
  image1.style.marginLeft = "30px";
  image1.style.width = "900px";
  image1.style.height = "550px";
  image1.style.transition = "ease-in-out";
  image1.style.transitionDuration = "1s";
  // THE FIRST PICTURE'S BACKGROUND
  box1.style.backgroundColor = "#FAFAFA";
  box1.style.width = "970px";
  box1.style.height = "720px";
  box1.style.marginLeft = "120px";
  box1.style.transition = "ease-in-out";
  box1.style.transitionDuration = "1s";

  // THE DETAIL FOR THE FIRST PICTURE AND THE CLOSE (X) BUTTON WILL ONLY SHOW ONCE THE PICTURE HAS BEEN COMPLETELY EXPANDED
  setTimeout(function () {
    message1.style.display = "block";
    message1.style.marginLeft = "25px";
    message1.style.marginBottom = "20px";

    // Show close button after expanding the image
    closeBtn1.style.display = "block";
    closeBtn1.style.marginTop = "-700px";
    closeBtn1.style.marginLeft = "610px";
  }, 1000);
}

// =============== GlassVU PICTURE COLLAPSE =======================
function collapseImage1() {
  // HIDE THE FIRST PICTURE (GlassVU) DETAIL, ITS CLOSE (X) BUTTON, AND ITS TAG NAME
  message1.style.display = "none";
  closeBtn1.style.display = "none";
  name1.style.display = "none";

  // HIDE THE SECOND PICTURE AND ITS TAG NAME
  image2.style.display = "none";
  name2.style.display = "none";

  // HIDE THE THIRD PICTURE AND ITS TAG NAME
  image3.style.display = "none";
  name3.style.display = "none";

  // ONCE THE FIRST PICTURE IS "CLICKED" TO BE COLLAPSED, THE PICTURE SHOULD BE SMALL AND ITS TAG NAME SHOULD APPEAR
  // SMALLER FIRST PICTURE
  image1.classList.remove("expanded");
  image1.style.width = "328px";
  image1.style.height = "217px";
  image1.style.marginTop = "0px";
  image1.style.marginLeft = "0px";
  image1.style.transition = "ease-in-out";
  image1.style.transitionDuration = "1s";
  // COLLAPSE THE BACKGROUND
  box1.style.backgroundColor = "#FFFFFF";
  box1.style.transition = "ease-in-out";
  box1.style.transitionDuration = "1s";

  // AFTER THE COLLAPSING ANIMATION, THE PICTURES AND ITS TAGS SHOULD ALL SHOW UP
  setTimeout(function () {
    // SHOW THE FIRST PICTURE AND ITS TAG NAME
    image1.style.display = "inline";
    name1.style.display = "inline";
    name1.style.marginLeft = "119px";
    // SHOW THE SECOND PICTURE AND ITS TAG NAME
    image2.style.display = "inline";
    image2.style.marginTop = "-720px";
    name2.style.display = "inline";
    name2.style.marginTop = "-490px";
    // SHOW THE THIRD PICTURE AND ITS TAG NAME
    image3.style.display = "inline";
    image3.style.marginTop = "-720px";
    name3.style.display = "inline";
    name3.style.marginTop = "-490px";
  }, 1000);
}

// TOGGLE FIRST PICTURE ON CLICK
function toggleImage(id) {
  console.log("id", id);
  let image1 = document.getElementById(id);

  if (!image1.classList.contains("expanded")) {
    expandImage1(id);
  } else {
    collapseImage1(id);
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
