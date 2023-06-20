// name variable for container
const container = document.querySelector('.grid-container');
const myBtns = document.querySelectorAll('button');
document.getElementById("pixels").defaultValue = '16';
let resetButton = document.querySelector('.reset-button');

// name variable to append later
    // let newDiv = document.createElement('div');
    // newDiv.className = 'square';
    // container.appendChild(newDiv)

let color = 'black';

// Name a variable to be used for size of grid
const pixels = document.querySelector('#pixels');
const gridButton = document.querySelector('.create-grid');


// Function to populate grid
function createGrid(gridSize) {
    gridSize = pixels.value;
    let oldSquares = document.querySelectorAll('.square');
    oldSquares.forEach((div) => div.remove());
    for (let i = 0; i < gridSize * gridSize; i++) {
    let newDiv = document.createElement('div');
    newDiv.className = 'square';
    container.appendChild(newDiv)
    }
    container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, auto)`;
    let gridSquares = document.querySelectorAll('.square');
    gridSquares.forEach(gridSquare => gridSquare.addEventListener('mouseover', colorGrid));
}

function colorGrid() {
    switch (color) {
        case 'black':
            this.style.backgroundColor = '#000000';
            break
        case 'white':
            this.style.backgroundColor = '#ffffff';
            break
        case 'random':
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

    }
     
}

function changeColor (event) {
    switch (event.target.dataset.color) {
        case 'black':
            color = 'black';
            break
        case 'white':
            color = 'white';
            break
        case 'random':
            color = 'random';
            break
        case 'reset':
            color = 'reset';
            break
    }
}

function resetGrid() {
    let gridSquares = document.querySelectorAll('.square');
    gridSquares.forEach(gridSquare => gridSquare.style.backgroundColor = '#ffffff');
}

// Create Default Grid for when page is loaded
createGrid(16);



gridButton.addEventListener('click', createGrid);
myBtns.forEach(colorButton => colorButton.addEventListener('click', changeColor))
resetButton.addEventListener('click', resetGrid)