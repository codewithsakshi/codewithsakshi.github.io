const API_URL = "https://open.exchangerate-api.com/v6/latest";

const currencyOneElement = document.querySelector("#currency-one");
const currencyTwoElement = document.querySelector("#currency-two");
const amountOneElement = document.querySelector("#amount-one");
const amountTwoElement = document.querySelector("#amount-two");
const swapBtnElement = document.querySelector(".swap-btn");
const rateElement = document.querySelector(".rate");

swapBtnElement.addEventListener("click", swapCurrency);

currencyOneElement.addEventListener("change", calculate);
currencyOneElement.addEventListener("input", calculate);

currencyTwoElement.addEventListener("change", calculate);
currencyTwoElement.addEventListener("input", calculate);

amountOneElement.addEventListener("input", calculate);

function swapCurrency() {
  const temp = currencyOneElement.value;
  currencyOneElement.value = currencyTwoElement.value;
  currencyTwoElement.value = temp;
  calculate();
}

calculate();

async function calculate() {
  const currency1 = currencyOneElement.value;
  const currency2 = currencyTwoElement.value;
  const amount1 = amountOneElement.value;

  console.log({ currency1, currency2, amount1 });
  const res = await fetch(API_URL);
  const data = await res.json();
  const rates = data.rates;

  const rate = (rates[currency2] / rates[currency1]).toFixed(3);
  rateElement.innerHTML = `1 ${currency1} = ${rate} ${currency2}`;
  amountTwoElement.value = (amount1 * rate).toFixed(3);
}
