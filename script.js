
// Sketch function for gridbox
function sketch () {
const container = document.querySelector('.container');
const gridBox = document.createElement('div');
const clearBtn = document.querySelector('#clear');
const rainbowMode = document.querySelector('#random-colors');
const defaultColor = document.querySelector('#default');
const audio = document.querySelector('#mouse-click');
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
// Event listener for Clear Button
clearBtn.addEventListener('click', () => {
    clearBtn.style.transform = "scale(1.1)";
    audio.playbackRate = 1.5;
    audio.currentTime = 0;
    audio.play();
});

clearBtn.addEventListener('mouseout', () => {
    clearBtn.style.transform = "scale(1.0)";
});

clearBtn.addEventListener('mouseover', () => {
    clearBtn.style.transform = "scale(1.1)";
});
// Button listener event that clears/resets the gridbox
clearBtn.addEventListener('click', function () {
squares.forEach(square => square.style.backgroundColor = 'white');
gridBox.style.borderBottom = 'solid black';
});
// Event listener for Default Color button
defaultColor.addEventListener('click', () => {
    defaultColor.style.transform = "scale(1.1)";
    audio.playbackRate = 1.5;
    audio.currentTime = 0;
    audio.play();
});

defaultColor.addEventListener('mouseover', () => {
    defaultColor.style.transform = "scale(1.1)";
});

defaultColor.addEventListener('mouseout', () => {
    defaultColor.style.transform = "scale(1.0)";
});
// Default button event listener that chooses a black color to hover over gridbox
    defaultColor.addEventListener('click', function () {
    squares.forEach(function(square) {
    square.addEventListener('mouseover', function () {
    square.style.backgroundColor = 'black';
        });
    });
});
// Event listeners for Rainbow Mode button
rainbowMode.addEventListener('click', () => {
    rainbowMode.style.transform = "scale(1.1)";
    audio.playbackRate = 1.5;
    audio.currentTime = 0;
    audio.play();
});

rainbowMode.addEventListener('mouseover', () => {
    rainbowMode.style.transform = "scale(1.1)";
});

rainbowMode.addEventListener('mouseout', () => {
    rainbowMode.style.transform = "scale(1.0)";
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