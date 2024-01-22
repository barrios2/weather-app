import { searchElement } from '../views/searchView.js';
import { cityWeather } from '../views/temperatureView.js';
import { additionalTempInfo } from '../views/additionalTemperatureView.js';

export const initPage = () => {
  const body = document.querySelector('body');
  const searchDiv = searchElement();
  const weatherDiv = cityWeather();
  const additionalInfoDiv = additionalTempInfo();
  body.append(searchDiv, weatherDiv, additionalInfoDiv);
}