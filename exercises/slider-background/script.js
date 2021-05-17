const body = document.querySelector("body");
const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");

let activeSlide = 0;

rightBtn.addEventListener("click", () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener("click", () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBgToBody();
  setActiveSlide();
});

setBgToBody();

function setBgToBody() {
  const backgroundImageUrl = slides[activeSlide].style.backgroundImage;
  body.style.backgroundImage = backgroundImageUrl;
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[activeSlide].classList.add("active");
}
