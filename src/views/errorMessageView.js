import { ERROR_MESSAGE_ID, FA_SOLID_CLASS, FA_TRIANGLE_CLASS } from "../constants.js";

export const renderError = (e) => {
  const container = document.createElement('div');
  container.setAttribute('id', `${ERROR_MESSAGE_ID}`);
  container.innerHTML = `
  <i class='${FA_SOLID_CLASS} ${FA_TRIANGLE_CLASS}'></i>
  <p>${e.message}</p>
  `

  setTimeout(() => {
    container.classList.add('hide');
  },5000);
  return container;
}