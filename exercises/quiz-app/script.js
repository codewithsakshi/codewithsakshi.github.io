const quizData = [
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
];

const quiz = document.querySelector('.quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.querySelector('.question');
const aText = document.querySelector('.a-text');
const bText = document.querySelector('.b-text');
const cText = document.querySelector('.c-text');
const dText = document.querySelector('.d-text');
const submitBtn = document.querySelector('.submit');

let currentQuizIndex = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuizIndex];

  questionEl.innerText = currentQuizData.question;
  aText.innerText = currentQuizData.a;
  bText.innerText = currentQuizData.b;
  cText.innerText = currentQuizData.c;
  dText.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerE1) => (answerE1.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
      console.log({ answer });
    }
  });
  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuizIndex].correct) {
      score++;
    }

    currentQuizIndex++;

    if (currentQuizIndex < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
          <h2>You answered ${score}/${quizData.length} questions correctly </h2>
          <button onclick="window.location.reload()">Reload</button>
      `;
    }
  }
});
