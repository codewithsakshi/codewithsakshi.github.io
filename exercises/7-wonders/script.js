const elements = document.querySelectorAll('.panel');

function removeActiveClasses() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove('active');
  }
}

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', function () {
    removeActiveClasses();
    this.classList.add('active');
  });
}
