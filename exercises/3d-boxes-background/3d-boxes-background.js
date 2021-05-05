const boxesContainerElement = document.querySelector(".box-container");
const btnElement = document.querySelector(".btn");

btnElement.addEventListener("click", function () {
  boxesContainerElement.classList.toggle("big");
});

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxesContainerElement.appendChild(box);
    }
  }
}

createBoxes();
