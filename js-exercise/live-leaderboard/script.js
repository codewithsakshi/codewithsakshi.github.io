const dataEl = document.querySelector('.data');
const clockEl = document.querySelector('.clock');

const users = [
  {
    name: 'Sakshi Mittal',
    views: 0,
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMHBpY3R1cmUlMjAlMjBzbWFsbCUyMHNpemV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'Priya Sharma',
    views: 0,
    img: 'https://images.unsplash.com/photo-1445053023192-8d45cb66099d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybCUyMHBpY3R1cmUlMjAlMjBzbWFsbCUyMHNpemV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'shreya Goyal',
    views: 0,
    img: 'https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80',
  },
  {
    name: 'Tanushka Agrawal',
    views: 0,
    img: 'https://images.unsplash.com/photo-1445404590072-16ef9c18bd83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
  },
  {
    name: 'Anshika Tomar',
    views: 0,
    img: 'https://images.unsplash.com/photo-1472849676747-48a51c0c30b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
  },
];

function updateViews() {
  const randomNo = Math.floor(Math.random() * 50);
  const randomUser = Math.floor(Math.random() * 5);
  users[randomUser].views = users[randomUser].views + randomNo;

  updateUI();
  // console.log(users);
}

const randomEmoji = () => {
  const emojis = ['👏', '👍', '🙌', '🤩', '🔥', '⭐️', '🏆', '💯'];
  let randomNumber = Math.floor(Math.random() * emojis.length);
  return emojis[randomNumber];
};

function updateUI() {
  const sortedUsers = users.sort((a, b) => b.views - a.views);
  dataEl.innerHTML = '';

  sortedUsers.forEach((user) => {
    const newRow = document.createElement('div');
    newRow.className = 'list-item';
    newRow.innerHTML = `
		<div class="user">
			<div class="user-info">
				<img class="user-img" src="${user.img}" />
					<div class="">${user.name}</div>
			</div>
				<div class="user-views">
					<strong>${user.views} Views</strong> ${randomEmoji()}
			</div>
		</div>`;
    dataEl.appendChild(newRow);
  });
}
setInterval(updateViews, 2000);

function showTime() {
  const time = new Date().toLocaleTimeString();
  clockEl.innerText = time;
}

showTime();
setInterval('showTime()', 1000);
