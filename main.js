const king = document.querySelector(".chessPiece");
const squares = document.querySelectorAll(".square");
const infoDisplay = document.querySelector("#info");

king.addEventListener("drag", dragging);
king.addEventListener("dragstart", dragStart);

let beingDargged;

squares.forEach((square) => {
  square.addEventListener("dragover", dragOver);
  square.addEventListener("dragenter", dragEnter);
  square.addEventListener("drop", dragDrop);
  square.addEventListener("dragleave", dragLeave);
  square.addEventListener("dragend", dragEnd);
});

function dragOver(e) {
  e.preventDefault();
  console.log(`you are dragging over something ${e.target.classList}`);
}

function dragEnter(e) {
  e.target.classList.add("highlight");
  console.log(`you are entering the space of ${e.target.classList}`);
}

function dragDrop(e) {
  e.target.classList.remove("highlight");
  e.target.append(beingDargged);
  console.log(`you are dropping into  ${e.target.classList}`);
}

function dragLeave(e) {
  e.target.classList.remove("highlight");
  console.log(`you are leaving into  ${e.target.classList}`);
}

function dragEnd(e) {
  e.target.classList.add("target");
  setTimeout(() => {
    e.target.classList.remove("target");
  }, 100);
  infoDisplay.innerHTML = "";
  console.log(`The drag End on ${e.target.classList}`);
}

function dragStart(e) {
  beingDargged = e.target;
  console.log({ beingDargged });
  infoDisplay.textContent = beingDargged.id + " is dragging";
}

function dragging(e) {}
