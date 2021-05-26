const searchInputElement = document.querySelector("#searchInput");
const searchBtnElement = document.querySelector(".search");
const resultContainer = document.querySelector(".result-container");
const lyricsContainer = document.querySelector(".lyrics-container");
const moreEl = document.querySelector(".more");

const apiURL = "https://api.lyrics.ovh";

searchBtnElement.addEventListener("click", function (e) {
  e.preventDefault();
  const searchText = searchInputElement.value;
  console.log("Search clicked with value ", searchText);
  fetchSongs(searchText);
});

async function fetchSongs(searchText) {
  try {
    // const searchUrl = apiURL + "/suggest" + "/" + searchText
    const searchUrl = `${apiURL}/suggest/${searchText}`;
    console.log(searchUrl);
    const result = await fetch(searchUrl);
    const jsonResult = await result.json();
    console.log(jsonResult);
    const songs = jsonResult.data; // []
    showData(songs); // showData([])
  } catch (err) {
    console.error("Oops 😢 \n Something went wrong");
  }
}

function showData(results) {
  console.log(results); //

  for (let i = 0; i < results.length; i++) {
    const song = results[i];
    const title = song.title;
    const artist = song.artist;
    const artistName = artist.name;

    const newElement = document.createElement("li");
    newElement.innerHTML = `
    <span><strong>${artistName}</strong> - ${title}</span>
    <button class="btn get-lyrics-btn" data-artist="${artistName}" data-songtitle="${title}" >Get Lyrics</button>`;

    resultContainer.appendChild(newElement);
  }
}

async function getLyrics(artist, songTitle) {
  try {
    const lyricsUrl = `${apiURL}/v1/${artist}/${songTitle}`;
    console.log(lyricsUrl);
    const result = await fetch(lyricsUrl);
    const jsonResult = await result.json();
    console.log(jsonResult);
    const lyrics = jsonResult.lyrics;
    console.log(lyrics);

    lyricsContainer.innerHTML = `
    <h2><strong>${artist}</strong> - ${songTitle}</h2>
    <br />
    <hr />
    <br />
    <pre>
    ${lyrics}
    </pre>
    `;
  } catch (err) {
    console.error(err.toString());
  }
}

resultContainer.addEventListener("click", function (e) {
  const target = e.target;

  if (e.target.classList.contains("get-lyrics-btn")) {
    console.log("Lyrics button clicked");
    const song = target.dataset["songtitle"];
    const artist = target.dataset["artist"];

    console.log(song, artist);
    getLyrics(artist, song);
  }
});
