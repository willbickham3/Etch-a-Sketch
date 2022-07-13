// name variable for container
const container = document.querySelector('.grid-container');

// name variable to append later
let newDiv = document.createElement('div');
newDiv.className = 'square';
container.appendChild(newDiv)

// Name a variable to be used for size of grid
gridSize = prompt('How big would you like your grid?')

// Function to populate grid
function createGrid() {

}



// Naming button to add event listener
gridButton = document.querySelector('.create-grid');
gridButton.addEventListener('click', createGrid)