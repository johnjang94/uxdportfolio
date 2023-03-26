function expandImage2() {
  // ReportVU image and its name
  let img2 = document.getElementById("overview2");
  let name2 = document.getElementById("reportvu");

  // ReportVU image's background & description
  let box2 = document.getElementById("image-container2");
  let message2 = document.getElementById("message2");

  // The close button for ReportVU (the second image)
  let closeBtn2 = document.getElementById("close-btn2");

  // GlassVU image and its name
  let img = document.getElementById("overview1");
  let name = document.getElementById("glassvu");

  // Original video image and its name
  let img3 = document.getElementById("overview3");
  let name3 = document.getElementById("oldvid");

  // Hide message (the description) and the close button (closeBtn) before expanding the GlassVU (first) image
  message2.style.display = "none";
  closeBtn2.style.display = "none";

  // Belongs to the First image (the GlassVU)
  // Hide overview (the GlassVU picture) and glassvy (its name) completely from the screen - no visual
  img.style.display = "none";
  name.style.display = "none";

  // Belongs to Third image (the Original video picture)
  // Hide overview3 (the original video) and oldvid (its name) completely from the screen - no visual
  img3.style.display = "none";
  name3.style.display = "none";

  // Show everything else after expanding the image
  // Belongs to Second image (the ReportVU)
  // Background position
  box2.style.backgroundColor = "#FAFAFA";
  box2.style.width = "970px";
  box2.style.height = "720px";
  box2.style.marginLeft = "0px";
  box2.style.marginTop = "0px";
  box2.style.transition = "ease-in-out";
  box2.style.transitionDuration = "1s";
  name2.style.display = "none";

  img2.classList.add("expanded");
  img2.style.marginTop = "30px";
  img2.style.marginLeft = "25px";
  img2.style.width = "900px";
  img2.style.height = "550px";
  img2.style.transition = "ease-in-out";
  img2.style.transitionDuration = "1s";

  // Belongs to First image (the GlassVU)
  // Hide overview2 (the ReportVU picture) and reportvu (its name) completely from the screen - no visual
  img.style.display = "none";
  name.style.display = "none";

  // Belongs to Third image (the Original video picture)
  // Hide overview3 (the original video) and oldvid (its name) completely from the screen - no visual
  img3.style.display = "none";
  name3.style.display = "none";

  setTimeout(function () {
    // Show GlassVU description after expanding the image
    message2.style.display = "block";
    message2.style.marginLeft = "25px";
    message2.style.marginBottom = "20px";

    // Show close button after expanding the image
    closeBtn2.style.display = "block";
    closeBtn2.style.marginTop = "0px";
    closeBtn2.style.marginLeft = "610px";
  }, 1000);
}

function collapseImage2() {
  // Belongs to the second image (the ReportVU)
  let img2 = document.getElementById("overview2");
  let name2 = document.getElementById("reportvu");
  let message2 = document.getElementById("message2");
  let closeBtn2 = document.getElementById("close-btn2");
  let box2 = document.getElementById("image-container2");

  // Belongs to the first image (the GlassVU)
  let img = document.getElementById("overview1");
  let name = document.getElementById("glassvu");

  // Original video image and its name
  let img3 = document.getElementById("overview3");
  let name3 = document.getElementById("oldvid");

  // hide overview3 (or Original video picture) and oldvid (or video picture name) before collapsing the image
  img3.style.display = "none";
  name3.style.display = "none";

  // hide overview1 (or GlassVU picture) and glassvu (or GlassVU tag name) before collapsing the image
  img.style.display = "none";
  name.style.display = "none";
  closeBtn2.style.display = "none";

  // Collapse everything back to the original state
  // Collapsing GlassVU back to the small size
  img2.classList.remove("expanded");
  img2.style.width = "328px";
  img2.style.height = "217px";
  img2.style.marginLeft = "500px";
  img2.style.marginTop = "-250px";
  img2.style.transition = "ease-in-out";
  img2.style.transitionDuration = "1s";

  // Collapsing the message and the background back to the small size
  box2.style.backgroundColor = "#FFFFFF";
  box2.style.transition = "ease-in-out";
  box2.style.transitionDuration = "1s";
  message2.style.display = "none";
  name2.style.marginLeft = "600px";

  setTimeout(function () {
    // Show overview3 and oldvid after collapsing the second image (the ReportVU)
    img3.style.display = "inline";
    img3.style.marginTop = "-720px";
    img3.style.marginLeft = "880px";
    name3.style.display = "inline";
    name3.style.marginTop = "-490px";
    name3.style.marginLeft = "980px";

    // Show overview1 and Glassvu after collapsing the second image (the ReportVU)
    img.style.display = "inline";
    img.style.marginTop = "0px";
    img.style.marginLeft = "0px";
    name.style.display = "inline";
    name.style.marginTop = "0px";
    name.style.marginLeft = "0px";

    // Show overview2 (ReportVU) after collapsing the image
    name2.style.display = "inline";
  }, 1000);
}

function toggleImage2() {
  let img2 = document.getElementById("overview2");

  if (!img2.classList.contains("expanded")) {
    expandImage2();
  } else {
    collapseImage2();
  }
}
