import { 
  ERROR_MESSAGE_ID, 
  FA_SOLID_CLASS, 
  FA_TRIANGLE_CLASS, 
  HIDE_CLASS
} from '../constants.js';

export const renderError = (e) => {
  const container = document.createElement('div');
  container.setAttribute('id', `${ERROR_MESSAGE_ID}`);
  container.innerHTML = `
  <p> 
    <i class='${FA_SOLID_CLASS} ${FA_TRIANGLE_CLASS}'></i>
    ${e.message}
  </p>
  `
  setTimeout(() => {
    container.classList.add(HIDE_CLASS);
  },3000);
  return container;
}