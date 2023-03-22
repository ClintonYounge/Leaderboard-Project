import './style.css';

const scores = require('./modules/scores.js');

const scoreList = document.querySelector('.score-list');

let output = '';

scores.forEach((score) => {
  output += `<li>${score.name}: ${score.score}</li><hr>`;
});

scoreList.innerHTML = output;