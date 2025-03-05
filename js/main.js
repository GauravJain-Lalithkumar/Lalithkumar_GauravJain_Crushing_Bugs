let theButtons = document.querySelectorAll('#buttonHolder img'),
    puzzleBoard = document.querySelector('.puzzle-board'),
    puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
    dropZones = document.querySelectorAll('.drop-zone'),
    draggedPiece;


function changeBGImage() {

    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

function handleStartDrag() {
    console.log('started dragging an image: ', this);

    draggedPiece = this;
}

function handleDragOver(e) {
    e.preventDefault(); 
    console.log('dragging over a drop zone');
}

function handleDrop(e) {
    e.preventDefault();
    console.log('dropped an image');
// bug fix #1 this checks if there is already a piece in the drop zone

if (this.children.length > 0) {
    alert ("Overlapped"); // alert message
    return; // stops the function
    }

    // appends the dragged element to the drop zone
    this.appendChild(draggedPiece);

    // gets the dragged element's id from the data transfer object (using 'draggedEl')
    //let droppedElId = event.dataTransfer.getData('draggedEl');

    // gets the ACTUAL dragged element, using thr ID 
    //let droppedEl = document.querySelector(`#${droppedElId}`);

    // append the dragged element to the drop zone
    //this.appendChild(droppedEl);

    //this.appendChild(document.querySelector(`#${droppedElId}`));) this the code that was originally there
}

// event listeners

theButtons.forEach(button => button.addEventListener('click', changeBGImage));


puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));


dropZones.forEach(zone => zone.addEventListener('dragover', handleDragOver));

dropZones.forEach(zone => zone.addEventListener('drop', handleDrop));