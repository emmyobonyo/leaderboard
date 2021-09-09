// import _ from 'lodash';
import './style.css';

const form = document.getElementById('form');
const inputName = document.getElementById('name');
const inputScore = document.getElementById('score');
const refreshButton = document.getElementById('refresh');
const ul = document.getElementById('ul');

refreshButton.addEventListener('click', () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Gl6jBTKnXWBvnQjOirPR/scores/')
  .then((res) => res.json())
  .then((data) => {
    const user = data.result;
    user.forEach((user) => {
      const list = document.createElement('li');
      list.innerHTML = `${user.user} : ${user.score}`;
      ul.appendChild(list);
    })
  });

})

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
  inputName.value = '';
  inputScore.value = '';
})

function component() {
  const element = document.createElement('div');

  return element;
}

document.body.appendChild(component());