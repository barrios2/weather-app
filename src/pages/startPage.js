import { searchElement } from '../views/searchView.js';
import { cityWeather } from '../views/temperatureView.js';
import { additionalTempInfo } from '../views/additionalTemperatureView.js';

// when initPage is called, it will add the elements (that are created when the imported functions are called) to the page
export const initPage = () => {
  const body = document.querySelector('body');
  const searchDiv = searchElement();
  const weatherDiv = cityWeather();
  const additionalInfoDiv = additionalTempInfo();
  body.append(searchDiv, weatherDiv, additionalInfoDiv);
}