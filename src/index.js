// import _ from 'lodash';
import './style.css';

const form = document.getElementById('form');
const inputName = document.getElementById('name');
const inputScore = document.getElementById('score');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = inputName.value;
  const score = inputScore.value;

  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Gl6jBTKnXWBvnQjOirPR/scores', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, "/"',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({user:name, score:score})
  })
  .then((res) => res.json())
  .then((data) => console.log(data));
})

function component() {
  const element = document.createElement('div');

  return element;
}

document.body.appendChild(component());