const weightInputEl = document.querySelector('.weight-input');
const heightInputEl = document.querySelector('.height-input');
const calculateBtnEl = document.querySelector('.calculate-btn');
const bodyMassIndexEl = document.querySelector('.bodyMassIndex');
const resultEl = document.querySelector('.result');
const resetBtnEl = document.querySelector('.reset-btn');

function calculateBMI(weightInKg, heightInMeter) {
  const bodyMassIndex = (weightInKg / heightInMeter ** 2).toFixed(2);
  bodyMassIndexEl.innerHTML = `<h4>BMI = ${bodyMassIndex}</h4>`;

  if (bodyMassIndex < 18.5) return `Underweight`;
  if (bodyMassIndex < 24.5) return `Normal weight`;
  if (bodyMassIndex < 29.9) return `Overweight`;
  if (bodyMassIndex > 30) return `obese`;

  return bodyMassIndex;
}
console.log(calculateBMI(38, 1.52));

calculateBtnEl.addEventListener('click', function () {
  const weight = weightInputEl.value;
  const height = heightInputEl.value;

  if ((weight, height)) {
    const result = calculateBMI(weight, height);
    resultEl = resultEl.innerHTML = `${result}`;
    resultEl.classList.add('result-bmi');
  }

  if (!height) {
    resultEl.innerHTML = `<p>Please input height</p>`;
    resultEl.classList.add('error');
  }
  if (!weight) {
    resultEl.innerHTML = `<p>please input weight</p>`;
    resultEl.classList.add('error');
  }
});

resetBtnEl.addEventListener('click', function () {
  weightInputEl.innerHTML = '';
  heightInputEl.innerHTML = '';
  bodyMassIndexEl.innerHTML = '';
  resultEl.innerHTML = '';
  weightInputEl.value = '';
  heightInputEl.value = '';
});
