const inputFilterEl = document.querySelector('#filter');
const postsContainerEl = document.querySelector('.posts-container');
const loadingEl = document.querySelector('.loader');

let limit = 5;
let page = 1;

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

async function getPosts() {
  const res = await fetch(
    `${API_BASE_URL}/posts?_limit=${limit}&_page=${page}`,
    {
      method: 'GET',
    }
  );

  const data = await res.json();

  return data;
}

async function showPosts() {
  const posts = await getPosts();

  posts.forEach((post) => {
    const postEl = document.createElement('div');
    postEl.classList.add('post');
    postEl.innerHTML = `
      <div class="number">${post.id}</div>
      <div class="post-info">
        <h2 class="post-title">${post.title}</h2>
        <p class="post-body">${post.body}</p>
      </div>
    `;

    postsContainerEl.appendChild(postEl);
  });
}

function showloading() {
  loadingEl.classList.add('show');

  setTimeout(() => {
    loadingEl.classList.remove('show');

    setTimeout(() => {
      page++;
      showPosts();
    }, 300);
  }, 1000);
}

function filterPosts(e) {
  const term = e.target.value.toUpperCase();
  const posts = document.querySelectorAll('.post');

  posts.forEach((post) => {
    const title = post.querySelector('.post-title').innerText.toUpperCase();
    const body = post.querySelector('.post-body').innerText.toUpperCase();

    if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
      post.style.display = 'flex';
    } else {
      post.style.display = 'none';
    }
  });
}

// Show initial posts
showPosts();

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showloading();
  }
});

inputFilterEl.addEventListener('input', filterPosts);
