const dayOfWeek = (number) => {
  const num = parseInt(number);
  if (num === 1) {
    return "Monday";
  } else if (num === 2) {
    return "Tuesday";
  } else if (num === 3) {
    return "Wednesday";
  } else if (num === 4) {
    return "Thursday";
  } else if (num === 5) {
    return "Friday";
  } else if (num === 6) {
    return "Saturday";
  } else if (num === 0) {
    return "Sunday";
  } else {
    return "invalid day";
  }
};
async function weather(url) {
  return (await fetch(url)).json();
}

async function main() {
  const data = await weather(
    "https://api.openweathermap.org/data/2.5/weather?lat=-15.33&lon=28.44&appid=c75f603870e497bd2c733194575b3de1&units=metric"
  );
  const tempForcast = await weather(
    "https://api.openweathermap.org/data/2.5/forecast?lat=-15.33&lon=28.44&appid=c75f603870e497bd2c733194575b3de1&units=metric"
  );
  const companies = await weather(
    "https://eddykamwi.github.io/wdd231/chamber/data/members.json"
  );

  const sunrise = `${new Date(data.sys.sunrise * 1000).getHours()}:${new Date(
    data.sys.sunrise * 1000
  ).getMinutes()}hrs`;

  const sunset = `${new Date(data.sys.sunset * 1000).getHours()}:${new Date(
    data.sys.sunset * 1000
  ).getMinutes()}hrs`;

  const companiesList = companies.companies;
  const indexList = [];
  let i = null;
  let j = null;
  let l = null;

  while (true) {
    i = Math.floor(Math.random() * companiesList.length);
    j = Math.floor(Math.random() * companiesList.length);
    l = Math.floor(Math.random() * companiesList.length);
    if (i != j && j != l && i != l) {
      break;
    }
  }

  indexList.push(l);
  indexList.push(i);
  indexList.push(j);

  const p = document.getElementById("bCard");
  indexList.forEach((index) => {
    const div = document.createElement("div");
    div.setAttribute("class", "b-card");

    div.innerHTML = `<h2 class="b-title">${companiesList[index].names}</h2>
        <p class="b-tagName">${companiesList[index].tagLine}</p>
        <hr>
        <div class="b-body">
          <img src="${companiesList[index].iconUrl}" alt="${companiesList[index].names} logo" height="45" width="72" loading="lazy">
          <div>
            <p><span>Email: </span> ${companiesList[index].email}</p>
            <p><span>Phone: </span> ${companiesList[index].cell}</p>
            <p><span>Url: </span> ${companiesList[index].website}</p>
          </div>
        </div>`;

    p.appendChild(div);
  });

  const humidity = `${data.main.humidity}%`;
  const lowTemp = `${data.main.temp_min}°`;
  const highTemp = `${data.main.temp_max}°`;
  const descrip = `${data.weather[0].description}`;
  const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const temp = `${data.main.temp}°`;

  document.getElementById("weatherIcon").setAttribute("src", icon);
  document.getElementById("c-weather-span").innerHTML = `
      ${temp} <br>
      ${descrip} <br>
      high: ${highTemp}<br>
      low: ${lowTemp}<br>
      humidity: ${humidity}<br>
      sunrise: ${sunrise}<br>
      sunset: ${sunset}
      `;

  const tempToday = tempForcast.list[0].main.temp;

  const tempTomorrow = tempForcast.list[8].main.temp;
  const day = dayOfWeek(new Date(tempForcast.list[8].dt * 1000).getDay());

  const tempDay2 = tempForcast.list[16].main.temp;
  const day2 = dayOfWeek(new Date(tempForcast.list[16].dt * 1000).getDay());

  document.getElementById("w-forcast").innerHTML = `
      Today: ${tempToday}°C <br>
      ${day}: ${tempTomorrow}°C <br>
      ${day2}: ${tempDay2}°C`;
}
main();
