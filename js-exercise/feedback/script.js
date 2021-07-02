const progressContainerEl = document.querySelector('.progress-container');
const circleEls = document.querySelectorAll('.circle');
const prevBtnEl = document.querySelector('.previous-btn');
const nextBtnEl = document.querySelector('.next-btn');
const questionEl = document.querySelector('.question');
const submitBtnEl = document.querySelector('.submit-btn');
const questionNoEl = document.querySelector('.question-no');

const questions = [
  {
    question: 'You need to know code to be a web designer.',
  },
  {
    question:
      'A Full Stack developer should know is called MEAN: MongoDB, Express, Angular and NodeIS.',
  },
  {
    questions:
      'A Full Stack developer must understand how to export data from analytical tools such as Google Analytics.',
  },
  {
    question:
      'Full Stack developers are “developer generalists” who possesses a wealth of technical knowledge.',
  },
  {
    question:
      'A Full Stack developer needs to know how to use version control tools such as GIT.',
  },
  {
    question:
      'The Full Stack Developer must be 100% up-to-date on their knowledge and skills, including how to create mobile apps.',
  },
  {
    question:
      'Developers who don’t know about SQL query injections are the same developers who will leave their application databases exposed to hackers.',
  },
  {
    question:
      'JavaScript is the only programming language that can run natively in the browser and on the server-side (Node.js).',
  },
  {
    question:
      'Full Stack Developers to better collaborate and cooperate with their fellow developers/programmers who are working on the same project.',
  },
  {
    question:
      'PHP is an open-source, cross-platform compatible language that can work seamlessly on Unix, macOS, and Windows.',
  },
  {
    question:
      'Full Stack developers are equipped with multiple skills pertaining to both frontend and backend development. ',
  },

  {
    question:
      'No specific degree or educational path exists for careers in web development.',
  },
  {
    question:
      'It is possible to become a web developer with or without a formal education.',
  },
  {
    question:
      'Web developers are responsible for designing and developing websites and website applications.',
  },
  {
    question: 'Node.js can be used for network applications.',
  },
  {
    question:
      'Node.js provides an easy way to build scalable network programs.',
  },
  {
    question:
      'A generic piece of code which runs in between several asynchronous function calls is known as control flow function.',
  },
  {
    question:
      'For async processing, Node.js was created explicitly as an experiment.',
  },
  {
    question:
      'Node.js is quickly gaining attention as it is a loop based server for JavaScript.',
  },
  {
    question:
      'To process and handle external events and to convert them into callback invocations an event loop is used.',
  },
  {
    question:
      'Callback function is used in node.js to deal with multiple requests made to the server.',
  },
  {
    question:
      'XHTML has poor browser support. Internet Explorer and other browsers cannot parse XHTML into XML.',
  },
  {
    question: 'JS which is JavaScript is used to code the functionality.',
  },
  {
    question:
      'PHP or Personal Home Page which is used for server-side scripting.',
  },
  {
    question:
      'HTML is Hypertext Markup Language which is the most used language for making web pages or websites.',
  },
  {
    question:
      'Semantic HTML denotes a coding style where the tags indicate the semantics of text that is to be conveyed. ',
  },
  {
    question:
      'The term DOCTYPE conveys to the browser what type of HTML must be used on a web page.',
  },
  {
    question:
      'Standard mode is a consistent mode of display used across all browsers.',
  },
  {
    question:
      'This external CSS with the elements must have the relevant extensions such as style.css.',
  },
  {
    question: 'It is necessary for a web developer to learn web designing.',
  },
];

let currentActive = 1;
questionNoEl.innerHTML = 0;

nextBtnEl.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circleEls.length) {
    currentActive = circleEls.length;
  }

  update();
});

prevBtnEl.addEventListener('click', () => {
  currentActive--;

  if (currentActive < circleEls.length) {
    currentActive = 1;
  }

  update();
});

function update() {
  circleEls.forEach((circleEl, idx) => {
    if (idx < currentActive) {
      circleEl.classList.add('active');
    } else {
      circleEl.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

let currentQuestionIndex = 0;
loadQuestion();

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  questionEl.innerText = currentQuestion.question;
}

submitBtnEl.addEventListener('click', () => {
  currentQuestionIndex++;
  questionNoEl.innerHTML++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    questionEl.innerHTML = `<p>Congratulations ! You have send feedback of all the questions</p>`;
    submitBtnEl.disabled = true;
  }
});
