const formEl = document.querySelector('#form');
const leaderBoardContainerEl = document.querySelector('.leaderboard-container');
const inputEl = document.querySelectorAll('.input');

class CreatePlayer {
  constructor(firstName, lastName, country, score) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.score = score;
    this.id = generateID();
  }
}

let players = [];

try {
  if (localStorage.getItem('players'))
    players = JSON.parse(localStorage.getItem('players'));
} catch (err) {
  players = [];
}

function updateLocalStorage() {
  localStorage.setItem('players', JSON.stringify(players));
}

function generateID() {
  return Math.floor(Math.random() * 10000);
  // Use Timestamp
}

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData);

  const { firstName, lastName, country, score } = data;

  const player = new CreatePlayer(
    firstName,
    lastName,
    country,
    parseInt(score)
  );

  let playerIndex = players.length;

  for (let i = 0; i < players.length; i++) {
    if (+player.score > +players[i].score) {
      playerIndex = i;
      break;
    }
  }

  players.splice(playerIndex, 0, player);

  updateLocalStorage();
  updateUI();
});

function loadAllPlayer() {
  leaderBoardContainerEl.innerHTML = '';

  players.forEach((player) => {
    const playerEl = document.createElement('table');

    playerEl.innerHTML = `<tr>
    <td>${player.firstName} ${player.lastName}</td>
    <td>${player.country}</td>
    <td>${player.score}</td>
    <td><i class="fas fa-trash score" onclick="removePlayer(${player.id})"></i></td>
    <td onclick="increaseScore(${player.id})" class="score">+5</td>
    <td onclick="decreaseScore(${player.id})" class="score">-5</td>
    </tr>`;
    leaderBoardContainerEl.appendChild(playerEl);

    // updateLocalStorage();
  });
}

function updateUI() {
  loadAllPlayer();
}

function removePlayer(id) {
  console.log('remove called', id);
  players = players.filter((player) => player.id !== id);

  updateLocalStorage();
  updateUI();
}

function findPlayer(id) {
  return players.find((player) => player.id === id);
}

function increaseScore(id) {
  const player = findPlayer(id);
  if (player) {
    player.score = +player.score + 5;
  }
  // Update in local storage only after sorting players by score
  sortPlayer();
  updateLocalStorage();
  updateUI();
}

function decreaseScore(id) {
  const player = findPlayer(id);
  if (player) {
    player.score = +player.score - 5;
  }
  if (player.score < 0) {
    player.score = 0;
  }
  sortPlayer();
  updateLocalStorage();
  updateUI();
}

function sortPlayer() {
  players.sort(function (a, b) {
    if (a.score > b.score) return -1;
    if (a.score < b.score) return 1;
    return 0;
  });
}

updateUI();
