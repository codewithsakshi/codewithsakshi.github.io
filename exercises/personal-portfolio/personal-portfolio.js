const hamburgerCircle = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");

const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);

const headerElements = document.querySelector(".header.container");

hamburgerCircle.addEventListener("click", function () {
  hamburgerCircle.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", function () {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    headerElements.style.backgroundColor = "#29323c";
  } else {
    headerElements.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});
