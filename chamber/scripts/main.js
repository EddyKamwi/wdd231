const cards = document.getElementById("main-container");
const list = document.getElementById("list");
const thumbnail = document.getElementById("thumbnail");
list.addEventListener("click", () => {
  list.classList.toggle("button-active");
  thumbnail.classList.toggle("button-active");
  cards.classList.toggle("grid");
  document.querySelectorAll("section").forEach((tag) => {
    tag.classList.toggle("list");
  });
});
thumbnail.addEventListener("click", () => {
  list.classList.toggle("button-active");
  thumbnail.classList.toggle("button-active");
  cards.classList.toggle("grid");
  document.querySelectorAll("section").forEach((tag) => {
    tag.classList.toggle("list");
  });
});
const displayCompany = (array) => {
  array.forEach((company) => {
    const card = document.createElement("section");
    const address = document.createElement("p");
    const cell = document.createElement("p");
    const logo = document.createElement("img");
    const url = document.createElement("a");

    // set content
    address.textContent = `${company.address.street}, ${company.address.province}, ${company.address.country}`;
    cell.textContent = company.cell;
    url.setAttribute("href", company.website);
    url.textContent = company.website;
    logo.setAttribute("src", company.iconUrl);
    logo.setAttribute(
      "alt",
      `${company.names} logo`
    );
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("height", 50);
    logo.setAttribute("width", 120);

    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(cell);
    card.appendChild(url);

    cards.appendChild(card);
  });
};
const data = async () => {
  const url = "https://eddykamwi.github.io/wdd231/chamber/data/members.json";
  const resp = await fetch(url);
  const data = await resp.json();
  displayCompany(data.companies);
};

data();


