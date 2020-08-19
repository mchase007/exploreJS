//Access element controls.
let colorCode = document.querySelector(".colorCode");
let button = document.querySelector("input");
let jsBackground = document.querySelector(".js");

button.addEventListener("click", function () {
  changeBackgroundColor();
})

let arrayBox = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function randGen() {
  return Math.floor(Math.random() * arrayBox.length);
}

function getHex() {
  let hexCode = "";
  for (let i = 0; i < 6; i++) {
    hexCode += arrayBox[randGen()];
  }
  return `#${hexCode}`;
}

function changeBackgroundColor() {

  let hexCode = getHex();
  colorCode.textContent = hexCode;

  jsBackground.style.backgroundColor = hexCode;

  
  // console.log(beforeColor);
}

