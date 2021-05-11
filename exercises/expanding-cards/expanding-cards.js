// const elements = document.querySelectorAll(".panel");

// function removeActiveClasses() {
//   for (let i = 0; i < elements.length; i++) {
//     elements[i].classList.remove("active");
//   }
// }

// for (let i = 0; i < elements.length; i++) {
//   // console.log(elements[i])
//   elements[i].addEventListener("click", function () {
//     console.log(i + "th image card clicked");
//     removeActiveClasses();
//     elements[i].classList.add("active");
//   });
// }

const panelElements = document.querySelectorAll(".panel");

panelElements.forEach(function (panel) {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panelElements.forEach(function (panel) {
    panel.classList.remove("active");
  });
}
