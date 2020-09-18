// Select color input

// Select size input
let color = "#000000";
let sizeHeight = 1;
let sizeWidth = 1;

// When size is submitted by the user, call makeGrid()
// ! make event listener for submit
document
  .getElementsByTagName("form")[0]
  .addEventListener("submit", (elm, ev) => {
    elm.preventDefault();
    makeGrid();
  });

// ! make event listener for color Change
const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("input", (elm, ev) => (color = elm.target.value));
colorPicker.addEventListener("change", (elm, ev) => (color = elm.target.value));

// ! make event listener for Size Change
const inputHeight = document.getElementById("inputHeight");
inputHeight.addEventListener(
  "input",
  (elm, ev) => (sizeHeight = elm.target.value)
);
const inputWidth = document.getElementById("inputWidth");
inputWidth.addEventListener(
  "input",
  (elm, ev) => (sizeWidth = elm.target.value)
);

// ! pixelCanvas Table
const pixelCanvas = document.getElementById("pixelCanvas");
pixelCanvas.addEventListener("click", (elm, ev) => {
  elm.target.style.backgroundColor = color;
});

// Dome loaded
document.addEventListener("DOMContentLoaded", (elm) => {
  console.log(inputHeight);
  sizeWidth = inputWidth.value;
  sizeHeight = inputHeight.value;
  color = colorPicker.value;
});
function makeGrid() {
  // Your code goes here!
  pixelCanvas.innerHTML = "";
  for (let i = 0; i < sizeHeight; i++) {
    let newRow = document.createElement("tr");
    pixelCanvas.appendChild(newRow);
    for (let y = 0; y < sizeWidth; y++)
      newRow.appendChild(document.createElement("td"));
  }
}
