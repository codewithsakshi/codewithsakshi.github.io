const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const main = document.querySelector(".main");
const form = document.querySelector("#form");
const search = document.querySelector("#search");

// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  const movies = data.results;
  console.log(movies);
  showMovies(movies);
}

function showMovies(movies) {
  console.log(movies);
  main.innerHTML = "";

  for (let i = 0; i < movies.length; i++) {
    const title = movies[i].title;
    const poster_path = movies[i].poster_path;
    const vote_average = movies[i].vote_average;
    const overview = movies[i].overview;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    const ratingClass = getClassByRate(vote_average);
    console.log(ratingClass);
    movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
          <h3>${title}</h3>
          <span class="${ratingClass}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
        `;
    main.appendChild(movieEl);
  }
  // movies.forEach((movie) => {
  //   const { title, poster_path, vote_average, overview } = movie;

  //   const movieEl = document.createElement("div");
  //   movieEl.classList.add("movie");

  //   movieEl.innerHTML = `
  //           <img src="${IMG_PATH + poster_path}" alt="${title}">
  //           <div class="movie-info">
  //         <h3>${title}</h3>
  //         <span class="${getClassByRate(vote_average)}">${vote_average}</span>
  //           </div>
  //           <div class="overview">
  //         <h3>Overview</h3>
  //         ${overview}
  //       </div>
  //       `;
  //   main.appendChild(movieEl);
  // });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    const url = SEARCH_API + searchTerm;
    console.log(url);
    getMovies(url);

    search.value = "";
  } else {
    window.location.reload();
  }
});
