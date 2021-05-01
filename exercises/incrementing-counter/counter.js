const counters = document.querySelectorAll(".counter");

for (let i = 0; i < counters.length; i++) {
  counters[i].innerText = 0;

  const updateCounter = () => {
    let target = counters[i].getAttribute("data-target");
    target = parseInt(target);
    const currentValue = parseInt(counters[i].innerText);

    const increment = target / 300;

    if (currentValue < target) {
      counters[i].innerText = `${Math.ceil(currentValue + increment)}`;
      setTimeout(updateCounter, parseInt(Math.random() * 500));
    } else {
      counters[i].innerText = target;
    }
  };

  updateCounter();
}

// const counters = document.querySelectorAll(".counter");

// counters.forEach((counter) => {
//   counter.innerText = "0";

//   const updateCounter = () => {
//     const target = +counter.getAttribute("data-target");
//     const c = +counter.innerText;

//     const increment = target / 200;

//     if (c < target) {
//       counter.innerText = `${Math.ceil(c + increment)}`;
//       setTimeout(updateCounter, 1);
//     } else {
//       counter.innerText = target;
//     }
//   };

//   updateCounter();
// });
