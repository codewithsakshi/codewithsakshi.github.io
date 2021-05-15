const musicContainer = document.querySelector(".music-container");
const playBtnElement = document.querySelector(".play");
const prevBtnElement = document.querySelector(".prev");
const nextBtnElement = document.querySelector(".next");

const audioSongElement = document.querySelector(".audio");
const progressElement = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const titleElement = document.querySelector(".title");
const coverImgELement = document.querySelector(".cover");
const currentTime = document.querySelector(".current-time");
const durationTime = document.querySelector(".duration-time");

const songs = ["hey", "summer", "ukulele"];

let songIndex = 2;

// event listener

playBtnElement.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

prevBtnElement.addEventListener("click", prevSong);
nextBtnElement.addEventListener("click", nextSong);
audioSongElement.addEventListener("timeupdate", updateProgress);
audioSongElement.addEventListener("ended", nextSong);
audioSongElement.addEventListener("timeupdate", DurTime);
progressContainer.addEventListener("click", setProgress);

loadSongs(songs[songIndex]);

function loadSongs() {
  title.innerHTMl = song;
  audioSongElement.src = `music/${song}.mp3`;
  coverImgELement.src = `images/${song}.jpg`;
}

function playSong() {
  musicContainer.classList.add("play");
  playBtnElement.classList.remove("fa-play");
  playBtnElement.classList.add("fa-pause");
  audioSongElement.play();
}

function pauseSong() {
  musicContainer.classList.remove("play");
  playBtnElement.classList.add("fa-play");
  playBtnElement.classList.remove("fa-pause");
  audioSongElement.pause();
}

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSongs(songs[songIndex]);
  playSong();
}

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;

    loadSongs(songs[songIndex]);
    playSong();
  }
}
