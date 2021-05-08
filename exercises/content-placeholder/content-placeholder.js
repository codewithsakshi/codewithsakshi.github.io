// const headerElement = document.querySelector(".header");
// const titleElement = document.querySelector(".title");
// const excerptElement = document.querySelector(".excerpt");
// const profile_imgElement = document.querySelector(".profile_img");
// const nameElement = document.querySelector(".name");
// const dateElement = document.querySelector(".date");

// const animated_bgsElement = document.querySelectorAll(".animated-bg");
// const animated_bg_textsElement = document.querySelectorAll(".animated-bg-text");

// setTimeout(getData, 2500);

// function getData() {
//   headerElement.innerHTML =
//     '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />';
//   titleElement.innerHTML = "Lorem ipsum dolor sit amet";
//   excerptElement.innerHTML =
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
//   profile_imgElement.innerHTML =
//     '<img src="./content-placeholder/drag.jpg" alt="a girl" />';
//   dateElement.innerHTML = "may 05, 2021";

//   animated_bgsElement.forEach((bg) => bg.classList.remove("animated-bg"));
//   animated_bg_textsElement.forEach((bg) =>
//     bg.classList.remove("animated-bg-text")
//   );
// }

const headerElement = document.querySelector(".header");
const titleElement = document.querySelector(".title");
const excerptElement = document.querySelector(".excerpt");
const profile_imgElement = document.querySelector(".profile_img");
const nameElement = document.querySelector(".name");
const dateElement = document.querySelector(".date");

const animated_bgsElement = document.querySelectorAll(".animated-bg");
const animated_bg_textsElement = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  headerElement.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />';
  titleElement.innerHTML = "Lorem ipsum dolor sit amet";
  excerptElement.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
  profile_imgElement.innerHTML =
    '<img src="../content-placeholder/drag.jpg" alt="" />';
  nameElement.innerHTML = "Sakshi Mittal";
  dateElement.innerHTML = "may 05, 2021";

  animated_bgsElement.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_textsElement.forEach((bg) =>
    bg.classList.remove("animated-bg-text")
  );
}
