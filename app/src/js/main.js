// Access element controls.
const colorCode = document.querySelector('.colorCode');
const button = document.querySelector('input');
const jsBackground = document.querySelector('.js');

// array for random code generation.
const arrayBox = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// generates random number for array index.
function randGen() {
  return Math.floor(Math.random() * arrayBox.length);
}

// runs loop to generate hexcode form array.
function getHex() {
  let hexCode = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 6; i++) {
    hexCode += arrayBox[randGen()];
  }
  return `#${hexCode}`;
}

// displays hexcode
// and changes element background color to hexcode
function changeBackgroundColor() {
  const hexCode = getHex();
  colorCode.textContent = hexCode;

  jsBackground.style.backgroundColor = hexCode;
}

button.addEventListener('click', () => {
  changeBackgroundColor();
});
