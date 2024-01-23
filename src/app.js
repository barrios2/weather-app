'use strict';

import { renderError } from './views/errorMessageView.js';
import { initPage } from './pages/startPage.js';
import { searchWeather } from './views/searchView.js';
import { 
  CITY_ID,
  HUMIDITY_ID, 
  HUMIDITY_TEXT_ID, 
  KEY, 
  REAL_SENSATION_ID, 
  SENSATION_TEXT_ID, 
  TEMPERATURE_ID, 
  WEATHER_CONDITION_ID, 
  WEATHER_ICON_ID
} from './constants.js';

async function fetchData(url, cityName) {
  const body = document.querySelector('body');
  try {
    if (!cityName) {
      throw new Error('Please enter a city name');
    }
    else {
      const response = await fetch(url + `&q=${cityName}` + `&appid=${KEY}`);

      if (response.ok) {
        const data = await response.json(); 
        return data;
      }
      else {
        throw new Error('Enter a valid city name');
      }
    } 
  } catch (error) {
    const errorContainer = renderError(error);
    body.appendChild(errorContainer);
  }
}

export function fetchAndPopulateData(url, cityName) {
  const temperature = document.getElementById(TEMPERATURE_ID);
  const city = document.getElementById(CITY_ID);
  const realSensation = document.getElementById(REAL_SENSATION_ID);
  const weatherCondition = document.getElementById(WEATHER_CONDITION_ID);
  const humidity = document.getElementById(HUMIDITY_ID);
  const sensationText = document.getElementById(SENSATION_TEXT_ID);
  const humidityText = document.getElementById(HUMIDITY_TEXT_ID);
  const weatherIcon = document.getElementById(WEATHER_ICON_ID);
  const icons = document.querySelectorAll('.fa-solid');

  fetchData(url, cityName).then(data => {
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.alt = 'weather condition icon';
    temperature.textContent = data.main.temp.toFixed() + '°C';
    city.textContent = data.name;
    realSensation.innerHTML = `${data.main.feels_like.toFixed()}°C`;
    weatherCondition.textContent = data.weather[0].main;
    humidity.textContent = data.main.humidity + '%';
    sensationText.textContent = 'feels like';
    humidityText.textContent = 'humidity';
    icons.forEach(icon => {
      icon.classList.remove('hide');
    });
  })
}

function main() {
  initPage(); // first creates elements and appends them to the <body>
  searchWeather(); // is listening for click on search button (after initPage because button needs to be created first)
}

main()
