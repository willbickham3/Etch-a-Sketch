// name variable for container
const container = document.querySelector('.grid-container');

// name variable to append later
    // let newDiv = document.createElement('div');
    // newDiv.className = 'square';
    // container.appendChild(newDiv)
newDiv = "";

// Name a variable to be used for size of grid
let gridSize = prompt('What size grid do you want?');

// Function to populate grid
function createGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {
    newDiv = document.createElement('div');
    newDiv.className = 'square';
    container.appendChild(newDiv)
    }
    container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, auto)`;
}



// Naming button to add event listener
gridButton = document.querySelector('.create-grid');
gridButton.addEventListener('click', createGrid)