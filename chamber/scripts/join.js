const nonBtn = document.getElementById("non")
const bronzeBtn = document.getElementById("bron")
const silverBtn = document.getElementById("sil")
const goldBtn = document.getElementById("gol")
const dialogBox = document.querySelector("dialog")
const title = document.querySelector(".d-title") 
const content = document.querySelector(".d-content")
const timestamp = document.getElementById("timestamp");
timestamp.value=Date.now()
nonBtn.addEventListener("click", () => {
    title.innerText = `Non Profit Membership Level`;
    dialogBox.showModal();
}); bronzeBtn.addEventListener("click", () => {
    title.innerText = `Bronze Membership Level`;
    dialogBox.showModal();
}); silverBtn.addEventListener("click", () => {
    title.innerText = `Silver Membership Level`;
    dialogBox.showModal();
}); goldBtn.addEventListener("click", () => {
    title.innerText = `Gold Membership Level`;
    dialogBox.showModal();
});
