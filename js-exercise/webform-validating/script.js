const formEl = document.querySelector('#form');
const small = document.querySelectorAll('small');
// const firstNameEl = document.querySelector('#firstName');

const validationRules = {
  firstName: {
    minLength: 3,
    maxLength: 16,
    required: true,
  },
  lastName: {
    minLength: 3,
    maxLength: 16,
    required: true,
  },
  email: {
    regex: /\S+@\S+\.\S+/,
    required: true,
  },
  password: {
    minLength: 6,
    maxLength: 20,
    required: true,
  },
  bio: {
    minLength: 8,
    maxLength: 50,
    required: true,
  },
  phoneNo: {
    minLength: 10,
    maxLength: 10,
    required: true,
  },
};

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData);

  const { firstName, lastName, email, password, phoneNo, bio } = data;
  const allFields = { firstName, lastName, email, password, phoneNo, bio };
  console.log(allFields);

  console.log(allFields);

  for (field in allFields) {
    const element = formEl.querySelector(`input[name=${field}] + small`);
    if (!validateInput(field, allFields[field])) {
      element.innerHTML = `${field} is not valid`;
    } else {
      element.innerHTML = '';
      element.classList.add('success');
    }
  }
});

// show error
// function showError(input, message) {
//   const formControlEl = input.parentElement;
//   formControlEl.className = 'form-control error';
//   const small = formControlEl.querySelector('small');
//   small.innerText = message;
// }

// show success
// function showSuccess(input) {
//   const formControlEl = input.parentElement;
//   formControlEl.className = 'form-control success';
// }

// check email
// function checkEmail(input) {
//   const re =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (re.test(input.value.trim())) {
//     showSuccess(input);
//   } else {
//     showError(input, 'Email is not valid');
//   }
// }

function validateInput(fieldName, value) {
  const rules = validationRules[fieldName];
  let message;
  if (rules.required && !value) {
    return false;
  }
  if (rules.minLength && value.length < rules.minLength) {
    return false;
  }
  if (rules.maxLength && value.length > rules.maxLength) {
    return false;
  }

  if (rules.regex && !rules.regex.test(value)) {
    return false;
  }

  return true;
}
