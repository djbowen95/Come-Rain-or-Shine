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

  return LongLat;
}

// This second API call is the one we use for the weather data.
function getOneCallWeather(latitude, longitude) {
  const requestURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts,minutely,hourly&appid=${APIKey}`;

  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayCurrentWeather(data);
    });

  return requestURL;
}

function displayCurrentWeather(data) {
  const today = {
    icon: data.current.weather[0].icon,
    temperature: data.current.temp,
    humidity: data.current.humidity,
    wind_speed: data.current.wind_speed,
    uvi: data.current.uvi,
  };

  $('.today-display img').attr('src', `../icons/${today.icon}.png`);
  console.log("Hello World");
  console.log(today);
}

// function forecastWeather (data) {
//   console.log("Hello World")
//   }

console.log(getLongLat("Birmingham"));
