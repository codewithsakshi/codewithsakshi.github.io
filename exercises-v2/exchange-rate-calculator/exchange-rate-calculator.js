const API_URL = "https://open.exchangerate-api.com/v6/latest";

const currencyOneElement = document.querySelector("#currency-one");
const currencyTwoElement = document.querySelector("#currency-two");
const amountOneElement = document.querySelector("#amount-one");
const amountTwoElement = document.querySelector("#amount-two");
const swapBtnElement = document.querySelector(".swap-btn");
const rateElement = document.querySelector(".rate");

swapBtnElement.addEventListener("click, swapCurrency");
currencyOneElement.addEventListener("change", calculate);
currencyOneElement.addEventListener("input", calculate);
amountOneElement.addEventListener("input", calculate);
amountTwoElement.addEventListener("change", calculate);

function swapCurrency() {
  const temp = currencyOneElement.value;
  currencyOneElement.value = currencyTwoElement.value;
  currencyTwoElement.value = temp;
  calculate();
}

calculate();

async function calculate(url) {
  const res = await fetch(url);
  const data = await res.json();
  const rate =
    data.rates[currencyTwoElement.value] / data.rates[currencyOneElement.value];
  rateElement.innerHTML = `1 ${currencyOneElement.value} = ${currencyTwoElement.value}`;
}
