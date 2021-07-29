const container = document.querySelector('.container');
const textEl = document.querySelector('.text');

const totalTimeMilliSec = 7500;
const breatheTime = (totalTimeMilliSec / 5) * 2;
const holdTime = totalTimeMilliSec / 5;

breatheAnimation();

function breatheAnimation() {
  textEl.innerText = 'Breathe In!';
  container.className = 'container grow';

  setTimeout(() => {
    textEl.innerText = 'Hold';

    setTimeout(() => {
      textEl.innerText = 'Breathe Out!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}
setInterval(breatheAnimation, totalTimeMilliSec);
