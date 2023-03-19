// let originalGlassvu = document.getElementById("#overview1");

// if (originalGlassvu.addEventListener("click")) {
//   originalGlassvu.style.width = "800px";
//   originalGlassvu.style.height = "500px";
// }

// CORRECTED BY ChatGPT

// --> ChatGPT's idea
function expandImage() {
  let img = document.getElementById("overview1");
  if (!img.classList.contains("expanded")) {
    img.classList.add("expanded");
  }
}

// --> My idea being corrected.
// let originalGlassvu = document.getElementById("overview1");

// originalGlassvu.addEventListener("click", function () {
//   originalGlassvu.style.width = "800px";
//   originalGlassvu.style.height = "500px";
// });

// Other possible ideas that I had for this part:

// // originalGlassvu.addEventListener("click", expansion);

// // function expansion() {
// //   originalGlassvu.style.width = "800px";
// //   originalGlassvu.style.height = "500px";
// // }

// // expansion();
