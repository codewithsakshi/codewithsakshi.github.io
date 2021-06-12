/**
 *
 * Read about spread operator
 * https://javascript.info/rest-parameters-spread
 */

const rulesBtnEl = document.querySelector('.rules-btn');
const closeBtnEl = document.querySelector('.close-btn');
const gameRuleEl = document.querySelector('.rules');
const canvasElContainer = document.querySelector('#canvas');
const scoreEl = document.querySelector('.score');
const ctx = canvas.getContext('2d');

rulesBtnEl.addEventListener('click', () => {
  gameRuleEl.classList.add('show');
});

closeBtnEl.addEventListener('click', () => {
  gameRuleEl.classList.remove('show');
});

let score = 0;

const SPEED_FACTOR = 1.1;

const brickRowCount = 5;
const brickColumnCount = 9;
const delay = 500; //delay to reset the game

// Create ball props
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 10,
  speed: 4,
  dx: 4,
  dy: -4,
  visible: true,
};

// Create paddle props
const paddle = {
  x: canvas.width / 2 - 40,
  y: canvas.height - 20,
  w: 80,
  h: 10,
  speed: 8,
  dx: 0,
  visible: true,
};

// Create brick props
const brickInfo = {
  w: 70,
  h: 20,
  padding: 10,
  offsetX: 45,
  offsetY: 30,
  visible: true,
};

// Create bricks
const bricks = [];
for (let i = 0; i < brickColumnCount; i++) {
  bricks[i] = [];
  for (let j = 0; j < brickRowCount; j++) {
    const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX;
    const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY;
    bricks[i][j] = { x, y, ...brickInfo };
  }
}

// Draw ball on canvas
function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
  ctx.fillStyle = ball.visible ? '#120136' : 'transparent';
  ctx.fill();
  ctx.closePath();
}

// Draw paddle on canvas
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
  ctx.fillStyle = paddle.visible ? '#120136' : 'transparent';
  ctx.fill();
  ctx.closePath();
}

// Draw bricks on canvas
function drawBricks() {
  bricks.forEach((row) => {
    row.forEach((brick) => {
      ctx.beginPath();
      ctx.rect(brick.x, brick.y, brick.w, brick.h);
      ctx.fillStyle = brick.visible ? '#120136' : 'transparent';
      ctx.fill();
      ctx.closePath();
    });
  });
}

// Move paddle on canvas
function movePaddle() {
  paddle.x += paddle.dx;

  // Wall detection
  if (paddle.x + paddle.w > canvas.width) {
    paddle.x = canvas.width - paddle.w;
  }

  if (paddle.x < 0) {
    paddle.x = 0;
  }
}

// Move ball on canvas
function moveBall() {
  ball.x += ball.dx;
  ball.y += ball.dy;

  // Wall collision (right/left)
  if (ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {
    ball.dx = ball.dx * -1;
  }

  // Wall collision (top/bottom)
  if (ball.y + ball.size > canvas.height || ball.y - ball.size < 0) {
    ball.dy = ball.dy * -1;
  }

  // console.log(ball.x, ball.y);

  // Paddle collision
  if (
    ball.x - ball.size > paddle.x &&
    ball.x + ball.size < paddle.x + paddle.w &&
    ball.y + ball.size > paddle.y
  ) {
    ball.dy = -ball.speed;
  }

  // Brick collision
  for (let i = 0; i < bricks.length; i++) {
    for (let j = 0; j < bricks[i].length; j++) {
      const brick = bricks[i][j];
      if (brick.visible) {
        if (
          ball.x - ball.size > brick.x &&
          ball.x + ball.size < brick.x + brick.w &&
          ball.y + ball.size > brick.y &&
          ball.y - ball.size < brick.y + brick.h
        ) {
          playBrickCollisionSound();
          ball.dy *= -1;
          brick.visible = false;
          increaseScore();
          ball.speed *= SPEED_FACTOR;
        }
      }
    }
  }

  // hit bottom loose ball
  if (ball.y + ball.size > canvas.height) {
    showAllBricks();
    score = 0;
    ball.speed = 4;
  }
}
function playBrickCollisionSound() {
  const soundEl = document.querySelector(`.wrong`);
  soundEl.pause();
  soundEl.currentTime = 0;
  soundEl.play();
}
// Increase score
function increaseScore() {
  score++;
  scoreEl.innerHTML = `<h3>Score:${score}</h3>`;

  if (score % (brickRowCount * brickColumnCount) === 0) {
    ball.visible = false;
    paddle.visible = false;

    //After 0.5 sec restart the game
    setTimeout(function () {
      showAllBricks();
      score = 0;
      paddle.x = canvas.width / 2 - 40;
      paddle.y = canvas.height - 20;
      ball.x = canvas.width / 2;
      ball.y = canvas.height / 2;
      ball.visible = true;
      paddle.visible = true;
    }, delay);
  }
}

// Make all bricks appear
function showAllBricks() {
  for (let i = 0; i < bricks.length; i++) {
    for (let j = 0; j < bricks[i].length; j++) {
      const brick = bricks[i][j];
      brick.visible = true;
    }
  }
}

// Draw everything
function draw() {
  // clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBall();
  drawPaddle();
  // drawScore();
  drawBricks();
}

// Update canvas drawing and animation
function update() {
  movePaddle();
  moveBall();

  // Draw everything
  draw();

  requestAnimationFrame(update);
}

update();

// Keydown event
function handleKeyUp(e) {
  console.log(`${e.code} up`);
  if (
    e.key === 'Right' ||
    e.key === 'ArrowRight' ||
    e.key === 'left' ||
    e.key === 'ArrowLeft'
  ) {
    paddle.dx = 0;
  }
}

function handleKeyDown(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    paddle.dx = paddle.speed;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    paddle.dx = -paddle.speed;
  }
}
document.addEventListener('keyup', handleKeyUp);
document.addEventListener('keydown', handleKeyDown);

// Rules and close event handlers
rulesBtn.addEventListener('click', () => rules.classList.add('show'));
closeBtn.addEventListener('click', () => rules.classList.remove('show'));
