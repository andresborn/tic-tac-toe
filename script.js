const gameContainer = document.querySelector('.game-board-container');
const headerContainer = document.querySelector('.header-container')

const gameBoard = (() => {
    let board = ["","","","","","","","",""];
    
    const displayBoard = (list = [], place) => {
        place.innerHTML = list.map((item, index) => {
        return `
        <div class="box" data-index="${index}">${item}</div>
        `
        }).join('');
    };
    
    const runTest = () => {
        const equals3 = (a, b, c) => {
            if (a !== '' && b !== '' & c !== '') {
            return a===b && b===c && a===c }
        };
        // Winning Conditions
        const check1 = equals3(board[0], board[1], board[2]); // top
        const check2 = equals3(board[0], board[4], board[8]); // diagonal LR
        const check3 = equals3(board[0], board[3], board[6]); // left
        const check4 = equals3(board[1], board[4], board[7]); // cntr topdown
        const check5 = equals3(board[2], board[5], board[8]); // right
        const check6 = equals3(board[2], board[4], board[6]); // diagonal RL
        const check7 = equals3(board[6], board[7], board[8]); // bottom
        const check8 = equals3(board[3], board[4], board[5]); // mid center

        const whoWins = () => {
        
            if (check1 || check2 || check3 || check4 || check5 || check6 || check7 || check8) {
            
                const div = document.createElement('div')
                div.textContent = `Someone Won`
                headerContainer.appendChild(div)
            };
        }
        
        return whoWins();
    }

    return { board, displayBoard, runTest };
})();

const PlayerFactory = (symbol) => {
    
    const play = (targetIndex) => {

        if (!(gameBoard.board[targetIndex] === "")) return; //can't edit if not empty
        else {
        gameBoard.board.splice(targetIndex, 1, symbol);
        gameBoard.displayBoard(gameBoard.board, gameContainer);
        gameBoard.runTest()
        };
        
    };
    
    return { play };
}

const player1 = PlayerFactory('X');
const player2 = PlayerFactory('O');

const gameFlow = (() => {
    let currentPlayer = player2;

    gameContainer.addEventListener('click', (e) => {
        currentPlayer = (currentPlayer === player1) ? player2 : player1
        const position = e.target.dataset.index;
        currentPlayer.play(position);
    })

})();

gameBoard.displayBoard(gameBoard.board, gameContainer);