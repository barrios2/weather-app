import { 
  CITY_ID, 
  CITY_INFO_ID, 
  TEMPERATURE_ID, 
  WEATHER_CONDITION_ID,
  WEATHER_ICON_ID
} from '../constants.js';

export const cityWeather = () => {
  const container = document.createElement('div');
  container.setAttribute('id', `${CITY_INFO_ID}`);
  container.innerHTML = `
  <img id=${WEATHER_ICON_ID}>
  <h2 id=${TEMPERATURE_ID}></h2>
  <h3 id=${CITY_ID}></h3>
  <p id=${WEATHER_CONDITION_ID}></p>
  `
  return container;
}