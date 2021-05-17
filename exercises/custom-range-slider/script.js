const rangeSliderElement = document.querySelector("#range");

rangeSliderElement.addEventListener("input", function (event) {
  const value = parseInt(event.target.value);
  const labelElement = event.target.nextElementSibling;

  const rangeElementWidth = getComputedStyle(event.target).getPropertyValue(
    "width"
  );
  const labelElementWidth = getComputedStyle(labelElement).getPropertyValue(
    "width"
  );
  console.log({ rangeElementWidth, labelElementWidth });
  const numElementWidth = parseInt(
    rangeElementWidth.substring(0, rangeElementWidth.length - 2)
  );
  const numLabelElementWidth = parseInt(
    labelElementWidth.substring(0, labelElementWidth.length - 2)
  );

  console.log({ numElementWidth, numLabelElementWidth });
  const max = +event.target.max;
  const min = +event.target.min;

  const left = value * (numElementWidth / max) - numLabelElementWidth / 2;
  // scale(value, min, max, 10, -10);

  labelElement.style.left = `${left}px`;
  labelElement.innerHTML = value;
});

// // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// const scale = (num, in_min, in_max, out_min, out_max) => {
//   return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
// };
