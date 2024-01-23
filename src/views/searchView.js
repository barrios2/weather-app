import { fetchAndPopulateData } from '../app.js';
import { 
  API, 
  HEADER_ID, 
  MY_BTN_ID, 
  RAINBOW_IMG_ID, 
  SEARCH_CONTAINER_ID, 
  SEARCH_ID 
} from '../constants.js';

export const searchElement = () => {
  const container = document.createElement('div');
  container.innerHTML = `
  <div id=${HEADER_ID}>
    <img id=${RAINBOW_IMG_ID} src='https://www.freeiconspng.com/uploads/rainbow-png-27.png' alt='rainbow img'>
    <h1>Weathery</h1>
  </div>
  <div>
    <input id=${SEARCH_ID} placeholder='Enter city name'>
    <button id=${MY_BTN_ID}>Search</button>
  </div>
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