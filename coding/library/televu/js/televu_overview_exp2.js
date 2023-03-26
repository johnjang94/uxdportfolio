const img = document.getElementById("overview1");
// First picture
const box = document.getElementById("image-container");
const name = document.getElementById("glassvu");
// second picture
const img2 = document.getElementById("overview2");
const name2 = document.getElementById("reportvu");
// third picture
const img3 = document.getElementById("overview3");
const name3 = document.getElementById("oldvid");

function expandImage(img) {
  // check if the image is already expanded
  if (img.classList.contains("expanded")) {
    return;
  }

  // expand the image
  img.classList.add("expanded");

  // Show everything else before expanding the image
  // Background
  box.style.backgroundColor = "#FAFAFA";
  box.style.width = "970px";
  box.style.height = "720px";
  box.style.marginLeft = "120px";
  box.style.transition = "ease-in-out";
  box.style.transitionDuration = "1s";
  // First picture
  img.style.marginTop = "30px";
  img.style.marginLeft = "30px";
  img.style.width = "900px";
  img.style.height = "550px";
  img.style.transition = "ease-in-out";
  img.style.transitionDuration = "1s";
  img.querySelector(".description").style.display = "block";

  // hide other images
  if (img === img) {
    img2.style.display = "none";
    img3.style.display = "none";
  } else if (img === img2) {
    img.style.display = "none";
    img3.style.display = "none";
  } else if (img === img3) {
    img.style.display = "none";
    img2.style.display = "none";
  }
}
