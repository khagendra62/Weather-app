const randomWeather = {
  coord: { lon: 85.3167, lat: 27.7167 },
  weather: [
    { id: 801, main: "Clouds", description: "few clouds", icon: "02n" },
  ],
  base: "stations",
  main: {
    temp: 9.12,
    feels_like: 9.12,
    temp_min: 9.12,
    temp_max: 9.12,
    pressure: 1014,
    humidity: 71,
    sea_level: 1014,
    grnd_level: 849,
  },
  visibility: 7000,
  wind: { speed: 1.03, deg: 0 },
  clouds: { all: 20 },
  dt: 1737747760,
  sys: {
    type: 1,
    id: 9201,
    country: "NP",
    sunrise: 1737767309,
    sunset: 1737805996,
  },
  timezone: 20700,
  id: 1283240,
  name: "Kathmandu",
  cod: 200,
};

const weatherMain = document.getElementById("weatherMain");
const temperatureValue = document.getElementById("temperatureValue");
const temperatureMinMax = document.getElementById("temperatureMinMax");
const weatherStatus = document.getElementById("weatherStatus");
const humidityPercentage = document.getElementById("humidityPercentage");
const windSpeed = document.getElementById("windSpeed");
const pressureValue = document.getElementById("pressureValue");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  updatePage(randomWeather);
  console.log("works");
});

function updatePage(weatherData) {
  weatherMain.innerText = weatherData.weather[0].main;
  temperatureValue.innerHTML = `${weatherData.main.temp}&deg;C`;
  temperatureMinMax.innerHTML = `${weatherData.main.temp_max}&deg;C / ${weatherData.main.temp_min}&deg;C`;
  weatherStatus.innerText = weatherData.weather[0].description;
  humidityPercentage.innerText = `${weatherData.main.humidity} %`;
  windSpeed.innerText = `${weatherData.wind.speed} m/s`;
  pressureValue.innerText = `${weatherData.main.pressure} mm of Hg`;
}
