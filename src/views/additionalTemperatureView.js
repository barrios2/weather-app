import { 
  ADDITIONAL_INFO_CLASS, 
  ADDITIONAL_INFO_ID, 
  HUMIDITY_ID, 
  REAL_SENSATION_ID,
  HUMIDITY_TEXT_ID,
  SENSATION_TEXT_ID,
  FA_SOLID_CLASS,
  FA_WATER_CLASS,
  FA_TEMPERATURE_CLASS,
  HIDE_CLASS
} from '../constants.js';

// this function creates and returns container that holds additional weather info
export const additionalTempInfo = () => {
  const container = document.createElement('div');

  // defining HTML structure inside the container
  container.innerHTML = `
  <div class=${ADDITIONAL_INFO_CLASS}>
    <p id=${HUMIDITY_ID}></p>
    <h4 id=${HUMIDITY_TEXT_ID}></h4>
    <i class='${HIDE_CLASS} ${FA_SOLID_CLASS} ${FA_WATER_CLASS}'></i>
  </div>
  <div class=${ADDITIONAL_INFO_CLASS}>
    <p id=${REAL_SENSATION_ID}></p>
    <h4 id=${SENSATION_TEXT_ID}></h4>
    <i class='${HIDE_CLASS} ${FA_SOLID_CLASS} ${FA_TEMPERATURE_CLASS}'></i>
  </div>
  `
  container.setAttribute('id', `${ADDITIONAL_INFO_ID}`);  
  return container;
}