// First image (Original GlassVU)
const image1 = document.getElementById("image1");
// First image's span block
const subtitle1 = document.getElementById("subtitle1");

// First image's background on expansion
const box1 = document.getElementById("image-container1");

// Second image (Original ReportVU)
const image2 = document.getElementById("image2");
// Second image's span block

// Third image (Original video)
const image3 = document.getElementById("image3");

function expandImage(image) {
  // check if the image is already expanded
  if (image.classList.contains("expanded")) {
    return;
  } else {
    // expand the image
    image.classList.add("expanded");
    image.style.marginTop = "30px";
    image.style.marginLeft = "25px";
    image.style.width = "900px";
    image.style.height = "550px";
    image.style.transition = "ease-in-out";
    image.style.transitionDuration = "1s";

    // the background
    box.style.backgroundColor = "#FAFAFA";
    box.style.width = "970px";
    box.style.height = "720px";
    box.style.marginLeft = "119px";
    box.style.transition = "ease-in-out";
    box.style.transitionDuration = "1s";

    // hide the subtitle
    subtitle1.style.display = "none";

    // show the description
    image1.querySelector(".description").style.display = "block";
    image1.querySelector(".description").style.width = "900px";
  }

  // hide other images
  if (image === image1) {
    image2.style.display = "none";
    image3.style.display = "none";
  } else if (image === image2) {
    image1.style.display = "none";
    image3.style.display = "none";
  } else if (image === image3) {
    image1.style.display = "none";
    image2.style.display = "none";
  }
}

function collapseImage(image) {
  // check if the image is already collapsed
  if (!image.classList.contains("expanded")) {
    return;
  }

  // collapse the image
  image.classList.remove("expanded");
  image.querySelector(".description").style.display = "none";

  // show other images
  image1.style.display = "block";
  image2.style.display = "block";
  image3.style.display = "block";
}

function toggleImage(image) {
  if (image.classList.contains("expanded")) {
    collapseImage(image);
  } else {
    expandImage(image);
  }
}

image1.addEventListener("click", function () {
  toggleImage(image1);
});

image2.addEventListener("click", function () {
  toggleImage(image2);
});

image3.addEventListener("click", function () {
  toggleImage(image3);
});
