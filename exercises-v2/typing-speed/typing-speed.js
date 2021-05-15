const textInputElement = document.querySelector("#text");
const scoreElement = document.querySelector(".score");
const timeElement = document.querySelector(".time");
const endGameELement = document.querySelector(".end-game-container");
const levelButtonELement = document.querySelectorAll(".level-button");
const gameButtonElement = document.querySelector(".game-buttom");
const gameParentContainer = document.querySelector(".game-parent-container");
const wordELement = document.querySelector(".word");

const words = [
  "sigh",
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "warlike",
  "bad",
  "north",
  "dependent",
  "steer",
  "silver",
  "highfalutin",
  "superficial",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
  "loving",
  "beautiful",
  "girl",
  "direction",
  "book",
  "exchange",
  "calculator",
  "work",
  "shopkeeper",
  "football",
  "cricket",
  "hockey",
  "school",
  "garden",
];

let randomWord;
let score = 0;
let time = 10;
let timeInterval;
function load() {
  textInputElement.focus();
  timeInterval = setInterval(updateTime, 1000);
  addWordToDOM();

  textInputElement.addEventListener("input", (e) => {
    const value = e.target.value;

    if (value === randomWord) {
      addWordToDOM();
      updateScore();
      e.target.value = "";
      time = 10;
      updateTime();
    }
  });
}

function getRandomWord() {
  const randomIndexWord = words[Math.floor(Math.random() * words.length)];
  return randomIndexWord;
}

function addWordToDOM() {
  randomWord = getRandomWord();
  wordELement.innerHTML = randomWord;
}

function updateScore() {
  score++;
  scoreElement.innerHTML = score;
}

function updateTime() {
  // console.log({ time });
  time--;
  timeElement.innerHTML = time + "s";
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}

function gameOver() {
  endGameELement.innerHTML = `<h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onClick= "location.reload()">Reload</button>`;
}

load();

// // levelButtonELement.addEventListener("click", loadNextPage);

// function loadNextPage() {
//   gameParentContainer.forEach((index) => {
//     index[1];
//   });
// }
