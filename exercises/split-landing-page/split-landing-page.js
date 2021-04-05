let myName = "Sakshi";

function getName(firstName) {
   return firstName + " Mittal";
}

console.log(getName(myName));  

const left = document.querySelector(".split-left")
const right = document.querySelector(".split-right")
const container = document.querySelector(".container")

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))


