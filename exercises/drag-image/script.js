const fillContainer = document.querySelector('.fill');
const emptyContainers = document.querySelectorAll('.empty');

fillContainer.addEventListener('dragstart', dragStart);
fillContainer.addEventListener('dragend', dragEnd);

for (let i = 0; i < emptyContainers.length; i++) {
  emptyContainers[i].addEventListener('dragover', dragOver);
  emptyContainers[i].addEventListener('dragenter', dragEnter);
  emptyContainers[i].addEventListener('dragleave', dragLeave);
  emptyContainers[i].addEventListener('drop', dragDrop);
}

function dragStart() {
  const fillContainerContext = this;
  this.classList.add('hold');
  setTimeout(
    function () {
      this.className = 'invisible';
    }.bind(fillContainerContext),
    0
  );
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className = this.className + ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(fillContainer);
}
