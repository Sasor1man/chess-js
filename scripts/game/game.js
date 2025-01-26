import { Chess } from 'https://cdn.jsdelivr.net/npm/chess.js/chess.min.js';
export function game() {

    const mode = window.location.hash.slice(1);

    const boardDiv = document.getElementById('board');
    const game = new Chess();
    const moveList = document.getElementById('moves');
    const status = document.getElementById('status');
    const resignBtn = document.getElementById('resign');
    const whiteOrietation = document.querySelector('[aria-label="Move Back"]');
    const blackOrietation = document.querySelector('[aria-label="Move Forward"]');
    const playerDiv = document.getElementsByClassName('board-layout-player');
    const mainButton = document.getElementById('mainButton');
    const spinnerDiv = document.getElementById('spinner');
    const burger = document.getElementById('burger');

    let isDraggin;
    let rightMouse;
    let rightMouseStart;

    let currentSquare;

    let myColor;
    let socket;


    let clientId = localStorage.getItem('clientId');
    if (!clientId) {
        clientId = crypto.randomUUID();
        localStorage.setItem('clientId', clientId);
    }

    if (mode === 'offline') spinnerDiv.style.display = 'none'

    function isWhitePiece(piece) { return !(/^b/.test(piece)) }
    function isBlackPiece(piece) { return !(/^w/.test(piece)) }

    const isMobile = async () => {
        let result = false;
        try {
            const data = await navigator.userAgentData.getHighEntropyValues(['platform', 'model', 'mobile']);
            if (data.mobile) {
                result = true;
            }
        } catch (e) {
            console.error('Error checking mobile device:', e);
        }
        return result;
    };

    const addMove = () => {
        const move = game.pgn()
        const moveArr = move.split(' ')
        const result = moveArr.map(item => `<div>${item}</div>`).join('');
        moveList.innerHTML = result
    }



    const updateStatus = () => {
        let statusHTML = ''
        const whosTurn = game.turn() === 'w' ? 'White' : 'Black';

        if (!game.game_over()) {
            if (game.in_check()) statusHTML = whosTurn + ' is in check! '
            statusHTML = statusHTML + whosTurn + ' to move.'
        } else if (game.in_checkmate() && game.turn() === 'w') {
            statusHTML = 'Game over: white is in checkmate. Black wins!'
        } else if (game.in_checkmate() && game.turn() === 'b') {
            statusHTML = 'Game over: black is in checkmate. White wins!'
        } else if (game.in_stalemate() && game.turn() === 'w') {
            statusHTML = 'Game is drawn. White is stalemated.'
        } else if (game.in_stalemate() && game.turn() === 'b') {
            statusHTML = 'Game is drawn. Black is stalemated.'
        } else if (game.in_threefold_repetition()) {
            statusHTML = 'Game is drawn by threefold repetition rule.'
        } else if (game.insufficient_material()) {
            statusHTML = 'Game is drawn by insufficient material.'
        } else if (game.in_draw()) {
            statusHTML = 'Game is drawn by fifty-move rule.'
        }

        if (game.game_over() && mode === 'online') {
            localStorage.clear()
            if (!status.innerHTML.includes('resign')) statusHTML = 'Opponent resigned'
        }


        status.innerHTML = statusHTML;
        addMove()

    }

    const canMove = (square) => {
        const $square = document.querySelector(`[data-square-coord="${square}"]`);
        return $square.children[0]?.classList.contains('hint')
    }

    const makeMove = (from, to) => {
        const move = game.move({
            from: from,
            to: to,
            promotion: 'q' // TODO: make piece choice
        });
        if (move === null) return 'snapback';
        removeHighlight();
        $(`#board [data-square-coord="${from}"]`).addClass('highlight');
        $(`#board [data-square-coord="${to}"]`).addClass('highlight');
        if (move) {
            board.fen(game.fen(), () => {
                updateStatus()
            })
        } else {
            return 'snapback'
        }
        isDraggin = false;
        if (mode === 'offline') {
            board.flip();
            Array.from(playerDiv).forEach(e => {
                e.classList.toggle('move')
            });
        }
        removeHints();
        showPiece();
        if (mode === 'online') {
            let output = {
                'type': 'move',
                'from': from,
                'to': to,
                'current': game.fen(),
                'pgn': game.pgn()
            }
            socket.send(JSON.stringify(output))
            localStorage.setItem('currentPosition', output.current);
        }
    }

    const removeLmc = () => Array.from($('#board .lmc')).forEach(e => e.classList.remove('lmc'));

    const showPiece = () => Array.from($('#board .hide-piece')).forEach(e => e.classList.remove('hide-piece'));

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

    const onDrop = (dropEvt) => {
        showPiece();

        if (isDraggin) {
            makeMove(dropEvt.source, dropEvt.target)
        }
        return 'snapback'

    }

    const onMoveEnd = () => {
    }

    const onSnapbackEnd = () => {
        removeHints()
    }

    const rightClick = (evt, domEvt) => {
        isDraggin = false;

        const hideDragging = () => document.querySelector('.dragging-4a6c1')?.classList.add('hide-draggin');
        setTimeout(hideDragging, 1)

        rightMouse = true;
        rightMouseStart = evt.square
    }

    const offlineCheck = (evt) => {
        if (game.turn() === 'w' && !isWhitePiece(evt.piece)) return false
        if (game.turn() === 'b' && !isBlackPiece(evt.piece)) return false
        return true
    }

    const onlineCheck = () => {
        return (game.turn() === myColor)
    }

    const validateMove = (evt) => {
        if (game.game_over()) return false;

        switch (mode) {
            case 'offline':
                return offlineCheck(evt);
            case 'online':
                return onlineCheck();
            default:
                console.error(`Неизвестный режим: ${mode}`);
                return false;
        }
    }

    const leftClick = (evt) => {
        removeLmc();
        board.clearArrows();
        document.querySelector(`[data-square-coord="${evt.square}"]`).classList.add('hide-piece');

        if (game.game_over()) return false;

        if (!validateMove(evt)) return;

        isDraggin = true;
        if (evt.piece) {
            currentSquare = evt.square;
        }
        const legalMoves = game.moves({
            square: evt.square,
            verbose: true
        })
        // if (legalMoves.length === 0) return;

        if ((evt.piece == null) && canMove(evt.square)) {
            makeMove(currentSquare, evt.square)
        }
        removeHints()

        legalMoves.forEach((move) => {
            addHints(move, evt.position)
        })

    }

    const onDragStart = (dragStartEvt) => {
        if (isMobile()) {
            isMobile().then(result => {
                leftClick(dragStartEvt)
            });
        }
    }

    const onMousedownSquare = (evt, domEvt) => {
        if (domEvt.button === 2) {
            return rightClick(evt, domEvt)
        }
        return leftClick(evt, domEvt)
    }

    const onMouseupSquare = (evt, domEvt) => {
        if (rightMouse && rightMouseStart) {
            if (evt.square === rightMouseStart) {
                const current = document.querySelector(`[data-square-coord= "${evt.square}"]`);
                current.classList.contains('lmc') ? current.classList.remove('lmc') : current.classList.add('lmc');
                rightMouseStart = null;
            }
            else {
                board.addArrow({
                    start: rightMouseStart,
                    end: evt.square
                })
                rightMouseStart = null;
            }
        }
    }

    const onMouseenterSquare = (evt, domEvt) => {
        // console.log(1)
        if (isDraggin) {
            // document.querySelector(`[data-square-coord= "${evt.square}"]`).classList.add('highlight1')
            // document.querySelector(`[data-square-сoord= "${evt.fromSquare}"]`)?.classList.remove('highlight1')
            console.log(2)
        }
    }

    const config = {
        pieceTheme: `pieces / oi1 / { piece }.png`,
        draggable: true,
        position: 'start',
        onDrop,
        onMoveEnd,
        onSnapbackEnd,
        onMousedownSquare,
        onMouseupSquare,
        // onMouseenterSquare,
        onDragStart,
    }


    if (mode === 'online') {
        socket = new WebSocket('ws://localhost:8080');

        socket.onopen = () => {
            console.log('Connected');
            socket.send(JSON.stringify({ type: 'reconnect', clientId }));
        };

        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            console.log('message', message);

            switch (message.type) {
                case 'game_move':
                    console.log(message);
                    const move = message.data;
                    localStorage.setItem('currentPosition', move.current);
                    makeMove(move.from, move.to);
                    updateStatus();
                    break;
                case 'reassign':
                    myColor = localStorage.getItem('color')
                    const position = localStorage.getItem('currentPosition');
                    if (myColor === 'b') board.flip()
                    if (position) board.fen(position);
                    if (position) game.load(position);
                    updateStatus();
                    console.log('message.role', message.role);
                    break;
                case "game_start":
                    game.reset();
                    board.position = 'start';
                    board.start();
                    removeHighlight();
                    localStorage.removeItem('currentPosition');
                    myColor = message.color;
                    localStorage.setItem('color', myColor);
                    if (message.color === 'b') board.flip();
                    spinnerDiv.style.display = 'none'
                    break;
                case 'resign':
                    game.game_over = () => true;
                    updateStatus();
                    break;

            }

        }

        socket.onclose = () => {
            console.log('Соединение закрыто');
            localStorage.clear()
        };

    }

    const board = Chessboard2(boardDiv, config);


    whiteOrietation.addEventListener('click', () => {
        if (mode !== 'online') {
            board.orientation('white');
            Array.from(playerDiv).forEach(e => {
                if (e.classList.contains('move')) e.classList.remove('move')
            })
        }
    });
    blackOrietation.addEventListener('click', () => {
        if (mode !== 'online') {
            board.orientation('black');
            Array.from(playerDiv).forEach(e => {
                if (!e.classList.contains('move')) e.classList.add('move')
            })
        }

    });

    boardDiv.addEventListener('contextmenu', e => {
        e.preventDefault();
    })

    mainButton.addEventListener('click', e => {
        e.preventDefault()
        window.location.hash = 'main';

    })

    resignBtn.addEventListener('click', e => {
        game.game_over = () => true;
        game.in_checkmate = () => true;
        if (mode === 'online') {
            let output = {
                'type': 'resign',
                'current': game.fen(),
                'pgn': game.pgn()
            }
            socket.send(JSON.stringify(output));
        }
        updateStatus()
        const currentColor = myColor === 'w' ? 'White' : 'Black'
        status.innerHTML = `${currentColor} resigned`
    })

    burger.addEventListener('click', () => {
        const nav = document.querySelector('.board-layout-nav');
        if (nav) nav.classList.add('nav-back');
    });

    window.addEventListener('click', (e) => {
        const nav = document.querySelector('.board-layout-nav');
        const burger = document.querySelector('#burger');

        if (!nav || !nav.classList.contains('nav-back')) return;

        const path = e.composedPath();
        console.log(path);

        const isInsideNav = path.some(el => el === nav || el === burger);

        if (!isInsideNav) {
            nav.classList.remove('nav-back');
        }
    });

    const adjustElementStyle = () => {
        const element = document.querySelector('[id^="container-"]');
        if (window.innerWidth < 1150) {
            element.style.alignSelf = 'center';
        }
    };

    // Слушаем изменение размера экрана
    window.addEventListener('resize', adjustElementStyle);
}
