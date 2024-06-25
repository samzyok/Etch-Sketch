const main = document.querySelector('.container');
const whiteBtn = document.querySelector('#white-btn');
const gridSize = document.querySelector('input');
let gridRow = [];
let box = [];
let whiteToggle = false;
let drawToggle = false;
let boxSize = 8;


//Functions to create and remove the grid

const createGrid = (gridLen) => {
    for(let i=0; i<gridLen; ++i){
        gridRow[i] = document.createElement('div');
        gridRow[i].classList.add('gridrow')
        for(let j=0; j<gridLen; ++j){
            box[j] = document.createElement('div');
            box[j].classList.add('box');
            gridRow[i].appendChild(box[j]);
        }
        main.append(gridRow[i]);
    }

    boxes = document.querySelectorAll('.box');

    boxes.forEach((gridBox) => {
        gridBox.addEventListener('mouseover', () => {
            if(whiteToggle){
                gridBox.style.backgroundColor = 'white';
            }
            else{
                gridBox.style.backgroundColor = 'black';
            }
        })
    })
    
}

const reset = () => {
    var child = main.lastElementChild;
    while(child){
        main.removeChild(child);
        child = main.lastElementChild;
    }
}

var boxes = null;
createGrid(boxSize);

//Base Functionality Event listeners

whiteBtn.addEventListener('click',() => {
    whiteToggle = !whiteToggle;
    if(whiteToggle){
        whiteBtn.style.backgroundColor = '#808080';
    }
    else{
        whiteBtn.style.backgroundColor = 'white';
    }
})

gridSize.addEventListener('input', (e) => {
    boxSize = e.target.value;
    reset();
    createGrid(boxSize);
})