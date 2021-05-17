const jokeEl = document.querySelector(".joke");
const jokeBtn = document.querySelector(".joke-btn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}
