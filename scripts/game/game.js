const boardDiv = document.getElementById('board');
const board = Chessboard(boardDiv, 'start')
const squares = Array.from(document.getElementsByClassName('square'));

const removeHighlight = () => squares.forEach(elem => elem.classList.remove('highlight'));

const isEmpty = square => square.children.length === 0;

const isSameColour = (element1, element2) => pieceColour(element1) === pieceColour(element2);

