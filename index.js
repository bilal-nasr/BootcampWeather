
// const baseUrl = 'https://api.openweathermap.org/data/3.0/weather';
// e38d70a74e234ed2936a0b2b22d0c72e
// https://api.opencagedata.com/geocode/v1/json?q=URI-ENCODED-PLACENAME&key=YOUR-API-KEY
//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

const apiKeyLatlng = 'e38d70a74e234ed2936a0b2b22d0c72e';
const baseUrlLatlng = 'https://api.opencagedata.com/geocode/v1/json?'

const apiKeyWeather = '76eadb2026ba063f05c4134c2beed833';
const UrlWeather = 'https://api.openweathermap.org/data/3.0/onecall?';

// Function to fetch weather data

async function getLatLong(city){
    city = "paris";
    try {
        const apiUrl = `${baseUrlLatlng}q=${city}&key=${apiKeyLatlng}`;
        console.log(apiUrl);
        const response = await fetch(apiUrl);
        const data = await response.json();
        //console.log(data.results[0].geometry)//to get lat and lon
        return data.results[0].geometry;
    } catch (error) {
        console.error('Error fetching lat long data:', error);
    }
}

async function getWeatherData(city) {
    let latlong = await getLatLong(city);
    let lat = latlong.lat;
    let long = latlong.lng;
    city = "paris";
    try {
        const apiUrl = `${UrlWeather}lat=${lat}&lon=${long}&exclude=alerts&appid=${apiKeyWeather}`;
        console.log(apiUrl);
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        return data
    } catch (error) {
        console.error('Error fetching lat long data:', error);
    }

    
}

getWeatherData("paris");

// Function to display weather data
function displayWeatherData(data) {
    const weatherDataDiv = document.getElementById('weather-data');

    const cityName = data.name;
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;

    const content = `
        <p>City: ${cityName}</p>
        <p>Temperature: ${temperature}°C</p>
        <p>Weather: ${weatherDescription}</p>
    `;

    weatherDataDiv.innerHTML = content;
}
