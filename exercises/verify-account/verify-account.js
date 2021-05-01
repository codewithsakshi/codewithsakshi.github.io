const codes = document.querySelectorAll(".code");

// x = 5
// y = "satyam"
// z = true
// w = {}
// n = [1,2,34]

codes[0].focus();
console.log(codes);
console.log(`Codes array length is : ${codes.length}`);

for (let i = 0; i < codes.length; i++) {
  codes[i].addEventListener("keydown", function (e) {
    console.log("I was pressed 😄 😠");
    console.log(e.keyCode);
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      codes[i].value = "";
      setTimeout(() => codes[i + 1].focus(), 10);
    } else if (e.keyCode === 8) {
      setTimeout(() => codes[i - 1].focus(), 10);
    }
  });
}

// codes.forEach((code, idx) => {
//   code.addEventListener("keydown", (e) => {
//     if (e.key >= 0 && e.key <= 9) {
//       codes[idx].value = "";
//       setTimeout(() => codes[idx + 1].focus(), 10);
//     } else if (e.key === "Backspace") {
//       setTimeout(() => codes[idx - 1].focus(), 10);
//     }
//   });
// });
