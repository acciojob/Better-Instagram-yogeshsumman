//your code here
// Select all image divs
const images = document.querySelectorAll('.image');

// Add drag event listeners to each image div
images.forEach(image => {
  image.addEventListener('dragstart', dragStart);
  image.addEventListener('dragover', dragOver);
  image.addEventListener('dragenter', dragEnter);
  image.addEventListener('dragleave', dragLeave);
  image.addEventListener('drop', drop);
  image.addEventListener('dragend', dragEnd);
});

let dragSource = null;

function dragStart(e) {
  dragSource = this;
  this.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
  // Log for debugging
  console.log('Dragging started:', this.id);
}

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('over');
}

function dragLeave() {
  this.classList.remove('over');
}

function drop(e) {
  e.preventDefault();
  if (dragSource !== this) {
    // Swap background images
    const tempStyle = dragSource.style.backgroundImage;
    dragSource.style.backgroundImage = this.style.backgroundImage;
    this.style.backgroundImage = tempStyle;
    // Log for debugging
    console.log('Swapped:', dragSource.id, 'with', this.id);
  }
  this.classList.remove('over');
}

function dragEnd() {
  this.classList.remove('dragging');
  images.forEach(img => img.classList.remove('over'));
  // Log for debugging
  console.log('Drag ended');
}