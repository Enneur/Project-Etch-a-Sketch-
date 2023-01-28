let number = 0;
const grid = document.createElement("div");
grid.className = "grid";
let count = 0;


function sketch(pixels) {
    grid.innerHTML = "";
    const squareSize = 960 / pixels;
    for (let i = 1; i <= pixels; i++) {
        const column = document.createElement("div");
        column.className = "column";
        for (let j = 1; j <= pixels; j++) {
            const row = document.createElement("div")
            row.className = "row";
            row.style.width = squareSize + "px";
            row.style.height = squareSize + "px";
            row.innerHTML = "";
            column.appendChild(row);
        }
        grid.appendChild(column);
    }
    document.body.appendChild(grid);
}

function generateRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}
function blackInTenHovers(color) {
        let updatedColor = color.replace(/\d+/g, function (match) {
            return match - match / 10;
        });
        return updatedColor;
}

let btn = document.querySelector(".btn");
btn.addEventListener('click', () => {
    let input = prompt("Enter the number of squares:", number);
    if (!isNaN(input) && input > 0 && input <= 100) {
        sketch(input);
        const draw = document.querySelectorAll(".row");
        draw.forEach(pixel => {
            pixel.dataset.generateRandomColor = generateRandomColor();
            pixel.addEventListener('mouseover', () => {
                pixel.style.backgroundColor = blackInTenHovers(pixel.dataset.generateRandomColor);
                console.log(pixel.dataset.generateRandomColor)
            })

        });
    } else {
        alert("Enter a Number between 1 and 100.")
    }
});
