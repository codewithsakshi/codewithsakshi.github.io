document.addEventListener('DOMContentLoaded', () => {
  const gridDisplayEl = document.querySelector('.grid');
  const scoreDisplayEl = document.querySelector('#score');
  const resultDisplayEl = document.querySelector('#result');

  let squares = [];
  const width = 4;
  let score = 0;

  function createBoard() {
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement('div');
      square.innerHTML = 0;

      gridDisplayEl.appendChild(square);
      squares.push(square);
    }
    // console.log(squares);
    generateNo();
    generateNo();
  }
  createBoard();

  function generateNo() {
    const randomNumber = Math.floor(Math.random() * squares.length);

    if (squares[randomNumber].innerHTML == 0) {
      squares[randomNumber].innerHTML = 2;
      // checkForGameOver();
    } else {
      generateNo();
    }
  }

  function moveRight() {
    for (let i = 0; i < 16; i++) {
      if (i % 4 === 0) {
        let totalOne = squares[i].innerHTML;
        let totalTwo = squares[i + 1].innerHTML;
        let totalThree = squares[i + 2].innerHTML;
        let totalFour = squares[i + 3].innerHTML;
        let row = [+totalOne, +totalTwo, +totalThree, +totalFour];
        // console.log('row::', row);

        let filteredRow = row.filter((num) => num);
        // console.log('filteredRow::', filteredRow);
        let missing = 4 - filteredRow.length;
        let zeroes = Array(missing).fill(0);

        // console.log('zeroes::', zeroes);
        let newRow = zeroes.concat(filteredRow);
        // console.log('newRow', newRow);
        squares[i].innerHTML = newRow[0];
        squares[i + 1].innerHTML = newRow[1];
        squares[i + 2].innerHTML = newRow[2];
        squares[i + 3].innerHTML = newRow[3];
      }
    }
  }

  function moveLeft() {
    for (let i = 0; i < 16; i++) {
      if (i % 4 === 0) {
        let totalOne = squares[i].innerHTML;
        let totalTwo = squares[i + 1].innerHTML;
        let totalThree = squares[i + 2].innerHTML;
        let totalFour = squares[i + 3].innerHTML;
        let row = [+totalOne, +totalTwo, +totalThree, +totalFour];
        // console.log('row::', row);

        let filteredRow = row.filter((num) => num);
        // console.log('filteredRow::', filteredRow);
        let missing = 4 - filteredRow.length;
        let zeroes = Array(missing).fill(0);

        // console.log('zeroes::', zeroes);
        let newRow = filteredRow.concat(zeroes);
        // console.log('newRow', newRow);
        squares[i].innerHTML = newRow[0];
        squares[i + 1].innerHTML = newRow[1];
        squares[i + 2].innerHTML = newRow[2];
        squares[i + 3].innerHTML = newRow[3];
      }
    }
  }

  function combinedRow() {
    for (let i = 0; i < 15; i++) {
      if (squares[i].innerHTML === squares[i + 1].innerHTML) {
        let combinedTotal =
          parseInt(squares[i].innerHTML) + parseInt(squares[i + 1].innerHTML);
        squares[i].innerHTML = combinedTotal;
        squares[i + 1].innerHTML = 0;

        score = score + combinedTotal;
        scoreDisplayEl.innerHTML = score;
      }
    }
    checkForWin();
  }

  function moveUp() {
    for (let i = 0; i < 4; i++) {
      let totalOne = squares[i].innerHTML;
      let totalTwo = squares[i + width].innerHTML;
      let totalThree = squares[i + width * 2].innerHTML;
      let totalFour = squares[i + width * 3].innerHTML;
      let column = [+totalOne, +totalTwo, +totalThree, +totalFour];

      let filteredColumn = column.filter((num) => num);
      let missing = 4 - filteredColumn.length;
      let zeroes = Array(missing).fill(0);
      let newColumn = zeroes.concat(filteredColumn);

      squares[i].innerHTML = newColumn[0];
      squares[i + width].innerHTML = newColumn[1];
      squares[i + width * 2].innerHTML = newColumn[2];
      squares[i + width * 3].innerHTML = newColumn[3];
    }
  }

  function moveDown() {
    for (let i = 0; i < 4; i++) {
      let totalOne = squares[i].innerHTML;
      let totalTwo = squares[i + width].innerHTML;
      let totalThree = squares[i + width * 2].innerHTML;
      let totalFour = squares[i + width * 3].innerHTML;
      let column = [+totalOne, +totalTwo, +totalThree, +totalFour];

      let filteredColumn = column.filter((num) => num);
      let missing = 4 - filteredColumn.length;
      let zeroes = Array(missing).fill(0);
      let newColumn = filteredColumn.concat(zeroes);

      squares[i].innerHTML = newColumn[0];
      squares[i + width].innerHTML = newColumn[1];
      squares[i + width * 2].innerHTML = newColumn[2];
      squares[i + width * 3].innerHTML = newColumn[3];
    }
  }

  function combinedColumn() {
    for (let i = 0; i < 12; i++) {
      if (squares[i].innerHTML === squares[i + 1].innerHTML) {
        let combinedTotal =
          parseInt(squares[i].innerHTML) + parseInt(squares[i + 1].innerHTML);
        squares[i].innerHTML = combinedTotal;
        squares[i + 1].innerHTML = 0;

        score = score + combinedTotal;
        scoreDisplayEl.innerHTML = score;
      }
    }
    checkForWin();
  }

  document.addEventListener('keyup', controlKey);

  function controlKey(e) {
    if (e.keyCode === 37) {
      keyLeft();
    } else if (e.keyCode === 38) {
      keyUp();
    } else if (e.keyCode === 39) {
      keyRight();
    } else if (e.keyCode === 40) {
      keyDown();
    }
  }

  function keyRight() {
    moveRight();
    combinedRow();
    moveRight();
    generateNo();
  }

  function keyLeft() {
    moveLeft();
    combinedRow();
    moveLeft();
    generateNo();
  }

  function keyUp() {
    moveUp();
    combinedColumn();
    moveUp();
    generateNo();
  }

  function keyDown() {
    moveDown();
    combinedColumn();
    moveDown();
    combinedColumn();
  }

  // check for win
  function checkForWin() {
    for (let i = 0; i < squares.length; i++) {
      if (+squares[i].innerHTML === 2048) {
        resultDisplayEl.innerHTML = 'You Win';
        document.removeEventListener('keyup', controlKey);
        setTimeout(() => clear(), 3000);
      }
    }
  }

  // check for game over

  function checkForGameOver() {
    let zeroes = 0;
    for (let i = 0; i < square.length; i++) {
      if (+squares[i].innerHTML === 0) {
        zeroes++;
      }
    }
    if (zeroes === 0) {
      resultDisplayEl.innerHTML = 'You Lose';
      document.removeEventListener('keyup', control);
      setTimeout(() => clear(), 3000);
    }
  }

  function clear() {
    clearInterval(myTimer);
  }

  function addColours() {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i].innerHTML == 0)
        squares[i].style.backgroundColor = '#FAAD80';
      else if (squares[i].innerHTML == 2)
        squares[i].style.backgroundColor = '#8D2828';
      else if (squares[i].innerHTML == 4)
        squares[i].style.backgroundColor = '#FF3F00';
      else if (squares[i].innerHTML == 8)
        squares[i].style.backgroundColor = '#50CB93';
      else if (squares[i].innerHTML == 16)
        squares[i].style.backgroundColor = '#0F044C';
      else if (squares[i].innerHTML == 32)
        squares[i].style.backgroundColor = '#D54C4C';
      else if (squares[i].innerHTML == 64)
        squares[i].style.backgroundColor = '#5D8233';
      else if (squares[i].innerHTML == 128)
        squares[i].style.backgroundColor = '#2C2E43';
      else if (squares[i].innerHTML == 256)
        squares[i].style.backgroundColor = '#FCD8D4';
      else if (squares[i].innerHTML == 512)
        squares[i].style.backgroundColor = '#F38BA0';
      else if (squares[i].innerHTML == 1024)
        squares[i].style.backgroundColor = '#B5EAEA';
      else if (squares[i].innerHTML == 2048)
        squares[i].style.backgroundColor = '#A73489';
    }
  }
  addColours();

  let myTimer = setInterval(addColours, 50);
});
