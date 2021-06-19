const container = document.querySelector('.container');
const unsplashURL = 'https://source.unsplash.com/random/';
const rows = 5;
const totalRows = rows * 3;

for (let i = 0; i < totalRows; i++) {
  const img = document.createElement('img');

  console.log({ size: getRandomSize() });

  const imageUrl = `${unsplashURL}${getRandomSize()}`;

  console.log('Image URL is ', imageUrl);
  img.src = imageUrl;
  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNo()}x${getRandomNo()}`;
}

function getRandomNo() {
  return Math.floor(Math.random() * 10) + 500;
}
