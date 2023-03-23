import './style.css';
import { refreshScores, sendData } from './modules/handleData.js';

refreshScores();
document.querySelector('.refresh-btn').addEventListener('click', refreshScores);
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  sendData();
});