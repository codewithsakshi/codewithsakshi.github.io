console.log("Hello World");

let users = [
  { name: "Satyam", wealth: 10000, id: 1 },
  { name: "Satyam", wealth: 20000, id: 2 },
  { name: "Satyam", wealth: 30000, id: 3 },
  { name: "Satyam", wealth: 40000, id: 4 },
];

const newUsers = [
  { name: "A", wealth: 3000, id: 4 },
  { name: "B", wealth: 4000, id: 5 },
  { name: "C", wealth: 5000, id: 6 },
  { name: "D", wealth: 6000, id: 8 },
  { name: "E", wealth: 7000, id: 9 },
];

const addUserBtn = document.querySelector(".add-user-btn");
const doubleMoneyBtn = document.querySelector(".double-money-btn");
const mainElement = document.querySelector(".content");
const showOnlyMillionairesBtn = document.querySelector(
  ".show-only-millionaires-btn"
);
const sortByRichestBtn = document.querySelector(".sort-by-richest-btn");
const calculateEntireWealthBtn = document.querySelector(
  ".calculate-entire-wealth-btn"
);

function entireWealth() {
  const userWealth = users.reduce(function (acc, user) {
    acc = acc + user.wealth;
    return acc;
  }, 0);
  console.log(userWealth);
  const totalWealthElement = document.createElement("div");
  totalWealthElement.innerHTML = `<div class="total-wealth">
    <div class="label">Total Wealth </div>
    <div class="value">${userWealth}</div>
  </div>`;
  mainElement.appendChild(totalWealthElement);
}

function sortByRichest() {
  users.sort(function (a, b) {
    console.log(a, b);
    if (a.wealth > b.wealth) return -1;
    if (a.wealth < b.wealth) return 1;
  });
  load(users);
}

addUserBtn.addEventListener("click", addNewUser);
doubleMoneyBtn.addEventListener("click", doubleUserWealth);
showOnlyMillionairesBtn.addEventListener("click", showMillionairesUser);
sortByRichestBtn.addEventListener("click", sortByRichest);
calculateEntireWealthBtn.addEventListener("click", entireWealth);

function load() {
  mainElement.innerHTML = "";
  users.forEach(function (user) {
    createUser(user);
  });
}

load();

function createUser(user) {
  const newElement = document.createElement("div");
  newElement.classList.add("content-row");
  newElement.innerHTML = `<p>${user.name}</p>
  <p>${user.wealth}</p>`;
  mainElement.appendChild(newElement);
}

function addNewUser() {
  const randomIndex = Math.floor(Math.random() * users.length);
  const newUser = newUsers[randomIndex];
  users.push(newUser);
  load();
}

function doubleUserWealth() {
  users.forEach(function (user) {
    user.wealth = user.wealth * 2;
  });
  load();
}

function showMillionairesUser() {
  users = users.filter(function (user) {
    if (user.wealth >= 1000000) {
      return true;
    }
    return false;
  });
  load();
}
