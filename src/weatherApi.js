const API_KEY = 'd158fc06d252bdd7c7e81a9fed6f3b81';

const weatherContainer = document.querySelector('.weather-container');
const formWeather = document.querySelector('.js-form-weather');

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

formWeather.addEventListener('submit', handleWeatherInCity);

function handleWeatherInCity(e) {
  e.preventDefault();

  const { city } = e.currentTarget.elements;
  if (!city.value.trim()) {
    city.value = '';
    console.log('Enter city name!');
    return;
  }

  fetchWeather(city.value)
    .then(arr => (weatherContainer.innerHTML = makeMarkup(arr)))
    .catch(error => console.error(error));
  city.value = '';
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

  const sunriseTime = new Date(sunrise * 1000);
  const sunsetTime = new Date(sunset * 1000);

  return `<li>
          <p>Humidity: ${humidity}</p>
          <p>Pressure: ${pressure}</p>
          <p>Sunrise: ${sunriseTime.getHours()}:0${sunriseTime.getMinutes()} AM</p>
          <p>Sunset: ${sunsetTime.getHours()}:${sunsetTime.getMinutes()} PM</p>
          <p>Description: ${description}</p>
          <p>Wind speed: ${speed}</p>
        </li>`;
}
