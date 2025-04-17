async function main() {
  try {
    const limit = 9;
    const breeds = [];

    const results = await fetch("https://dogapi.dog/api/v2/breeds");
    const data = await results.json();

    for (let i = 0; i < limit; i++) {
      const breed = data.data[i].attributes;
      const item = {
        id: i,
        name: breed.name,
        description: breed.description,
        f_weight: `${breed.female_weight.min}-${breed.female_weight.max}`,
        m_weight: `${breed.male_weight.min}-${breed.male_weight.max}`,
        life: `${breed.life.min}-${breed.life.max}`,
      };

      breeds.push(item);
    }

    breeds.forEach((breed) => {
      const container = document.querySelector(".explore");
      const div = document.createElement("div");
      div.classList.add("ex-card");
      div.innerHTML = `
                      <h3>${breed.name}</h3>
                      <p>${breed.description.slice(0, 100)} ...</p>
                      <div>
                          <h4>Weight <span class="ex-icon">🏋️</span></h4>
                          <div class="ex-weight">
                              <p>Female: <span>${breed.f_weight}Kgs</span></p>
                              <p>Male: <span>${breed.m_weight}Kgs</span></p>
                          </div>
                          <h4>Life Expectancy <span class="ex-icon">🧬</span></h4>
                          <div class="ex-weight">
                              <p>${breed.life}Years</p>
                          </div>

                      </div>
                      <a class="ex-action" id="${breed.id}">Read More</a>
                  `;
      container.appendChild(div);
    });

    document.querySelectorAll(".ex-action").forEach((link) => {
      link.addEventListener("click", () => {
        document.querySelector(".model").classList.toggle("model-show");
        const breed = breeds[link.id];
        document.querySelector(".m-content").innerHTML = `
                                                              <h3>${breed.name}</h3>
                                                              <p>${breed.description}</p>
                                                              <div>
                                                                  <h4>Weight <span class="ex-icon">🏋️</span></h4>
                                                                  <div class="ex-weight">
                                                                      <p>Female: <span>${breed.f_weight}Kgs</span></p>
                                                                      <p>Male: <span>${breed.m_weight}Kgs</span></p>
                                                                  </div>
                                                                  <h4>Life Expectancy <span class="ex-icon">🧬</span></h4>
                                                                  <div class="ex-weight">
                                                                      <p>${breed.life}Years</p>
                                                                  </div>

                                                              </div>
                                                          `;
      });
    });
  } catch (error) {
    console.error(error);
  }
}

main();

document.querySelector(".m-close").addEventListener("click", () => {
  document.querySelector(".model").classList.toggle("model-show");
});
