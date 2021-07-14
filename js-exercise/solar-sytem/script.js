const formEl = document.querySelector('#form');
const containerEl = document.querySelector('.container');
const inputEl = document.querySelector('.input');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData);

  const { mass, planet } = data;

  calculateWeight(planet, mass);
  inputEl.value = ' ';
});

const planetWeight = {
  earth: 9.8,
  mercury: 3.7,
  venus: 3.7,
  mars: 3.7,
  jupiter: 25,
  saturn: 10.5,
  uranus: 8.9,
  neptune: 11,
  pluto: 0.6,
  moon: 1.6,
};

function calculateWeight(planet, mass) {
  let weight = parseInt(mass) * planetWeight[planet];

  console.log(weight);

  containerEl.innerHTML = ' ';
  const massEl = document.createElement('div');
  massEl.innerHTML = `<p>The Weight of the object on "${planet}"</p>
  <h5 class="weight">${weight}</h5>`;

  const img = document.createElement('img');
  img.src = `./assets/${planet}.png`;

  containerEl.appendChild(img);
  containerEl.appendChild(massEl);
}
