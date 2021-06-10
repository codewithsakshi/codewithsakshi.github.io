const daysEl = document.querySelector('.days');
const hoursEl = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');
const yearEl = document.querySelector('.year');

const loadingImg = document.querySelector('.loadingImg');
const countdown = document.querySelector('.countdown');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

yearEl.innerHTML = currentYear + 1;

function updateCountdown() {
  const currentTime = new Date();

  const diffInTime = newYearTime - currentTime;

  const days = Math.floor(diffInTime / 1000 / 60 / 60 / 24);
  const hours = Math.floor(diffInTime / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(diffInTime / 1000 / 60) % 60;
  const seconds = Math.floor(diffInTime / 1000) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours < 10 ? '0' + hours : hours;
  minutesEl.innerHTML = minutes < 10 ? '0' + minutes : minutes;
  secondsEl.innerHTML = seconds < 10 ? '0' + seconds : seconds;
}

setTimeout(() => {
  loadingImg.remove();
  countdown.style.display = 'flex';
}, 1000);

setInterval(updateCountdown, 1000);
