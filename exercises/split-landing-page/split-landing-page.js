const leftSideElement = document.querySelector(".split-left");
const rightSideElement = document.querySelector(".split-right");
const container = document.querySelector(".container");

leftSideElement.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);
leftSideElement.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);

rightSideElement.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);
rightSideElement.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);
