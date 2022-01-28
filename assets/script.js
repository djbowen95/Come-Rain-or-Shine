const APIKey = "96e6602198cf73c73eb7efc693fa0bdb";
const testCity = "Birmingham";

// Log all needed data for today in the console (except UV). 
function getOpenWeather (city) {
    const requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            const todayTemp = getTemperature(data);
            const icon = data.weather[0].icon;
            const humidity = `${data.main.humidity}%`
            const windSpeed = getWindSpeed(data);
            const latitude = data.coord.lat;
            const longitude = data.coord.lon;
            console.log("This is the data given by the Open Weather API:")
            console.log(todayTemp, icon, humidity, windSpeed, latitude, longitude);
            getOpenCallWeather(latitude, longitude);
        })
};

// Log all needed data from Open Call API
function getOpenCallWeather (latitude, longitude) {
    console.log('This is the data from the Open Call API:')
    console.log(latitude, longitude);
    const requestURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts,minutely,hourly&appid=${APIKey}`;
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
};

// Function to take raw data of exact temp in Kelvin, and return rough temp in Celsius. 
function getTemperature (data) {
    const kelvin = data.main.temp;
    const celsius = Math.round(kelvin - 273.15);
    return celsius;
}

// Function to convert data to MPH, return to two decimal places. 
function getWindSpeed (data) {
    const metersPerSecond = data.wind.speed;
    const milesPerHour = Number.parseFloat(metersPerSecond / 0.44704).toFixed(2);
    return milesPerHour;
}

// jQuery form to retrieve user input, and get weather for location given by user. 
const cityForm = $('#city-form');

cityForm.on('submit', submitCity);

function submitCity(event) {
    event.preventDefault();
    const city = $('input#city-input').val();
    console.log(city);
    getOpenWeather(city);
    $('input#city-input').val("");
}
