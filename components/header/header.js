const body = document.getElementsByTagName("body")[0];
const header = document.createElement("div");

body.prepend(header);

fetch("/components/header/header.html")
  .then((res) => res.text())
  .then((data) => {
    header.innerHTML = data;
    loadMobile();
  });

function loadMobile() {
  var menuButton = document.getElementsByClassName("menu-button")[0];
  var panel = document.getElementsByClassName("panel")[0];

  menuButton.addEventListener("click", function () {
    var isDisplayed = panel.style.display;
    panel.style.display = isDisplayed === "block" ? "none" : "block";
  });
}
