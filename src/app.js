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
  WEATHER_CONDITION_ID 
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
        throw new Error(`Oops! We couldn't find the information, try again. Status: ${response.status}`);
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
  
  fetchData(url, cityName).then(data => {
    temperature.textContent = data.main.temp.toFixed() + '°C';
    city.textContent = data.name;
    realSensation.innerHTML = `${data.main.feels_like.toFixed()}°C`;
    weatherCondition.textContent = data.weather[0].main;
    humidity.textContent = data.main.humidity + '%';
    sensationText.textContent = 'Feels like';
    humidityText.textContent = 'Humidity';
  })
}

function main() {
  initPage(); // first creates elements and appends them to the <body>
  searchWeather(); // is listening for click on search button (after initPage because button needs to be created first)
}

main()
