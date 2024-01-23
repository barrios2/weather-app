import { fetchAndPopulateData } from '../app.js';
import { 
  API, 
  CLOUD_IMG_ID, 
  HEADER_ID, 
  MY_BTN_ID, 
  SEARCH_CONTAINER_ID, 
  SEARCH_ID, 
  WEATHERY_IMG
} from '../constants.js';

// creates and returns a container holding the search input and button
export const searchElement = () => {
  const container = document.createElement('div');
  container.innerHTML = `
  <div id=${HEADER_ID}>
    <img id=${CLOUD_IMG_ID} src='${WEATHERY_IMG}' alt='cute cloud img'>
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

// attaching event listener to search button
// keeping it in separate function to make sure the button is found until after it's been added/appended to the DOM (which happens in initPage())
export const searchWeather = () => {
  const btn = document.getElementById(MY_BTN_ID);
  const searchBar = document.getElementById(SEARCH_ID);

  btn.addEventListener('click', () => {
    fetchAndPopulateData(API, searchBar.value);
  })
}