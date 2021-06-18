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
  console.log('loading...');
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
  console.log({ term });
  const posts = document.querySelectorAll('.posts');

  for (let i = 0; i < posts.length; i++) {
    const title = posts.querySelector('.post-title').inneText.toUpperCase();
    const body = post.querySelector('.post-body').inneText.toUpperCase();

    if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
      posts.style.display = 'flex';
    } else {
      posts.style.display = 'none';
    }
  }
}

// Show initial posts
showPosts();

window.addEventListener('scroll', () => {
  console.log('Scrolling ....');
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  console.log({ scrollTop, scrollHeight, clientHeight });
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showloading();
  }
});

filter.addEventListener('input', filterPosts);
inputFilterEl.addEventListener('input', filterPosts);
