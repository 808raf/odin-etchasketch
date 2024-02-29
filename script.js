let gridRow = 16;
let gridColumn = 16;

const containerDiv = document.querySelector("#container");
const rowDiv = document.querySelector(".row");

for(let i=0; i<gridRow; i++){
    const row = document.createElement("div");
    row.classList.add("row");

    for(let j=0; j<gridColumn; j++){
        const square = document.createElement("div");
        square.classList.add("square");

        row.appendChild(square);
    }
    containerDiv.appendChild(row)
}

function generateRGB() {
    let rgbArray = [0, 0, 0];
    for(i=0;i<rgbArray.length;i++){
        rgbArray[i] = generateRandomNumber()
    }
    return rgbArray
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 255)
}

console.log(generateRGB())