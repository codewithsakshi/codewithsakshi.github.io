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
