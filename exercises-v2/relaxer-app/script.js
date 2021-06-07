const container = document.querySelector('.container');
const textEl = document.querySelector('.text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breatheAnimation();

function breatheAnimation() {
  textEl.innerText = 'Breathe In !';
  container.className = 'container grow';

  setTimeout(() => {
    textEl.innerText = 'hold';

    setTimeout(() => {
      textEl.innerText = 'Breathe Out!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}
setInterval(breatheAnimation, totalTime);
