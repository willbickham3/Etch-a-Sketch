// name variable for container
const container = document.querySelector('.grid-container');
const myBtns = document.querySelectorAll('button');

// name variable to append later
    // let newDiv = document.createElement('div');
    // newDiv.className = 'square';
    // container.appendChild(newDiv)
newDiv = "";
let color = 'black';
// Name a variable to be used for size of grid
const pixels = document.querySelector('#pixels');
const gridButton = document.querySelector('.create-grid');
gridButton.addEventListener('click', createGrid);


// Function to populate grid
function createGrid() {
    gridSize = pixels.value;
    let oldSquares = document.querySelectorAll('.square');
    oldSquares.forEach((div) => div.remove());
    for (let i = 0; i < gridSize * gridSize; i++) {
    newDiv = document.createElement('div');
    newDiv.className = 'square';
    container.appendChild(newDiv)
    }
    container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, auto)`;
    let gridSquares = document.querySelectorAll('div');
    gridSquares.addEventListener('mouseover', colorGrid);
}

function colorGrid() {
    switch (color) {

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

myBtns.forEach(colorButton => colorButton.addEventListener('click', changeColor))
// Naming button to add event listener
//gridButton = document.querySelector('.create-grid');
//gridButton.addEventListener('click', createGrid)