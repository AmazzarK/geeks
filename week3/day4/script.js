
const grid = document.querySelector('.grid');
for (let i = 0; i < 400; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  grid.appendChild(square);
}


let currentColor = 'black';
const colorButtons = document.querySelectorAll('.color');

colorButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentColor = button.style.backgroundColor;
  });
});


let isDrawing = false;

grid.addEventListener('mousedown', () => {
  isDrawing = true;
});

grid.addEventListener('mouseup', () => {
  isDrawing = false;
});

grid.addEventListener('mouseover', (e) => {
  if (isDrawing && e.target.classList.contains('square')) {
    e.target.style.backgroundColor = currentColor;
  }
});