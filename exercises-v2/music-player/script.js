const musicContainer = document.querySelector(".music-container");
const playBtnElement = document.querySelector(".play-btn");
const prevBtnElement = document.querySelector(".prev");
const nextBtnElement = document.querySelector(".next");

const audioSongElement = document.querySelector(".audio");
// const progressElement = document.querySelector(".progress");
// const progressContainer = document.querySelector(".progress-container");
const titleElement = document.querySelector(".title");
const coverImgELement = document.querySelector(".cover");
const currentTime = document.querySelector(".current-time");
const durationTime = document.querySelector(".duration-time");

const songs = ["hey", "summer", "ukulele"];

let songIndex = 2;

// event listener

playBtnElement.addEventListener("click", () => {
  const isPlaying = playBtnElement.classList.contains("play");
  console.log({ isPlaying });
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

prevBtnElement.addEventListener("click", prevSong);
nextBtnElement.addEventListener("click", nextSong);
// audioSongElement.addEventListener("timeupdate", updateProgress);
// audioSongElement.addEventListener("ended", nextSong);
// audioSongElement.addEventListener("timeupdate", durTime);
// progressContainer.addEventListener("click", setProgress);

loadSongs(songs[songIndex]);

function loadSongs(song) {
  titleElement.innerHTMl = song;
  audioSongElement.src = `./assets/music/music-player_music_${song}.mp3`;
  coverImgELement.src = `./assets/images/${song}.jpg`;
}

function playSong() {
  playBtnElement.classList.add("play");
  musicContainer.classList.add("play");
  const iconElement = playBtnElement.querySelector(".fas");
  iconElement.classList.remove("fa-play");
  iconElement.classList.add("fa-pause");
  // playBtnElement.innerHTML = "<i class='fas fa-pause'>";
  audioSongElement.play();
}

function pauseSong() {
  musicContainer.classList.remove("play");
  playBtnElement.classList.remove("play");
  const iconElement = playBtnElement.querySelector(".fas");
  iconElement.classList.remove("fa-pause");
  iconElement.classList.add("fa-play");
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
