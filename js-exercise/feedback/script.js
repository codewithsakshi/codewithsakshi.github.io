const prevBtnEl = document.querySelector('.prev-btn');
const nextBtnEl = document.querySelector('.next-btn');
const questionEl = document.querySelector('.question');
const submitBtnEl = document.querySelector('.submit-btn');

const currentQuestionNoEl = document.querySelector('.current-no');
const totalQuestionsEl = document.querySelector('.total-questions');

const progressElement = document.querySelector('.progress-bar');
const progressBarContainer = document.querySelector('.progress-bar-container');

const radioBtns = document.querySelectorAll('.radio-btn');
const errorMsgEl = document.querySelector('.error-msg');
const mainContainer = document.querySelector('.main-container');

const submitMsgEl = document.querySelector('.submit-msg');

const questions = [
  { id: 1, question: 'You need to know code to be a web designer.' },
  {
    id: 2,
    question:
      'A Full Stack developer should know is called MEAN: MongoDB, Express, Angular and NodeIS.',
  },
  {
    id: 3,
    question:
      'A Full Stack developer must understand how to export data from analytical tools such as Google Analytics.',
  },
  {
    id: 4,
    question:
      'Full Stack developers are “developer generalists” who possesses a wealth of technical knowledge.',
  },
  {
    id: 5,
    question:
      'A Full Stack developer needs to know how to use version control tools such as GIT.',
  },
  {
    id: 6,
    question:
      'The Full Stack Developer must be 100% up-to-date on their knowledge and skills, including how to create mobile apps.',
  },
];

const responses = [];

let activeIndex = 0;
const totalQuestions = questions.length;
let selectedRating = undefined;
let errorMessage = 'You need to select a rating to move further';

function updateRating(questionId, rating) {
  const responseIndex = responses.findIndex(
    (response) => response.id === questionId
  );
  if (responseIndex === -1) {
    responses.push({ id: questionId, rating: rating });
  } else {
    responses[responseIndex].rating = rating;
  }
}

function getRating(questionId) {
  const responseIndex = responses.findIndex(
    (response) => response.id === questionId
  );
  if (responseIndex === -1) {
    return null;
  }
  return responses[responseIndex].rating;
}

function setRadioOptions(value) {
  if (!value) {
    radioBtns.forEach((radioBtn) => {
      radioBtn.checked = false;
    });
  } else {
    radioBtns.forEach((radioBtn) => {
      if (radioBtn.value === value) {
        radioBtn.checked = true;
      }
    });
  }
}

nextBtnEl.addEventListener('click', () => {
  const questionId = questions[activeIndex];
  const existingRating = getRating(questionId);
  if (!selectedRating && !existingRating) {
    errorMsgEl.innerHTML = errorMessage;
    return;
  }

  errorMsgEl.innerHTML = '';
  if (selectedRating) {
    updateRating(questionId, selectedRating);
    selectedRating = undefined;
  }
  setRadioOptions();
  if (activeIndex < totalQuestions - 1) {
    activeIndex++;
    updateUI();
  } else {
    nextBtnEl.classList.add('hide');
    submitBtnEl.classList.add('show');
  }
});

radioBtns.forEach((radioBtn) => {
  radioBtn.addEventListener('click', (e) => {
    // console.log(e.target.value);
    selectedRating = e.target.value;
  });
});
prevBtnEl.addEventListener('click', () => {
  if (activeIndex > 0) {
    activeIndex--;
    updateUI();
  }
});

function updateUI() {
  console.log(responses);
  const questionId = questions[activeIndex];
  const rating = getRating(questionId);
  if (rating) {
    setRadioOptions(rating);
  }
  currentQuestionNoEl.innerHTML = activeIndex + 1;
  const currentQuestion = questions[activeIndex];
  questionEl.innerText = currentQuestion.question;
  if (activeIndex === 0) {
    prevBtnEl.classList.add('hide');
  }
  if (activeIndex > 0) {
    prevBtnEl.classList.remove('hide');
  }
}

function init() {
  totalQuestionsEl.innerHTML = totalQuestions;
  updateUI();
}

init();

submitBtnEl.addEventListener('click', () => {
  mainContainer.classList.add('hide');
  submitMsgEl.innerHTML = 'Your feedback send successfully';
});
