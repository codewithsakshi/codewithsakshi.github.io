// const numsELements = document.querySelectorAll(".nums span");
// const counterElement = document.querySelector(".counter");
// const finalMessageElement = document.querySelector(".final");
// const replayBtnElement = document.querySelector(".replay");

// runAnimation();

// function resetDOM() {
//   counterElement.classList.remove("hide");
//   finalMessageElement.classList.remove("show");

//   numsElements.forEach(function (num) {
//     num.classList.value = "";
//   });

//   numsElements[0].classList.add("in");
// }

// function runAnimation() {
//   numsElements.forEach(function (num, idx) {
//     const nextToLast = numsElements.length - 1;

//     num.addEventListener("animationend", (e) => {
//       if (e.animationName === "goIn" && idx !== nextToLast) {
//         num.classList.remove("in");
//         num.classList.add("out");
//       } else if (e.animationName === "goOut" && num.nextElementSibling) {
//         num.nextElementSibling.classList.add("in");
//       } else {
//         counterElement.classList.add("hide");
//         finalMessageElement.classList.add("show");
//       }
//     });
//   });
// }

// replay.addEventListener("click", () => {
//   resetDOM();
//   runAnimation();
// });

const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const replay = document.querySelector(".replay");

runAnimation();

function resetDOM() {
  counter.classList.remove("hide");
  finalMessage.classList.remove("show");

  nums.forEach((num) => {
    num.classList.value = "";
  });

  nums[0].classList.add("in");
}

function runAnimation() {
  nums.forEach((num, idx) => {
    const nextToLast = nums.length - 1;

    num.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn" && idx !== nextToLast) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "goOut" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        finalMessage.classList.add("show");
      }
    });
  });
}

replay.addEventListener("click", () => {
  resetDOM();
  runAnimation();
});
