const balanceEl = document.querySelector('.balance');
const moneyPlusEl = document.querySelector('.money-plus');
const moneyMinusEl = document.querySelector('.money-minus');
const listElContainer = document.querySelector('.list');
const formElContainer = document.querySelector('#form');
const inputTextEL = document.querySelector('#text');
const inputAmountEL = document.querySelector('#amount');

formElContainer.addEventListener('submit', addTransaction);

const localStorageTransactions = JSON.parse(
  localStorage.getItem('transactions')
);

let transactions;

if (localStorage.getItem('transaction') !== null) {
  transactions = localStorageTransactions;
} else {
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
  item.innerHTML = `${transaction.text} <span>${sign}${Math.abs(
    transaction.amount
  )}</span> 
  <button class="delete-btn" onclick="removeTransaction(${
    transaction.id
  })">X<button/>`;

  console.log(item);

  if (transaction.amount < 0) {
    item.classList.add('minus');
  } else {
    item.classList.add('plus');
  }

  listElContainer.appendChild(item);
}

function updateValues() {
  // balanceEl.innerHTML = `${totalMoney}Rs`;
  // moneyPlusEl.innerHTML = `${income}Rs`;
  // moneyMinusEl.innerHTML = `${expense}Rs`;
}

function removeTransaction(id) {
  transactions = transaction.filter((transaction) => transaction.id !== id);

  updateLocalStorage();
  init();
}

function init() {
  listElContainer.innerHTML = '';

  transactions.forEach(addTransactionDOM);
  updateValues();
}

init();
