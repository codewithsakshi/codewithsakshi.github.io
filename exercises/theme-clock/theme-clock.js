const hourNeedle = document.querySelector(".hour");
const minuteNeedle = document.querySelector(".minute");
const secondNeedle = document.querySelector(".second");
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");
const toggleBtn = document.querySelector(".toggle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
toggleBtn.addEventListener("click", function (e) {
  console.log(e);
  const htmlElements = document.querySelector("html");
  if (htmlElements.classList.contains("dark")) {
    htmlElements.classList.remove("dark");
    e.target.innerHTML = "Dark mode";
  } else {
    htmlElements.classList.add("dark");
    e.target.innerHTML = "Light mode";
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  let hoursForClock = hours;
  if (hours > 12) {
    hoursForClock = hours % 12;
  }
  const ampm = hours >= 12 ? "PM" : "AM";

  hourNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;

  minuteNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;

  const secondRotation = scale(seconds, 0, 59, 0, 360);
  console.log(`Rotation per second: ${secondRotation}`);
  secondNeedle.style.transform = `translate(-50%, -100%) rotate(${secondRotation}deg)`;

  timeElement.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;
  dateElement.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();

setInterval(setTime, 1000);
