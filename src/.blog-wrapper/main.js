import './style.scss';
import '../style.scss';
import * as sourceHtml from '../source.html';

const BUTTON_DATA = {
  url: 'https://dev.to/fasosnql/css-challenge-1-3d8g',
  text: 'Go to article!'
};

window.onload = () => {
  const body = document.querySelector('body');

  const linkButton = document.createElement('a');
  linkButton.setAttribute('target', 'blank');
  linkButton.setAttribute('href', BUTTON_DATA.url);
  linkButton.innerText = BUTTON_DATA.text;

  body.innerHTML = `<main>${sourceHtml}</main>`;
  body.querySelector('main').appendChild(linkButton)
};
