// const daysEl = document.querySelector('.days');
// const hoursEl = document.querySelector('.hours');
// const minutesEl = document.querySelector('.minutes');
// const secondsEl = document.querySelector('.seconds');
// const yearEl = document.querySelector('.year');
// const loadingImg = document.querySelector('.loading');

// const currentYear = new Date().getFullYear();

// const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// yearEl.innerHTML = currentYear + 1;

// function updateCountdown() {
//   const currentTime = new Date();

//   const diffInTime = newYearTime - currentTime;

//   const days = Math.floor(diffInTime / 1000 / 60 / 60 / 24);
//   const hours = Math.floor(diffInTime / 1000 / 60 / 60) % 24;
//   const minutes = Math.floor(diffInTime / 1000 / 60) % 60;
//   const seconds = Math.floor(diffInTime / 1000) % 60;
// }

// daysEl.innerHTML = days;
// hoursEl.innerHTML = hours < 10 ? '0' + hours : hours;
// minutesEl.innerHTML = minutes < 10 ? '0' + minutes : minutes;
// secondsEl.innerHTML = seconds < 10 ? '0' + seconds : seconds;

// setTimeout(() => {
//   loadingImg.remove();
// }, 1000);

// setInterval(updateCountdown, 1000);

const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const year = document.querySelector('.year');
const loading = document.querySelector('.loading');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Set background year
year.innerText = currentYear + 1;

// Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

// Show spinner before countdown
setTimeout(() => {
  loading.remove();
  // countdown.style.display = 'flex';
}, 1000);
