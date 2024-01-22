import { 
  ADDITIONAL_INFO_CLASS, 
  ADDITIONAL_INFO_ID, 
  HUMIDITY_ID, 
  REAL_SENSATION_ID,
  HUMIDITY_TEXT_ID,
  SENSATION_TEXT_ID
} from "../constants.js";

export const additionalTempInfo = () => {
  const container = document.createElement('div');

  container.innerHTML = `
  <div>
    <p id=${HUMIDITY_ID} class=${ADDITIONAL_INFO_CLASS}></p>
    <p id=${HUMIDITY_TEXT_ID}></p>
  </div>
  <div>
    <p id=${REAL_SENSATION_ID} class=${ADDITIONAL_INFO_CLASS}></p>
    <p id=${SENSATION_TEXT_ID}></p>
  </div>
  `
  container.setAttribute('id', `${ADDITIONAL_INFO_ID}`);  
  return container;
}