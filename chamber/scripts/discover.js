async function main() {

    const data = await fetch("https://eddykamwi.github.io/wdd231/chamber/data/interests.json")
    const results = data.json()
    const container = document.getElementById("i-container")
    results.then(interests => {
        interests.forEach(interest => {
            const div = document.createElement("div")
            div.setAttribute("class", "i-card")
            div.innerHTML = `
                <h2>${interest.name}</h2>
                <address>${interest.address}</address>
                <figure>
                    <img src="${interest.photoUrl}"
                        alt="${interest.name}" width="320" height="230" loading="lazy">
                </figure>
                <p>${interest.description}</p>
                `
            container.appendChild(div);
        });
    })

}
main()