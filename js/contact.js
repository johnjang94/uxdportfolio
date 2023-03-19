var box = document.getElementById("box");

document.getElementById("buttons").addEventListener(
  "click",
  function (evt) {
    var target = evt.target;
    if (target.class === "submit") {
      window.location = "https://jscolbe.github.io/portfolio/index.html";
    }
  },
  false
);
