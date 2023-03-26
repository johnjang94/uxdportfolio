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
