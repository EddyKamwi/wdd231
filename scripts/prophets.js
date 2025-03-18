const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.getElementById("cards");
const ordinal = (n) => {
 return n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th";
};
const displayProphets = (array) => {
  array.forEach((prophet) => {
    const card = document.createElement("section");
    const name = document.createElement("h2");
    const dob = document.createElement("p");
    const pob = document.createElement("p");
    const portrate = document.createElement("img");

    // set content
    name.innerText = `${prophet.name} ${prophet.lastname}`;
    dob.textContent = `Date of birth: ${prophet.birthdate}`;
    pob.textContent = `Place of birth: ${prophet.birthplace}`;
    portrate.setAttribute("src", prophet.imageurl);
    portrate.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname} – ${
        prophet.order
      }${ordinal(prophet.order)} Latter-day President`
    );
    portrate.setAttribute("loading", "lazy");
    portrate.setAttribute("height", 440);
    portrate.setAttribute("width", 340);
    card.appendChild(name);
    card.appendChild(dob);
    card.appendChild(pob);
    card.appendChild(portrate);
    cards.appendChild(card);
  });
};
async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets);
}

try {
  getProphetData();
} catch (error) {
  console.error(error);
}
