const container = document.querySelector('#container');


function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const square = document.createElement('div');

        
        square.setAttribute('class', 'square');
        let side = Math.sqrt(size);
        let squareWidth = 650 / side ;
        console.log(squareWidth);
        square.style.width = squareWidth + "px";
        square.style.height = squareWidth + "px" ;
        container.appendChild(square);
        if (i == (size - 1)) {
            setHover();
        }
        
    }
    removeErrorMsg();

}
function setHover() {
    let squares = Array.from(document.getElementsByClassName('square'));
    console.log(squares);
    let flag = false;
    window.onmouseup = () => {
        flag = false;
    }
    squares.forEach(square => {
        square.onmouseover = () => {
            let color = randomColor();
            if (flag == true) {
                square.style.backgroundColor = color;
            }
            square.onmousedown = () => {
                square.style.backgroundColor= color;
                flag = true;
            }
        }
    })
}
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}
function resetGrid() {
    let square = document.querySelectorAll(".square");
    for (let i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = "#FFFFFF";
    }
    removeErrorMsg();
}
function removeErrorMsg() {
    const element = document.querySelector('.error');
    element.remove();
}
function callPrompt() {
    const grid = document.querySelector("#container");
    grid.replaceChildren();
    let gridSize = prompt("Select a Grid Width/Height");
    if (gridSize <= 100) {
        gridSize = gridSize * gridSize;
        createGrid(gridSize);
    }else {
        let error = document.createElement('div');
        error.setAttribute('class', 'error');
        error.textContent = "Grid Size is too big must be between 1-64";
        const buttonContainer = document.querySelector('.button-container');
        buttonContainer.appendChild(error);
    };
}