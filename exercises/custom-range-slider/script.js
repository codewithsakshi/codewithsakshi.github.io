const rangeSliderElement = document.querySelector('#range');

rangeSliderElement.addEventListener('input', function (event) {
  const value = parseInt(event.target.value);
  console.log({ value });
  const labelElement = event.target.nextElementSibling;

  const rangeElementWidth = getComputedStyle(event.target).getPropertyValue(
    'width'
  );
  const labelElementWidth =
    getComputedStyle(labelElement).getPropertyValue('width');

  console.log({ rangeElementWidth, labelElementWidth });

  const numElementWidth = parseInt(
    rangeElementWidth.substring(0, rangeElementWidth.length - 2)
  );
  const numLabelElementWidth = parseInt(
    labelElementWidth.substring(0, labelElementWidth.length - 2)
  );

  console.log({ numElementWidth, numLabelElementWidth });

  const max = +event.target.max;
  console.log({ max });
  const min = +event.target.min;
  console.log({ min });

  const left = value * (numElementWidth / max) - numLabelElementWidth / 2;
  console.log({ left });

  labelElement.style.left = `${left}px`;
  labelElement.innerHTML = value;
});
