const hintEl = document.querySelector('.hint');
const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popEL = document.getElementById('popup-container');
const notificationEl = document.getElementById('notification-container');
const finalMessageEl = document.getElementById('final-message');
const finalMessageRevealWordEl = document.getElementById(
  'final-message-reveal-word'
);
const figureParts = document.querySelectorAll('.figure-part');

const words = [
  {
    text: 'JavaScript',
    obscureText: '***aS***pt',
    hint: 'Programming language for web development',
  },
  {
    text: 'Ocean',
    obscureText: 'O**a*',
    hint: 'water. blue. deep',
  },
  {
    text: 'Harry Potter',
    obscureText: 'H***y P****er',
    hint: 'Famous J.K.Rowling book',
  },
];

let selectedWord = words[Math.floor(Math.random() * words.length)];

let playable = true;

const correctLetters = [];
const wrongLetters = [];

function displayWord() {
  wordEl.innerHTML = `
  ${selectedWord.text
    .split('')
    .map(
      (letter) =>
        `<span class="letter">${
          correctLetters.includes(letter) ? letter : ''
        }</span>
        `
    )
    .join('')}
    `;

  hintEl.innerHTML = `<p><strong>Obscure Text: </strong>${selectedWord.obscureText}</p>
  <p><strong>Hint: </strong>${selectedWord.hint}</p>
  `;
  const innerWord = wordEl.innerText.replace(/[\n]/g, '');

  if (innerWord === selectedWord.text) {
    finalMessageEl.innerText = 'Congratulations! You won! 😃';
    finalMessageRevealWordEl.innerText = '';
    popEL.style.display = 'flex';

    playable = false;
  }
}

function updateWrongLettersEl() {
  wrongLettersEl.innerHTML = `
  ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
  ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
  `;

  // display figure parts
  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;

    if (index < errors) {
      part.style.display = 'block';
    } else {
      part.style.display = 'none';
    }
  });

  // check if lost
  if (wrongLetters.length === figureParts.length) {
    finalMessageEl.innerText = 'Unfortunately you lost. 😕';
    finalMessageRevealWordEl.innerText = `...the word was: ${selectedWord}`;
    popEL.style.display = 'flex';

    playable = false;
  }
}

// Show notification
function showNotification() {
  notificationEl.classList.add('show');

  setTimeout(() => {
    notificationEl.classList.remove('show');
  }, 2000);
}

window.addEventListener('keydown', (e) => {
  if (playable) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      const letter = e.key.toLowerCase();

      if (selectedWord.text.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          correctLetters.push(letter);

          displayWord();
        } else {
          showNotification();
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          wrongLetters.push(letter);

          updateWrongLettersEl();
        } else {
          showNotification();
        }
      }
    }
  }
});

// // Restart game and play again

playAgainBtn.addEventListener('click', () => {
  playable = true;

  // empty arrays
  correctLetters.splice(0);
  wrongLetters.splice(0);

  selectedWord = words[Math.floor(Math.random() * words.length)];

  displayWord();
  updateWrongLettersEl();
  popEL.style.display = 'none';
});

displayWord();
