const navBtn = document.getElementById("menu-bars");
const toggleNav = () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("show");
  navBtn.innerHTML = nav.classList.contains("show") ? "×" : "≡";
};

navBtn.addEventListener("click", toggleNav);
