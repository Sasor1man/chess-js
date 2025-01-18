import { Chess } from 'https://cdn.jsdelivr.net/npm/chess.js/chess.min.js';


const boardDiv = document.getElementById('board');
const game = new Chess();

function isWhitePiece(piece) { return /^w/.test(piece) }
function isBlackPiece(piece) { return /^b/.test(piece) }


const removeHighlight = () => {
    Array.from($('#board .highlight')).forEach(e => e.classList.remove('highlight'));
}

const addHints = (square, position) => {
    const $square = document.querySelector(`[data-square-coord="${square.to}"]`);
    const div = document.createElement('div');
    div.classList.add('hint');
    if (position[square.to]) {
        div.classList.add('circle');
    } else {
        div.classList.add('dot');
    }
    $square.appendChild(div);
}

const removeHints = () => {
    Array.from($('#board .hint')).forEach(e => e.remove());
}

const onDragStart = (dragStartEvt) => {
    console.log(dragStartEvt)
    if (game.game_over()) return false;

    if (game.turn() === 'w' && !isWhitePiece(dragStartEvt.piece)) return false
    if (game.turn() === 'b' && !isBlackPiece(dragStartEvt.piece)) return false

    const legalMoves = game.moves({
        square: dragStartEvt.square,
        verbose: true
    })
    if (legalMoves.length === 0) return;

    legalMoves.forEach((move) => {
        addHints(move, dragStartEvt.position)
    })
}


const onDrop = (dropEvt) => {
    removeHints();
    const move = game.move({
        from: dropEvt.source,
        to: dropEvt.target,
        promotion: 'q' // TODO: make piece choice
    });
    if (move === null) return 'snapback';
    removeHighlight();
    $(`#board [data-square-coord="${dropEvt.source}"]`).addClass('highlight');
    $(`#board [data-square-coord="${dropEvt.target}"]`).addClass('highlight');
    if (move) {
        board.fen(game.fen(), () => {
            // updateStatus()
        })
    } else {
        return 'snapback'
    }
}

const onMoveEnd = () => {
}

const onSnapbackEnd = () => {
    removeHints()
}

const pieceTheme = (piece) => {
    return `pieces/oi1/${piece}.png`
}


const config = {
    pieceTheme: `pieces/oi1/{piece}.png`,
    draggable: true,
    position: 'start',
    onDragStart,
    onDrop,
    onMoveEnd,
    onSnapbackEnd
}
const board = Chessboard2(boardDiv, config);


// const gameBoard = document.querySelector('div.chessboard-63f37');
// gameBoard.addEventListener('contextmenu', e => {
//     e.preventDefault();
//     console.log(e)
//     const target = e.target.closest('div.square-55d63');
//     if (target) {

//     }
// })