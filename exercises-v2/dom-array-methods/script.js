console.log("Hello World");

let users = [
  { name: "Shivam", wealth: 1000000, id: 1 },
  { name: "Anil", wealth: 430000, id: 2 },
  { name: "Aakash", wealth: 350000, id: 3 },
  { name: "Sakshi", wealth: 4650000, id: 4 },
];

const newUsers = [
  { name: "Shivani", wealth: 53000, id: 4 },
  { name: "Sonam", wealth: 44000, id: 5 },
  { name: "Shalini", wealth: 895000, id: 6 },
  { name: "Ravi", wealth: 6000489, id: 8 },
  { name: "Neelam", wealth: 700049, id: 9 },
  { name: "Shashank", wealth: 477000, id: 10 },
  { name: "Virat", wealth: 47000, id: 11 },
  { name: "Rohit", wealth: 57000, id: 12 },
  { name: "Rahul", wealth: 67000, id: 13 },
  { name: "Vikash", wealth: 77000, id: 14 },
  { name: "Santosh", wealth: 87000, id: 15 },
  { name: "Hariom", wealth: 97000, id: 16 },
  { name: "Minakshi", wealth: 75700, id: 17 },
  { name: "Sandhya", wealth: 7600, id: 18 },
  { name: "Raveena", wealth: 798500, id: 19 },
  { name: "Karan", wealth: 47000, id: 20 },
  { name: "Ananaya", wealth: 987000, id: 21 },
  { name: "Aayush", wealth: 647000, id: 22 },
  { name: "Sanjay", wealth: 3327000, id: 23 },
  { name: "priti", wealth: 4337000, id: 24 },
  { name: "Honey", wealth: 537000, id: 25 },
  { name: "Suresh", wealth: 3227000, id: 26 },
  { name: "Anil", wealth: 657000, id: 27 },
  { name: "Shreya", wealth: 237000, id: 28 },
  { name: "Arjeet", wealth: 2327000, id: 29 },
  { name: "Arman", wealth: 3437000, id: 30 },
  { name: "Aman", wealth: 3427000, id: 31 },
  { name: "Shruti", wealth: 7547000, id: 32 },
  { name: "Samiksha", wealth: 547000, id: 33 },
  { name: "Lovely", wealth: 37000, id: 34 },
  { name: "Komal", wealth: 437000, id: 35 },
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

gameButtonElement.addEventListener("click", () => {
  console.log(`i was pressed ${gameButtonElement}`);
});
