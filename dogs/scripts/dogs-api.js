const limit = 9;

for (let i = 0; i < limit; i++) {
  const data = async () => {
    const results = (await fetch("https://dogapi.dog/api/v2/breeds")).json();

    results.then((data) => {
      const container = document.querySelector(".explore");
      const div = document.createElement("div");
        div.classList.add("ex-card");
        const breed = data.data[i].attributes
      div.innerHTML = `
                    <h3>${breed.name}</h3>
                    <p>${breed.description}</p>
                    <div>
                        <h4>Weight <span class="ex-icon">🏋️</span></h4>
                        <div class="ex-weight">
                            <p>Female: <span>${breed.female_weight.min}-${breed.female_weight.max}Kgs</span></p>
                            <p>Male: <span>${breed.male_weight.min}-${breed.male_weight.max}Kgs</span></p>
                        </div>
                        <h4>Life Expectancy <span class="ex-icon">🧬</span></h4>
                        <div class="ex-weight">
                            <p>${breed.life.min}-${breed.life.max}Years</p>
                        </div>

                    </div>
                    <a href="#" class="ex-action">Read More</a>
                `;
      container.appendChild(div);
      
    });
     
  };
    // Call the function to display a random dog image
    data();
}
