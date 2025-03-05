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

    this.appendChild(draggedPiece);
}

// event listeners

theButtons.forEach(button => button.addEventListener('click', changeBGImage));


puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));


dropZones.forEach(zone => zone.addEventListener('dragover', handleDragOver));

dropZones.forEach(zone => zone.addEventListener('drop', handleDrop));