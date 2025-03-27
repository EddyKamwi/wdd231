const button = document.getElementById("nav-btn");
const bars = document.getElementById("menu-bars");
const close = document.getElementById("menu-close");
const nav = document.querySelector("nav");

var clicked = false;
var click = false;

bars.addEventListener("click", () => {
  if (clicked == false) {
    nav.style.height = "200px";
    clicked = true;
  }
});

close.addEventListener("click", () => {
  if (clicked == true) {
    nav.style.height = "0px";
    clicked = false;
  }
});

button.addEventListener("click", () => {
  if (!click) {
    button.innerText = "◑";
    click = true;
  } else {
    button.innerHTML = "◐";
    click = false;
  }
});
