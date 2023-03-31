// Sketch functions to select / call
function sketch () {
let user = 0;
const container = document.querySelector('.container');

// Creating a grid div inside of my container 
function grid () {
const gridBox = document.createElement('div');
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

// Button listener event that clears/resets the gridbox

            }
        }
    }
grid();
}
// Call the sketch function
sketch ();