const board = document.getElementById('board');
const squares = Array.from(document.getElementsByClassName('square'));

let active;

const dragStart = e => {
    console.log(e);
    // target.removeEventListener('dragstart', dragStart)
    active.classList.add("dragging");
}

board.addEventListener('mousedown', e => {
    // console.log(e)
    const target = e.target.closest('div.draggble');
    if (target) {

        const parent = target.parentElement;
        active = target;
        parent.innerHtml = '';
        active.addEventListener('dragstart', dragStart);
    }
})

squares.forEach(element => {
    element.addEventListener('dragover', e => {
        e.preventDefault();
        console.log('here')
    })

    element.addEventListener('drop', (event) => {
        event.preventDefault();
        console.log(event)
        const dropzone = event.target;
        active.removeEventListener('dragstart', dragStart)
        dropzone.appendChild(active)
        active.classList.remove('dragging');
    })
});