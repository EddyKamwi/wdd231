const bars = document.getElementById('menu-bars');
const close = document.getElementById('menu-close');
const nav = document.querySelector("nav");

let clicked = false;
bars.addEventListener("click", () => {
    if (clicked == false) {
        nav.style.height = '200px';
        clicked = true;
    }
});

close.addEventListener("click", () => {
    if (clicked == true) {
        nav.style.height = '0px';
        clicked = false;
    }
})