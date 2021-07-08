const withdrawnAmountEl = document.querySelector('.amount-withdraw');
// const errorMessageElement = document.getElementById('errorMessage');
const resultElement = document.querySelector('.result');

const formEl = document.querySelector('#form');

const formContainerEl = document.querySelector('.form-container');

const depositBtnEl = document.querySelector('.deposit-btn');
const withdrawnBtnEl = document.querySelector('.withdrawn-btn');

const modalFormEl = document.querySelector('.modal-form');
const submitBtnEl = document.querySelector('.submit-btn');

const messageEl = document.querySelector('.final-message');

class CreateAccount {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.balance = 0;
  }

  deposit(amount) {
    if (amount < 0) {
      errorMessageElement.innerHTML = `Deposit amount can not be less than 0`;
    } else {
      this.balance = this.balance + Number(amount);
    }
  }

  withdraw(amount) {
    if (this.balance < amount) {
      errorMessageElement.innerHTML = `Insufficient balance`;
    } else {
      this.balance = this.balance - amount;
    }
  }
}

if (!localStorage.getItem('accounts')) {
  localStorage.setItem('accounts', []);
}

let accounts = [];

try {
  accounts = JSON.parse(localStorage.getItem('accounts'));
} catch (err) {
  accounts = [];
  localStorage.setItem('accounts', []);
}
let account = null;

function updateLocalStorage() {
  localStorage.setItem('accounts', JSON.stringify(accounts));
}

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData);

  const { firstName, lastName, email } = data;
  console.log({ firstName, lastName, email });

  account = new CreateAccount(firstName, lastName, email);
  accounts.push(account);
  updateLocalStorage();
  resultElement.innerHTML = `Account created successfully. Redirecting to home page`;
  setTimeout(() => {
    window.location.href = '/exercises-v2/banking-app/home.html';
  }, 2000);
});

depositBtnEl.addEventListener('click', () => {
  modalFormEl.classList.add('show');
  submitBtnEl.innerHTML = 'Add';
});

withdrawnBtnEl.addEventListener('click', (e) => {
  modalFormEl.classList.add('show');
  submitBtnEl.innerHTML = 'Withdraw';
});

// const cashWithdrawnBtnEl = document.querySelector('.cash-withdrawn');
// const addAmountBtnEl = document.querySelector('.add-amount');

// cashWithdrawnBtnEl.addEventListener('click', () => {
//   console.log('i clicked');
//   console.log('amount withdrawn');
//   messageEl.innerHTML = `collect your cash, your amount withdrawn successfully`;
// });

// addAmountBtnEl.addEventListener('click', () => {
//   console.log('i clicked');
//   console.log('amount withdrawn');
//   messageEl.innerHTML = `your amount deposit successfully`;
// });

modalFormEl.addEventListener('submit', (e) => {
  modalFormEl.classList.remove('show');
  e.preventDefault();
  messageEl.innerHTML = `your transaction succesed`;
});
