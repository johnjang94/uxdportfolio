function expandImage() {
  let img = document.getElementById("overview1");
  let message = document.getElementById("message");
  let name = document.getElementById("glassvu");
  let box = document.getElementById("image-container");

  if (!img.classList.contains("expanded")) {
    box.style.backgroundColor = "#FAFAFA";
    box.style.width = "950px";
    box.style.height = "650px";
    box.style.marginLeft = "100px";
    name.style.display = "none";
    img.classList.add("expanded");
    img.style.marginTop = "20px";
    img.style.marginLeft = "25px";
    message.style.display = "block";
    message.style.marginLeft = "25px";
    message.style.marginBottom = "20px";
  } else {
    box.style.display = "none";
    img.classList.remove("expanded");
    message.style.display = "none";
  }
}
