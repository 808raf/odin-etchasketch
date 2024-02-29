let gridRow = 16;
let gridColumn = 16;

const containerDiv = document.querySelector("#container");

for(let i=0; i<gridRow; i++){
    const row = document.createElement("div");
    row.classList.add("row");

    for(let j=0; j<gridColumn; j++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.classList.add("grow");

        row.appendChild(square);
    }
    containerDiv.appendChild(row);
}

function generateRGB() {
    let rgbArray = [0, 0, 0];

    rgbArray.forEach((_,idx) => {
        rgbArray[idx] = generateRandomNumber();
    })
    return rgbArray;
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 255);
}

function parseNumber(arr) {
    return arr.toString()
}

const gridSquare = document.querySelectorAll(".square");

gridSquare.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = `rgb(${parseNumber(generateRGB())})`
    })
})

const gridSizeBtn = document.querySelector(".change-grid-size")
gridSizeBtn.addEventListener("click", () => {
    let gridSize = 0;
    gridSize = prompt("Please enter a new grid size from 1-100.");
    createNewGrid(gridSize, gridSize);
})

function clearGrid(){
    containerDiv.replaceChildren();
}

function createNewGrid(newRow, newColumn){
    clearGrid();

    for(let i=0; i<newRow; i++){
        const row = document.createElement("div");
        row.classList.add("row");
    
        for(let j=0; j<newColumn; j++){
            const square = document.createElement("div");
            square.classList.add("square");
            square.classList.add("grow");
    
            row.appendChild(square);
        }
        containerDiv.appendChild(row);
    }

    const gridSquare = document.querySelectorAll(".square");

    gridSquare.forEach((square) => {
        square.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = `rgb(${parseNumber(generateRGB())})`
        })
    })
}