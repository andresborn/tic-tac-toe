const gameContainer = document.querySelector('.game-board-container');

const gameBoard = (() => {
    let board = ["","","","","","","","","",];
    
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
        gameBoard.board.splice(targetIndex, 1, symbol);
        gameBoard.displayBoard(gameBoard.board, gameContainer);
    };
    
    return { play };
}

player1 = PlayerFactory('X');
player2 = PlayerFactory('O');



const box = gameContainer.querySelector('div.box');

gameContainer.addEventListener('click', (e) => {
    const position = e.target.dataset.index;
    player1.play(position);
    console.log(e.target.dataset.index)
})

gameBoard.displayBoard(gameBoard.board, gameContainer);