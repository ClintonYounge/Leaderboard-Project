import { getScores, postScore } from './fetchData.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/RZzHgs3RERASk80AOJah/scores/';

const refreshScores = () => {
  const scores = document.querySelector('.score-list');

  scores.innerHTML = '';
  getScores(url).then((data) => {
    data.result.forEach((score) => {
      scores.insertAdjacentHTML('beforeend',
        `<li><span>${score.user}</span><span>${score.score}</span></li>`);
    });
  });
};

const sendData = () => {
  const data = {
    user: document.getElementById('name').value,
    score: document.getElementById('score').value,
  };
  postScore(url, data);

  document.getElementById('name').value = '';
  document.getElementById('score').value = '';
};

export { refreshScores, sendData };