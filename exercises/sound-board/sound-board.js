const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttonsEl = document.querySelector(".buttons-container");

for (let i = 0; i < sounds.length; i++) {
  const btn = document.createElement("button");
  btn.innerText = sounds[i];
  btn.classList.add("btn");
  btn.addEventListener("click", function () {
    stopSongs();
    const soundEl = document.querySelector(`.${sounds[i]}`);
    soundEl.play();
  });

  buttonsEl.appendChild(btn);
}

function stopSongs() {
  for (let i = 0; i < sounds.length; i++) {
    const soundEl = document.querySelector(`.${sounds[i]}`);
    soundEl.pause();
    soundEl.currentTime = 0;
  }
}
