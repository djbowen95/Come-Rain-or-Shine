const APIKey = "96e6602198cf73c73eb7efc693fa0bdb";
const citySearch = $('form');

// Fetch the longitude / latitude when given a city name.
function getLongLat(city) {
  const requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const latitude = data.coord.lat;
      const longitude = data.coord.lon;
      getOneCallWeather(latitude, longitude);
    });

  return requestURL;
}

// This second API call is the one we use for the weather data.
function getOneCallWeather(latitude, longitude) {
  const requestURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts,minutely,hourly&appid=${APIKey}`;

  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      processCurrentWeather(data);
      processForecast(data);
    });

  return requestURL;
}

// Extracts the required data from the response recieved, and passes it through to display function.
function processCurrentWeather(data) {
  const today = {
    icon: data.current.weather[0].icon,
    temp: data.current.temp,
    humidity: data.current.humidity,
    wind_speed: data.current.wind_speed,
    uvi: data.current.uvi,
  };

  displayCurrent(today);
}

// Iterates through weather for next five days, logs to the console.
function processForecast (data) {
  for (let i = 0; i < 5; i++) {
    const current = {
      unixDate: data.daily[i].dt,
      icon: data.daily[i].weather[0].icon,
      temp: data.daily[i].temp.day,
      humidity: data.daily[i].humidity,
      wind_speed: data.daily[i].wind_speed,
    }

    displayForecast(i, current);
  }

  return;
}

// Uses jQuery to insert today's weather data into html elements.
function displayCurrent(today) {
  
  $('.today-display img').attr('src', `../icons/${today.icon}.png`);
  $('.today-display .temp .marker').text(`${convertTemp(today.temp)}`);
  $('.today-display .humidity .marker').text(`${today.humidity}%`);
  $('.today-display .wind-speed .marker').text(`${convertWindSpeed(today.wind_speed)}`);
  $('.today-tisplay .uv-index').text(`${today.uvi}`);
  
  return;
}

function displayForecast(index, current) {

  $(`#future-block-${index} img`).attr('src', `../icons/${current.icon}.png`);
  $(`#future-block-${index} .temp-marker`).text(`${convertTemp(current.temp)}`);
  $(`#future-block-${index} .humidity-marker`).text(`${current.humidity}%`);
  $(`#future-block-${index} .windspeed-marker`).text(`${convertWindSpeed(current.wind_speed)}`);

return;
}

// Function for handling form input
function handleSearch (event) {
  event.preventDefault();
  
  const city = $('input#search-box-input').val();
  $('.today-display h2 ins').text(city);
  getLongLat(city);

  $('input#search-box-input').val('');
}

// Helper functions
function convertTemp (temp) {
  const celsius = Math.round(temp - 273.15);
  return `${celsius}°C`
}

function convertWindSpeed(wind_speed) {
  const mph = Number.parseFloat(wind_speed / 0.44704).toFixed(2);
  return `${mph}mph`;
}

// Uses Birmingham as a default.
getLongLat("Birmingham");
citySearch.on("submit", handleSearch);