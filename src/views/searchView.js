import { fetchAndPopulateData } from '../app.js';
import { API, MY_BTN_ID, SEARCH_CONTAINER_ID, SEARCH_ID } from '../constants.js';

export const searchElement = () => {
  const container = document.createElement('div');
  container.innerHTML = `
  <h1>Weather App</h1>
  <input id=${SEARCH_ID} placeholder='Enter city name'>
  <button id=${MY_BTN_ID}>Search</button>
  `
  container.setAttribute('id', `${SEARCH_CONTAINER_ID}`);
  return container;
};

export const searchWeather = () => {
  const btn = document.getElementById(MY_BTN_ID);
  const searchBar = document.getElementById(SEARCH_ID);

  btn.addEventListener('click', () => {
    fetchAndPopulateData(API, searchBar.value);
  })

}