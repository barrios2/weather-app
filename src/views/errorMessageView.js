import { 
  ERROR_MESSAGE_ID, 
  FA_SOLID_CLASS, 
  FA_TRIANGLE_CLASS, 
  HIDE_CLASS
} from '../constants.js';

// this function creates and returns the container that holds the error message
export const renderError = (e) => {
  const body = document.querySelector('body');
  const container = document.createElement('div');
  container.setAttribute('id', `${ERROR_MESSAGE_ID}`);
  // retrieving error message from the error object
  container.innerHTML = `
  <p> 
    <i class='${FA_SOLID_CLASS} ${FA_TRIANGLE_CLASS}'></i>
    ${e.message}
  </p>
  `
  body.appendChild(container);

  // after 3 sec, adds the 'hide' class to hide error message
  setTimeout(() => {
    container.classList.add(HIDE_CLASS);
  },3000);
}