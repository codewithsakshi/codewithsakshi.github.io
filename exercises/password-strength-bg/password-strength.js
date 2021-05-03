const password = document.querySelector("#password");
const background = document.querySelector(".background");

password.addEventListener("input", function (event) {
  const input = event.target.value;
  const length = input.length;
  const blurValue = 15 - length * 2;
  background.style.filter = `blur(${blurValue}px)`;
});
