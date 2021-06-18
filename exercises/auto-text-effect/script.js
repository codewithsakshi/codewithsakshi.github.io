const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

const text = 'We Love Programming!';

let speedValue = 300 / speedEl.value;

let idx = 1;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;
  if (idx > text.length) {
    idx = 1;
  }
  setTimeout(writeText, speedValue);
}

speedEl.addEventListener('input', function (event) {
  const typedValue = event.target.value;
  speedValue = 900 / typedValue;
});
