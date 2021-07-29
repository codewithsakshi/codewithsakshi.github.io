// function askChoice() {
//   // input = prompt('Enter your choice');
//   switch (input) {
//     case '1':
//       foo();
//       break;
//     case '2':
//       if (!account) {
//         errorMessageElement.innerHTML = `You don't have account. press 1 to create account`;
//       } else {
//         let amount = prompt('Enter amount to deposit');
//         account.deposit(amount);
//         resultElement.innerHTML = `Amount ${amount} deposited successfully`;
//       }
//       break;
//     case '3':
//       if (!account) {
//         errorMessageElement.innerHTML = `You don't have account. press 1 to create account`;
//       } else {
//         let amount = prompt('Enter amount to withdraw');
//         account.withdraw(amount);
//         resultElement.innerHTML = `Amount ${amount} withdrawn successfully`;
//       }
//       break;
//     case '4':
//       if (!account) {
//         errorMessageElement.innerHTML = `You don't have account. press 1 to create account`;
//       } else {
//         resultElement.innerHTML = `You have ${account.balance} left in your account`;
//       }
//       break;
//     case '9':
//       resultElement.innerHTML = `Thank you for using our banking app. Hope to see you again!`;
//       break;
//     default:
//       errorMessageElement.innerHTML = `Invalid choice`;
//   }
// }

// askChoice();
// loadAllAccounts();

// function foo() {
//   // let firstName = prompt('Enter first name');
//   // let lastName = prompt('Enter Last Name');
//   // let email = prompt('Enter email');

//   account = new CreateAccount(firstName, lastName, email);
//   accounts.push(account);
//   updateLocalStorage();
//   loadAllAccounts();
//   resultElement.innerHTML = `Account created successfully`;
// }

// let input = null;

// function loadAllAccounts() {
//   console.log(accounts);
//   accounts.forEach((account) => {
//     const accountElement = document.createElement('div');
//     accountElement.innerHTML = `
//         <p><strong>Name<strong>: ${account.firstName} ${account.lastName}</p>
//         <p><strong>Balance<strong>: ${account.balance}</p>
//         `;
//     availableAccounts.appendChild('accountElement');
//   });
// }

const depositBtnEl = document.querySelector('.deposit-btn');
const withdrawnBtnEl = document.querySelector('.withdrawn-btn');

const modalFormEl = document.querySelector('.modal-form');
const submitBtnEl = document.querySelector('.submit-btn');
const messageEl = document.querySelector('.final-message');

depositBtnEl.addEventListener('click', () => {
  modalFormEl.classList.add('show');
  submitBtnEl.innerHTML = 'Add';
});

withdrawnBtnEl.addEventListener('click', () => {
  modalFormEl.classList.add('show');
  submitBtnEl.innerHTML = 'Withdraw';
});

modalFormEl.addEventListener('submit', (e) => {
  modalFormEl.classList.remove('show');
  e.preventDefault();
  messageEl.innerHTML = `your transaction succesed`;
});
