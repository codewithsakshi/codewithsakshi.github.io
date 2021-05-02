const button = document.querySelector(".btn");

const toasts = document.querySelector("#toasts");

const messages = ["Hey Guys", "Hello World", "Hola!", "Okie Dokie"];

const types = ["info", "success", "error"];

button.addEventListener("click", function () {
  createNotification();
});

function createNotification() {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  const type = getRandomType();
  const message = getRandomMessage();
  notif.classList.add(type);
  notif.innerText = message;

  toasts.appendChild(notif);
  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
