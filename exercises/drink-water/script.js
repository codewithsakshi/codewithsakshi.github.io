const smallCupsElements = document.querySelectorAll('.cup-small');
const litersElement = document.querySelector('.liters');
const percentageFilledElement = document.querySelector('.percentage');
const remainedElement = document.querySelector('.remained');

updateBigCup();

smallCupsElements.forEach(function (smallCup, index) {
  smallCup.addEventListener('click', function () {
    highlightCups(index);
  });
});

function highlightCups(index) {
  smallCupsElements.forEach(function (smallCup, index2) {
    if (index2 <= index) {
      smallCup.classList.add('full');
    } else {
      smallCup.classList.remove('full');
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const smallFilledCupsElements = document.querySelectorAll('.cup-small.full');
  const totalsmallFilledCups = smallFilledCupsElements.length;
  const totalSmallCups = smallCupsElements.length;

  if (totalsmallFilledCups === 0) {
    percentageFilledElement.style.visibility = 'hidden';
    percentageFilledElement.style.height = 0;
  } else {
    percentageFilledElement.style.visibility = 'visible';
    percentageFilledElement.style.height = `${
      (totalsmallFilledCups / totalSmallCups) * 330
    }px`;
    percentageFilledElement.innerText = `${
      (totalsmallFilledCups / totalSmallCups) * 100
    }%`;
  }

  if (totalsmallFilledCups === totalSmallCups) {
    remainedElement.style.visibility = 'hidden';
    remainedElement.style.height = 0;
  } else {
    remainedElement.style.visibility = 'visible';
    litersElement.innerText = `${2 - (250 * totalsmallFilledCups) / 1000}L`;
  }
}
