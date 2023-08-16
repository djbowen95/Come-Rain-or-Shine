const APIKey = "96e6602198cf73c73eb7efc693fa0bdb";

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

function displayCurrent(today) {
  
  $('.today-display img').attr('src', `../icons/${today.icon}.png`);
  $('.today-display .temp .marker').text(`${convertTemp(today.temp)}`);
  $('.today-display .humidity .marker').text(`${today.humidity}%`);
  $('.today-display .wind-speed .marker').text(`${convertWindSpeed(today.wind_speed)}`);
  $('.today-tisplay .uv-index').text(`${today.uvi}`);
  
  return;
}

function processForecast (data) {
  return;
}

function convertTemp (temp) {
  const celsius = Math.round(temp - 273.15);
  return `${celsius}°C`
}

function convertWindSpeed(wind_speed) {
  const mph = Number.parseFloat(wind_speed / 0.44704).toFixed(2);
  return `${mph}mph`;
}

console.log(getLongLat("Birmingham"));
