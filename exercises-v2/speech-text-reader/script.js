const closeBtnEl = document.querySelector('.close');
const toggleBtnEl = document.querySelector('.toggle');
const readTextBtnEl = document.querySelector('.read-text-btn');
const voiceSelectEl = document.querySelector('#voices');
const mainContainerEl = document.querySelector('.main');
const textareaEl = document.querySelector('#text');
const textBoxContainer = document.querySelector('.text-box');

const data = [
  {
    image: './images/drink.jpg',
    text: "I'm Thirsty",
  },
  {
    image: './images/food.jpg',
    text: "I'm Hungry",
  },
  {
    image: './images/tired.jpg',
    text: "I'm Tired",
  },
  {
    image: './images/happy.jpg',
    text: "I'm Happy",
  },
  {
    image: './images/angry.jpg',
    text: "I'm Angry",
  },
  {
    image: './images/sad.jpg',
    text: "I'm Sad",
  },
  {
    image: './images/scared.jpg',
    text: "I'm Scared",
  },
  {
    image: './images/outside.jpg',
    text: 'I Want To Go Outside',
  },
  {
    image: './images/home.jpg',
    text: 'I Want To Go Home',
  },
  {
    image: './images/school.jpg',
    text: 'I Want To Go To School',
  },
  {
    image: './images/grandma.jpg',
    text: 'I Want To Go To Grandmas',
  },
  {
    image: './images/hurt.jpg',
    text: "I'm Hurt",
  },
];

data.forEach(createBox);

// create speech boxes
function createBox(item) {
  const box = document.createElement('div');
  const { image, text } = item;

  box.classList.add('box');

  box.innerHTML = `<img src=${image} alt=${text}/>
  <p class="info">${text}</p>`;

  mainContainerEl.appendChild(box);

  box.addEventListener('click', () => {
    setTextMessage(text);
    speakText();

    box.classList.add('active');
    setTimeout(() => box.classList.remove('active'), 800);
  });
}

const message = new SpeechSynthesisUtterance();

// store voices
let voices = [];

async function getVoices() {
  setTimeout(() => {
    voices = window.speechSynthesis.getVoices();
    console.log(voices);
    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.innerText = `${voice.name} ${voice.lang}`;
      voiceSelectEl.appendChild(option);
      console.log(option.value);
    });
  }, 100);
}

function setTextMessage(text) {
  message.text = text;
}

// set text
function speakText() {
  speechSynthesis.speak(message);
}

toggleBtnEl.addEventListener('click', () => {
  textBoxContainer.classList.toggle('show');
});

closeBtnEl.addEventListener('click', () => {
  textBoxContainer.classList.remove('show');
});

// set voice
function setVoice(e) {
  message.voice = voices.find((voice) => voice.name === e.target.value);
}

// voices changed
speechSynthesis.addEventListener('voiceschange', getVoices);

voiceSelectEl.addEventListener('change', setVoice);

readTextBtnEl.addEventListener('click', () => {
  setTextMessage(textareaEl.value);
  speakText();
});

getVoices();
