const fillContainer = document.querySelector(".fill");
const emptyContainers = document.querySelectorAll(".empty");

fillContainer.addEventListener("dragstart", dragStart);
fillContainer.addEventListener("dragend", dragEnd);

for (let i = 0; i < emptyContainers.length; i++) {
  emptyContainers[i].addEventListener("dragover", dragOver);
  emptyContainers[i].addEventListener("dragenter", dragEnter);
  emptyContainers[i].addEventListener("dragleave", dragLeave);
  emptyContainers[i].addEventListener("drop", dragDrop);
}

function dragStart() {
  console.log("DRAG started");
  console.log(this);
  const fillContainerContext = this;
  this.classList.add("hold");
  setTimeout(
    function () {
      this.className = "invisible";
    }.bind(fillContainerContext),
    0
  );
}

function dragEnd() {
  console.log("Drag ended");
  this.className = "fill";
}

function dragOver(e) {
  console.log("drag over");
  e.preventDefault();
}

function dragEnter(e) {
  console.log("drag enter");
  e.preventDefault();
  this.className = this.className + " hovered";
}

function dragLeave() {
  console.log("drag leave");
  this.className = "empty";
}

function dragDrop() {
  console.log("drag drop");
  this.className = "empty";
  this.append(fillContainer);
}
