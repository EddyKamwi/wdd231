async function weather(url) {
  return (await fetch(url)).json();
}

const data = await weather(
  "https://api.openweathermap.org/data/2.5/weather?lat=-15.33&lon=28.44&appid=c75f603870e497bd2c733194575b3de1&units=metric"
);

const sunrise = `${new Date(data.sys.sunrise * 1000).getHours()}:${new Date(
  data.sys.sunrise * 1000
).getMinutes()}hrs`;
const sunset = `${new Date(data.sys.sunset * 1000).getHours()}:${new Date(
  data.sys.sunset * 1000
).getMinutes()}hrs`;
const humidity = `${data.main.humidity}%`;
const lowTemp = `${data.main.temp_min}°`;
const highTemp = `${data.main.temp_max}°`;
const descrip = `${data.weather[0].description}`;
const temp = `${data.main.temp}°`
console.log(temp);
