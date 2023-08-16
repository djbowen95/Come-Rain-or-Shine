const APIKey = "96e6602198cf73c73eb7efc693fa0bdb";

console.log("Script linked.")
console.log("API Key is: " + APIKey);

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
        console.log(latitude, longitude);
      });
    return {longitude: 0.4, latitude: 0.6}
} 

// function getOpenWeather(city) {
//     const requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
//     fetch(requestURL)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         const latitude = data.coord.lat;
//         const longitude = data.coord.lon;
//         getOneCallWeather(latitude, longitude);
//       });
//   }

  console.log(getLongLat("Birmingham"));