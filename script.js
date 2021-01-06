const gameBoard = (() => {
    let board = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X',];
    return { board };
})();

const displayController = (() => {
})();

const Player = (symbol) => {
    return { symbol };
}

player1 = Player('X');
player2 = Player('O');

const gameContainer = document.querySelector('.game-board-container');

gameBoard.board.map((item, index) => {
    const div = document.createElement('div');
    div.setAttribute('class', 'box');
    div.setAttribute('data-attribute', `${index}`);
    div.textContent = item;
    gameContainer.appendChild(div);

})