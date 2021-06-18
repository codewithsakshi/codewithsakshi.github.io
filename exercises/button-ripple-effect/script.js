const buttonElement = document.querySelector('.ripple');

buttonElement.addEventListener('click', function (e) {
  const x = e.clientX;
  const y = e.clientY;

  console.log({ x, y });

  const buttonTop = e.target.offsetTop;
  const buttonLeft = e.target.offsetLeft;

  console.log({ buttonTop, buttonLeft });

  const xInside = x - buttonLeft;
  const yInside = y - buttonTop;
  console.log({ xInside, yInside });
  const circleElement = document.createElement('span');
  circleElement.classList.add('circle');
  circleElement.style.top = yInside + 'px';
  circleElement.style.left = xInside + 'px';

  this.appendChild(circleElement);

  setTimeout(() => circleElement.remove(), 500);
});
