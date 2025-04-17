const dog = async () => {
  try {
    const results = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await results.json();

    const parts = data.message.split("/").filter((part) => part !== "");

    // Find the index of 'breeds' in the filtered array
    const breedsIndex = parts.indexOf("breeds");

    let breedName = "Breed not found";
    if (breedsIndex !== -1 && breedsIndex + 1 < parts.length) {
      breedName = parts[breedsIndex + 1];
    }

    const container = document.querySelector(".gallery");
    const div = document.createElement("div");
    div.setAttribute("class", "image-card");
    div.innerHTML = `<span class="dog-name">${breedName}</span><img src="${data.message}" id="random-dog" class="image-item" width="320" height="420" alt="Random dog" loading="lazy">`;
    container.appendChild(div);
  } catch (error) {
    console.log(error);
  }
};
// Call the function to display a random dog image
const limit = 6
for (let i = 0; i < limit; i++) {
  dog();
}
window.addEventListener("scroll", () => {
  if (window.scrollY >= 360) {
    document.querySelector(".gallery").style.opacity = 1;
    document.querySelector(".gallery").style.transform = "translateY(0px)";
  }
});
