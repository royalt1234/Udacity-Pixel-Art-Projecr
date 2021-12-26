// Select color input
const color = document.getElementById('colorPicker');
const sizePicker = document.getElementById('sizePicker');
const table = document.getElementById('pixelCanvas');

// The heigh and width input
var width = document.getElementById('inputWidth').value;
var height = document.getElementById('inputHeight').value;

// this comment below was my initial default grid, just 1 box. But i decided to make my default grid 10 x 10 (_N_ x _M_)
// makeGrid(height, width)

// this is where i handled the submit button
sizePicker.addEventListener('click', (e) => {
    e.preventDefault();
    width = document.getElementById('inputWidth').value;
    height = document.getElementById('inputHeight').value;
    table.firstElementChild.remove();
    makeGrid(height, width)
});

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
    // this is the make grid loop
    for(var x = 0; x < height; x++){
        let row = table.insertRow(x);
        for(var y = 0; y < width; y++){
            let cell = row.insertCell(y);
            //this is how i add colors to the individual box
            cell.addEventListener('click', (e) => {
                cell.style.background = color.value;
            });
        }
    }
}


// my new default grid as explained above. i wanted users to have a feel before they input their desired grid number
makeGrid(10, 10);
