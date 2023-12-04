const API_KEY = 'd158fc06d252bdd7c7e81a9fed6f3b81';

const weatherContainer = document.querySelector('.weather-container');
const formWeather = document.querySelector('.js-form-weather');

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

formWeather.addEventListener('submit', handleWeatherInCity);

function handleWeatherInCity(e) {
  e.preventDefault();

  const { city } = e.currentTarget.elements;

  fetchWeather(city.value)
    .then(arr => (weatherContainer.innerHTML = makeMarkup(arr)))
    .catch(error => console.error(error));
}

function fetchWeather(query) {
  return fetch(`${BASE_URL}?q=${query}&appid=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

function makeMarkup(obj) {
  const {
    main: { humidity, pressure },
    sys: { sunrise, sunset },
    weather: {
      0: { description },
    },
    wind: { speed },
  } = obj;

  const sunriseTime = new Date(sunrise);
  const sunsetTime = new Date(sunset);

  return `<li>
          <p>Humidity: ${humidity}</p>
          <p>Pressure: ${pressure}</p>
          <p>Sunrise: ${sunriseTime.toLocaleTimeString()}</p>
          <p>Sunset: ${sunsetTime.toLocaleTimeString()}</p>
          <p>Description: ${description}</p>
          <p>Wind speed: ${speed}</p>
        </li>`;
}
