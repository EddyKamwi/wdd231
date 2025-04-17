const navBtn = document.getElementById("menu-bars");

const toggleNav = () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("show");
  navBtn.innerHTML = nav.classList.contains("show") ? "×" : "≡";
};

navBtn.addEventListener("click", toggleNav);

//display the current year in the footer
document.getElementById("year").innerHTML = new Date().getFullYear();
//display the last modified date in the footer
document.getElementById("lastmodified").innerHTML = document.lastModified;

window.addEventListener("load", () => {
  const siteName = localStorage.getItem("siteName");
  const hasSeen = sessionStorage.getItem("hasSeen");
  if (!hasSeen) {
    if (siteName) {
      alert(`🐶 Welcome back, Mr ${siteName}, wolf!`);
    } else {
      alert(`🐶 Welcome to the Dog Hub, wolf!`);
    }
  }
  sessionStorage.setItem("hasSeen", true);
});
