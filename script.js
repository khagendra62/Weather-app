const weatherMain = document.getElementById("weatherMain");
const temperatureValue = document.getElementById("temperatureValue");
const temperatureMinMax = document.getElementById("temperatureMinMax");
const weatherStatus = document.getElementById("weatherStatus");
const humidityPercentage = document.getElementById("humidityPercentage");
const windSpeed = document.getElementById("windSpeed");
const pressureValue = document.getElementById("pressureValue");
const searchBtn = document.getElementById("searchBtn");
const searchCity = document.getElementById("searchCity");

searchBtn.addEventListener("click", () => onSearch());

function updatePage(weatherData) {
  weatherMain.innerText = weatherData.weather[0].main;
  temperatureValue.innerHTML = `${weatherData.main.temp}&deg;C`;
  temperatureMinMax.innerHTML = `${weatherData.main.temp_max}&deg;C / ${weatherData.main.temp_min}&deg;C`;
  weatherStatus.innerText = weatherData.weather[0].description;
  humidityPercentage.innerText = `${weatherData.main.humidity} %`;
  windSpeed.innerText = `${weatherData.wind.speed} m/s`;
  pressureValue.innerText = `${weatherData.main.pressure} mm of Hg`;
}

function onSearch() {
  const city = searchCity.value;
  if (!city) return;
  getWeather(city);
}

async function getWeather(location) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=9e29402da1d0377e04d1e1503b4d8046&units=metric`
  )
    .then((response) => response.json())
    .then((parsedData) => updatePage(parsedData));
}
