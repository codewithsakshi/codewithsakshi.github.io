const calcScreen = document.querySelector(".calc-screen");
const calcButtons = document.querySelectorAll(".calc-btn");
let buffer = "0";
let previousOperator = "";
let runningTotal = 0;

function handleClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  refreshUI();
}

function handleNumber(value) {
  if (buffer === "0") {
    buffer = value;
  } else {
    buffer = buffer + value;
  }
  //   console.log(`Number:  ${value}`);
}

function handleMath(value) {
  if (buffer === "0") {
    return;
  }
  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    //TODO
    flushOperation(intBuffer);
  }
  previousOperator = value;
  buffer = "0";
  console.log(`will do some math with: ${value}`);
}

function flushOperation(intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "−") {
    runningTotal = runningTotal - intBuffer;
  } else if (previousOperator === "×") {
    runningTotal = runningTotal * intBuffer;
  } else if (previousOperator === "÷") {
    runningTotal = runningTotal / intBuffer;
  }
}

function handleSymbol(value) {
  //   console.log(`Symbol:  ${value}`);
  switch (value) {
    case "AC":
      buffer = "0";
      runningTotal = 0;
      break;
    case "=":
      if (previousOperator === "") {
        return;
      }
      const intBuffer = parseInt(buffer);
      flushOperation(intBuffer);
      buffer = runningTotal;
      previousOperator = "";
      runningTotal = 0;
      break;
    case "DEL":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substr(0, buffer.length - 1);
      }
      break;
    case "+":
    case "−":
    case "×":
    case "÷":
    case ".":
      handleMath(value);
      break;

    case "%":
      if (buffer === 0) {
        buffer = 0;
      } else {
        buffer = buffer / 100;
      }
  }
}

function refreshUI() {
  calcScreen.innerText = buffer;
}

calcButtons.forEach((calcButton) => {
  calcButton.addEventListener("click", () => {
    const value = calcButton.innerText;
    handleClick(value);
  });
});
