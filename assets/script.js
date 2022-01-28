const APIKey = "96e6602198cf73c73eb7efc693fa0bdb";
const testCity = "Birmingham";

// Retrieve latitude and longitude for city input, using the Open Weather API.
function getOpenWeather(city) {
  const requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data);
      const latitude = data.coord.lat;
      const longitude = data.coord.lon;
      getOneCallWeather(latitude, longitude);
    });
}

// Log all needed data from Open Call API.
function getOneCallWeather(latitude, longitude) {
  const requestURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts,minutely,hourly&appid=${APIKey}`;
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      const testCollect = weatherForToday(data);
      console.log(testCollect);
    });
}

function weatherForToday(data) {
  const icon = `${data.current.weather[0].icon}.png`;
  const temperature = `${getTemperature(data)}°C`;
  const humidity = `${data.current.humidity}%`;
  const windSpeed = `${getWindSpeed(data)}mph`;
  const ultravioletIndex = Math.round(data.current.uvi);
  return { icon: icon, temperature: temperature, humidity: humidity, windSpeed: windSpeed, ultravioletIndex: ultravioletIndex};
}

// Function to take raw data of exact temp in Kelvin, and return rough temp in Celsius.
function getTemperature(data) {
  const kelvin = data.current.temp;
  const celsius = Math.round(kelvin - 273.15);
  return celsius;
}

// Function to convert data to MPH, return to two decimal places.
function getWindSpeed(data) {
  const metersPerSecond = data.current.wind_speed;
  const milesPerHour = Number.parseFloat(metersPerSecond / 0.44704).toFixed(2);
  return milesPerHour;
}

// jQuery form to retrieve user input, and get weather for location given by user.
const cityForm = $("#city-form");

cityForm.on("submit", submitCity);

function submitCity(event) {
  event.preventDefault();
  const city = $("input#city-input").val();
  console.log(city);
  getOpenWeather(city);
  $("input#city-input").val("");
}
