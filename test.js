function makeGrids(size) {
    
    let screen = document.querySelector(".sketch-screen");
    for (let i = 0; i < size; i++) {
      let column = document.createElement("div");
      column.classList.add("column");
      for (let j = 1; j <= size; j++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.style.border = "2px solid black";
        column.appendChild(row);
      }
      screen.appendChild(column);
    }

  }
  
makeGrids(16);


const tiles = document.querySelectorAll('.row');

tiles.forEach(tile => {
  tile.addEventListener('mouseenter', () => {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    tile.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

    let currentBrightness = tile.dataset.brightness || 100;
    currentBrightness = parseInt(currentBrightness) - 10;
    if (currentBrightness >= 0) {
        tile.style.filter = `brightness(${currentBrightness}%)`;
        tile.dataset.brightness = currentBrightness;
    }
  });

 
});

const button = document.querySelector("button");

function deleteGrid(){
    document
    .querySelectorAll(".column")
    .forEach((e) => e.parentNode.removeChild(e));
}


button.addEventListener("click", () => {

    const input = prompt("Enter a number for your new grid. (Example: 64 gives you a 64x64grid. Max is 100.)");
    const value = Number(input);
    if (value <= 100) {
        deleteGrid();
        makeGrids(value);
    };
    if (value > 100){
        alert("Number is too high!");
    };

})