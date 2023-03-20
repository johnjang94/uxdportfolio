function expandImage() {
  let img = document.getElementById("overview1");
  let img2 = document.getElementById("overview2");
  let message = document.getElementById("message");
  let name = document.getElementById("glassvu");
  let name2 = document.getElementById("reportvu");
  let box = document.getElementById("image-container");

  if (!img.classList.contains("expanded")) {
    box.style.backgroundColor = "#FAFAFA";
    box.style.width = "950px";
    box.style.height = "650px";
    box.style.marginLeft = "100px";
    name.style.display = "none";
    name2.style.display = "none";
    img.classList.add("expanded");
    img.style.marginTop = "20px";
    img.style.marginLeft = "25px";
    img2.style.display = "none";
    message.style.display = "block";
    message.style.marginLeft = "25px";
    message.style.marginBottom = "20px";
  } else {
    box.style.display = "none";
    img.classList.remove("expanded");
    img.style.display = "display";
    message.style.display = "none";
  }
}

// let img = document.getElementById("overview1");
//   let img2 = document.getElementById("overview2");
//   let message = document.getElementById("message");
//   let name = document.getElementById("glassvu");
//   let name2 = document.getElementById("reportvu");
//   let box = document.getElementById("image-container");
//   let close = document.getElementsByClassName("close-btn");

//   function expandImage (!img.classList.contains("expanded")) {
//     box.style.backgroundColor = "#FAFAFA";
//     box.style.width = "950px";
//     box.style.height = "650px";
//     box.style.marginLeft = "100px";
//     name.style.display = "none";
//     name2.style.display = "none";
//     img.classList.add("expanded");
//     img.style.marginTop = "20px";
//     img.style.marginLeft = "25px";
//     img2.style.display = "none";
//     message.style.display = "block";
//     message.style.marginLeft = "25px";
//     message.style.marginBottom = "20px";
//   } else {
//     box.style.display = "none";
//     img.classList.remove("expanded");
//     img.style.display = "display";
//     message.style.display = "none";
//   };

//   function smallImage () {
//     close.
//   }
