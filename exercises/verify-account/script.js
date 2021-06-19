const codes = document.querySelectorAll('.code');
const userEmailElement = document.querySelector('.user-email');

codes[0].focus();
console.log(`Codes array length is : ${codes.length}`);

let email = localStorage.getItem('email');
if (!email) {
  let newEmail = prompt('Please enter your email address');
  console.log(newEmail);
  email = newEmail;
  localStorage.setItem('email', newEmail);
}
if (email) {
  userEmailElement.innerHTML = email;
}

for (let i = 0; i < codes.length; i++) {
  codes[i].addEventListener('keydown', function (e) {
    console.log('I was pressed 😄 😠');
    console.log(e.keyCode);
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      codes[i].value = '';
      setTimeout(() => codes[i + 1].focus(), 10);
    } else if (e.keyCode === 8) {
      setTimeout(() => codes[i - 1].focus(), 10);
    }
  });
}
