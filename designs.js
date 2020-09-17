// Select color input
// Select size input
let color = null;
let sizeHeight = null;
let sizeWidth = null;

// When size is submitted by the user, call makeGrid()
// ! make event listener for submit
document
  .getElementsByTagName("form")[0]
  .addEventListener("submit", (elm, ev) => {
    elm.preventDefault();
  });
// ! make event listener for color Change
document
  .getElementById("colorPicker")
  .addEventListener("input", function (elm, ev) {
    color = elm.target.value;
    console.log(color);
  });
// ! make event listener for Size Change
document
  .getElementById("inputHeight")
  .addEventListener("input", function (elm, ev) {
    sizeHeight = elm.target.value;
    console.log(sizeHeight);
  });
document
  .getElementById("inputWidth")
  .addEventListener("input", function (elm, ev) {
    sizeWidth = elm.target.value;
    console.log(sizeWidth);
  });

// ! pixelCanvas Table
const pixelCanvas = document.getElementById("inputHeight");

function makeGrid() {
  // Your code goes here!
  //
}
