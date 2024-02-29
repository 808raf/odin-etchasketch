let gridRow = 16;
let gridColumn = 16;

const containerDiv = document.querySelector("#container");
const rowDiv = document.querySelector(".row");

for(let i=0; i<gridColumn; i++){
    const row = document.createElement("div");
    row.classList.add("row");

    for(let j=0; j<gridRow; j++){
        const square = document.createElement("div");
        square.classList.add("square");

        row.appendChild(square);
    }
    containerDiv.appendChild(row)
}

// const square = document.createElement("div")
// square.classList.add("square")

// const row = document.createElement("div")
// row.classList.add("row")


// container.appendChild(square)