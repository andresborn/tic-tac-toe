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
            if ((a === '') || (b === '') || (c === ''))
            {console.log("nothing")}
            else {
            const same = (a===b && b===c && a===c);
            return same;
        };
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
        
            let test = (check1 || check2 || check3 || check4 || check5 || check6 || check7 || check8)
            
            switch (test) {
                case check1:
                    console.log(`check1`)
                    break;
            
                case check2:
                    console.log(`check2`)
                    break;
            
                case check3:
                    console.log(`check3`)
                    break;
            
                case check4:
                    console.log(`check4`)
                    break;
            
                case check5:
                    console.log(`check5`)
                    break;
            
                case check6:
                    console.log(`check6`)
                    break;
            
                case check7:
                    console.log(`check7`)
                    break;
                
                case check8:
                    console.log(`check8`)
                    break;     
                default:
                    console.log(`Keep playing`)
                    break;
            }
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

// To congratulate winning player, use a counter for turns.
// If turn 0,2,4,6,8 triggers .play, player1(X) wins.
// If turn 1,3,5,7,9 triggers .play, player2(O) wins.



// const div = document.createElement('div')
// div.textContent = `Someone Won`
// headerContainer.appendChild(div)