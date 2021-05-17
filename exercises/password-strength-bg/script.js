const passwordElement = document.querySelector("#password");
const backgroundImageElement = document.querySelector(".background");

passwordElement.addEventListener("input", function (event) {
  const passwordValue = event.target.value;
  const passwordLength = passwordValue.length;
  const blurValue = 20 - passwordLength * 2.5;

  backgroundImageElement.style.filter = `blur(${blurValue}px)`;
});
