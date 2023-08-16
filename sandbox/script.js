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
        const LongLat = { longitude, latitude };
        return LongLat;
      });
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