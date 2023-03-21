function expandImage() {
  let img = document.getElementById("overview1");
  let img2 = document.getElementById("overview2");
  let message = document.getElementById("message");
  let name = document.getElementById("glassvu");
  let name2 = document.getElementById("reportvu");
  let box = document.getElementById("image-container");
  // close (X) button was not added here because the (x) sign does not appear no matter how many times you toggle

  box.style.backgroundColor = "#FAFAFA";
  box.style.width = "950px";
  box.style.height = "650px";
  box.style.marginLeft = "100px";
  name.style.display = "none";
  name2.style.display = "none";
  img.classList.add("expanded");
  img.style.marginTop = "20px";
  img.style.marginLeft = "25px";
  img.style.width = "900px";
  img.style.height = "550px";
  img2.style.display = "none";
  message.style.display = "block";
  message.style.marginLeft = "25px";
  message.style.marginBottom = "20px";
}

function collapseImage() {
  let img = document.getElementById("overview1");
  let img2 = document.getElementById("overview2");
  let closeBtn = document.getElementById("close-btn");
  let box = document.getElementById("image-container");
  let message = document.getElementById("message");
  let name = document.getElementById("glassvu");
  let name2 = document.getElementById("reportvu");

  img.classList.remove("expanded");
  img.style.width = "328px";
  img.style.height = "217px";
  img.style.marginLeft = "-100px";
  img.style.marginTop = "0px";
  img2.style.display = "inline";
  img2.style.marginTop = "-650px";
  box.style.backgroundColor = "#FFFFFF";
  closeBtn.style.marginTop = "-330px";
  closeBtn.style.marginLeft = "500px";
  message.style.display = "none";
  name.style.display = "inline";
  name.style.marginLeft = "3px";
  name2.style.display = "inline";
  name2.style.marginTop = "-420px";
}

function toggleImage() {
  let img = document.getElementById("overview1");

  if (!img.classList.contains("expanded")) {
    expandImage();
  } else {
    collapseImage();
  }
}
