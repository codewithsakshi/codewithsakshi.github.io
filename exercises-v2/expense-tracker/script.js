const balanceEl = document.querySelector('#balance');
const moneyPlusEl = document.querySelector('.money-plus');
const moneyMinusEl = document.querySelector('.money-minus');
const listElContainer = document.querySelector('.list');
const formElContainer = document.querySelector('#form');
const inputTextEL = document.querySelector('#text');
const inputAmountEL = document.querySelector('#amount');

formElContainer.addEventListener('submit', addTransaction);

let transactions = [];

try {
  if (localStorage.getItem('transactions')) {
    transactions = JSON.parse(localStorage.getItem('transactions'));
  }
} catch (error) {
  transactions = [];
}

function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === '' || amount.value.trim() === '') {
    alert('Please add a text and amount');
  } else {
    const transaction = {
      id: generateID(),
      text: text.value,
      amount: amount.value,
    };

    transactions.push(transaction);
    addTransactionDOM(transaction);

    updateValues();

    updateLocalStorage();

    text.value = '';
    amount.value = '';
  }
}

function generateID() {
  return Math.floor(Math.random() * 10000);
}

function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

function addTransactionDOM(transaction) {
  let sign;
  if (transaction.amount < 0) {
    sign = '-';
  } else {
    sign = '+';
  }

  const item = document.createElement('li');
  item.innerHTML = `<small class="text-box">${
    transaction.text
  }</small> <span >${sign}${Math.abs(transaction.amount)}</span> 
  <button class="delete-btn" onclick="removeTransaction(${
    transaction.id
  })"><i class="fas fa-trash"></i><button/>`;

  if (transaction.amount < 0) {
    item.classList.add('minus');
  } else {
    item.classList.add('plus');
  }

  listElContainer.appendChild(item);
}

function updateValues() {
  const amounts = transactions.map((transaction) => transaction.amount);

  let totalMoney = 0;
  for (let i = 0; i < amounts.length; i++) {
    totalMoney = totalMoney + Number(amounts[i]);
  }

  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, amount) => (acc = acc + Number(amount)), 0);

  const expense = amounts
    .filter((amount) => amount < 0)
    .reduce((acc, amount) => (acc = acc + Number(amount)), 0);

  balanceEl.innerHTML = `${totalMoney} /-`;
  moneyPlusEl.innerHTML = `${income} /-`;
  moneyMinusEl.innerHTML = `${expense} /-`;
}

function removeTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);

  updateLocalStorage();
  init();
}

function init() {
  listElContainer.innerHTML = '';

  transactions.forEach(addTransactionDOM);
  updateValues();
}

init();
