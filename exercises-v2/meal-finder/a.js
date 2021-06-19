const searchBtnElement = document.querySelector('.search-btn');
const inputElement = document.querySelector('#search-meal');
const resultHeading = document.querySelector('.result-heading');
const mealEl = document.querySelector('.meals');
const singleMealEL = document.querySelector('.single-meal');

const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

searchBtnElement.addEventListener('click', function (e) {
  e.preventDefault();
  const mealName = inputElement.value;
  console.log(mealName);
  fetchMeal(mealName);
});

async function fetchMeal(mealName) {
  try {
    const apiurl = `${API_URL}${mealName}`;
    console.log(apiurl);

    const res = await fetch(apiurl);
    const data = await res.json();

    const meals = data.meals;

    resultHeading.innerHTML = `<h2>Search results for '${mealName}':</h2>`;

    if (meals.length === 0) {
      resultHeading.innerHTML = `<p>There are no search results. Try again!<p>`;
    } else {
      const meal = meals[0];
      const mealTitle = meal.strMeal;
      const mealArea = meal.strArea;
      const mealRecipee = meal.strInstructions;
      const mealImg = meal.strMealThumb;

      resultHeading.innerHTML = `<P>${mealTitle}</p>`;

      const mealKeys = Object.keys(meal);
      console.log({ mealKeys });

      const ingredientKeys = mealKeys.filter(function (value) {
        if (value.indexOf('Ingredient') !== -1 && meal[value] !== '') {
          return true;
        }
        return false;
      });

      const measureKeys = mealKeys.filter(function (value) {
        if (value.indexOf('Measure') !== -1 && meal[value] !== ' ') {
          return true;
        }
        return false;
      });

      console.log(ingredientKeys);
      console.log(measureKeys);

      const result = ingredientKeys.map(function (ingredientKey, index) {
        const ingredientValue = meal[ingredientKey];
        const measureKey = measureKeys[index];
        const measureValue = meal[measureKey];
        const obj = {};
        obj[ingredientValue] = measureValue;
        return obj;
      });

      //[{"cumin": "250 gram"}, {"haldi": "100 gram"}, {"mrichr": "300 "}, {}, {}, {}, {}, {}]

      const ingredientEls = result.map(function (ingredient) {
        const liEl = document.createElement('li');
        liEl.classList.add('ingredient-item');

        const keys = Object.keys(ingredient); // ["cumin"]
        const ingredientName = keys[0]; // 'CUMIN'
        liEl.innerHTML = `<strong>${ingredientName}</strong> - ${ingredient[ingredientName]}`;
        return liEl;
      });

      // console.log(ingredientEls);
      const newElement = document.createElement('div');
      newElement.classList.add('ingredient-recipee');

      const listEl = document.createElement('ul');
      listEl.classList.add('ingredient-list');

      ingredientEls.forEach(function (ingredientEl) {
        listEl.appendChild(ingredientEl);
      });

      newElement.innerHTML = `<h3 class="meal-area">${mealArea}</h3>
        <img class="meal-img" src="${mealImg}" alt="${mealTitle}"/>
        <p class="meal-recipee">${mealRecipee}</P>
    `;

      mealEl.appendChild(newElement);
      mealEl.appendChild(listEl);
    }
  } catch (err) {
    console.log(err.toString());
  }
}
