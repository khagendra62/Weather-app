const weatherMain = document.getElementById("weatherMain");
const temperatureValue = document.getElementById("temperatureValue");
const temperatureMinMax = document.getElementById("temperatureMinMax");
const weatherStatus = document.getElementById("weatherStatus");
const humidityPercentage = document.getElementById("humidityPercentage");
const windSpeed = document.getElementById("windSpeed");
const pressureValue = document.getElementById("pressureValue");
const searchBtn = document.getElementById("searchBtn");
const searchCity = document.getElementById("searchCity");
const weatherIcon = document.getElementById("weatherIcon");

searchBtn.addEventListener("click", () => onSearch());

function updatePage(weatherData) {
  weatherMain.innerText = weatherData.weather[0].main;
  temperatureValue.innerHTML = `${weatherData.main.temp}&deg;C`;
  temperatureMinMax.innerHTML = `${weatherData.main.temp_max}&deg;C / ${weatherData.main.temp_min}&deg;C`;
  weatherStatus.innerText = weatherData.weather[0].description;
  humidityPercentage.innerText = `${weatherData.main.humidity} %`;
  windSpeed.innerText = `${weatherData.wind.speed} m/s`;
  pressureValue.innerText = `${weatherData.main.pressure} mm of Hg`;
  getWeatherIcon(weatherData.weather[0].id);
}

function onSearch() {
  const city = searchCity.value;
  if (!city) return;
  getWeather(city);
}

function getWeatherIcon(id) {
  // 200 = Thunderstorm
  // 300 = Drizzle
  // 500 = rain
  // 600 = snow
  // 700 = smoke
  // 800 = clear
  // 801 = cloud

  if (id >= 200 && id <= 299) {
    weatherIcon.setAttribute("src", "./assets/images/strom.png");
  } else if (id >= 300 && id <= 399) {
    weatherIcon.setAttribute("src", "./assets/images/raining.png");
  } else if (id >= 500 && id <= 599) {
    weatherIcon.setAttribute("src", "./assets/images/raining.png");
  } else if (id >= 600 && id <= 699) {
    weatherIcon.setAttribute("src", "./assets/images/snowflake.png");
  } else if (id >= 700 && id <= 799) {
    weatherIcon.setAttribute("src", "./assets/images/cloud.png");
  } else if (id == 800) {
    weatherIcon.setAttribute("src", "./assets/images/sun.png");
  } else if (id >= 801 && id <= 899) {
    weatherIcon.setAttribute("src", "./assets/images/cloudy.png");
  }
}
async function getWeather(location) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=9e29402da1d0377e04d1e1503b4d8046&units=metric`
  )
    .then((response) => response.json())
    .then((parsedData) => updatePage(parsedData));
}
