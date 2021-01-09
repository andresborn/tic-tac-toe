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
    
    return { board, displayBoard };
})();

const displayController = (() => {

})();

const PlayerFactory = (symbol) => {
    const play = (targetIndex) => {
        if (!gameBoard.board[targetIndex] === "") return; //can't edit if not empty
        else {
        gameBoard.board.splice(targetIndex, 1, symbol);
        gameBoard.displayBoard(gameBoard.board, gameContainer);
        };
        console.log(gameBoard.board);
    };
    
    return { play };
}

player1 = PlayerFactory('X');
player2 = PlayerFactory('O');

gameContainer.addEventListener('click', (e) => {
    const position = e.target.dataset.index;
    player1.play(position);
    console.log(position);
    checkIfTrue()
})

gameBoard.displayBoard(gameBoard.board, gameContainer);

const checkIfTrue = () => {
    const topArr = ["X","X","X","","","","","",""]; // top
    const diagonalLRArr = ["X","","","","X","","","","X"]; // dia left right
    const leftArr = ["X","","","X","","","X","",""]; // left
    const centerTopDownArr = ["","X","","","X","","","X",""]; // center topdown
    const rightArr = ["","","X","","","X","","","X"]; // right
    const diagonalRLArr = ["","","X","","X","","X","",""]; // dia right left
    const bottom = ["","","","","","","X","X","X"]; // bottom
    const midCenter = ["","","","X","X","X","","",""];
    
    const check1 = gameBoard.board.every((item, i) => item === topArr[i]);
    const check2 = gameBoard.board.every((item, i) => item === diagonalLRArr[i]);
    const check3 = gameBoard.board.every((item, i) => item === leftArr[i]);
    const check4 = gameBoard.board.every((item, i) => item === centerTopDownArr[i]);
    const check5 = gameBoard.board.every((item, i) => item === rightArr[i]);
    const check6 = gameBoard.board.every((item, i) => item === diagonalRLArr[i]);
    const check7 = gameBoard.board.every((item, i) => item === bottom[i]);
    const check8 = gameBoard.board.every((item, i) => item === midCenter[i]);

    if (check1 || check2 || check3 || check4 || check5 || check6 || check7 || check8) console.log("X ganó")
}