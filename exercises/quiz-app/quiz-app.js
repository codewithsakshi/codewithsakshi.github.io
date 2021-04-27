const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "Javascript",
    correct: "d,",
  },

  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs sailboats",
    correct: "b",
  },

  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },

  {
    question: "What year was Javascript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.querySelector(".quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.querySelector(".question");
const a_text = document.querySelector(".a-text");
const b_text = document.querySelector(".b-text");
const c_text = document.querySelector(".c-text");
const d_text = document.querySelector(".d-text");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_Text.innerText = currentQuizData.a;
  b_Text.innerText = currentQuizData.b;
  c_Text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
