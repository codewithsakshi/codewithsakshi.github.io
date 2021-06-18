const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', function () {
  nav.classList.toggle('active');
});
