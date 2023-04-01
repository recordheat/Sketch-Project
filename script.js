
// Sketch functions to select / call
function sketch () {
const container = document.querySelector('.container');
const gridBox = document.createElement('div');
const clearBtn = document.querySelector('#clear');
const rainbowMode = document.querySelector('#random-colors');

gridBox.setAttribute('id','gridBox');
container.appendChild(gridBox);

// Creates 16x16 grid squares as requested from the project
    for (let i = 0; i < 16; i++) {
const row = document.createElement('div');
row.classList.add('row');
gridBox.appendChild(row);
    for (let j = 0; j < 16; j++) {
const square = document.createElement('div');
square.classList.add('square');

// Creates a hover effect for gridbox 
row.appendChild(square);
square.addEventListener('mouseover', function() {
    square.style.backgroundColor = 'black';
    });

const squares = document.querySelectorAll('.square');

// Button listener event that clears/resets the gridbox
clearBtn.addEventListener('click', function () {
squares.forEach(square => square.style.backgroundColor = 'lightsalmon');
});
// Selects a button to select different colors to cover the grid
rainbowMode.addEventListener('click', function () {
squares.forEach(function(square) {
    square.addEventListener('mouseover', function() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
});
});

         }
     }
}
// Call the sketch function
sketch ();