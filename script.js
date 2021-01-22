const gameContainer = document.querySelector('.game-board-container');
const headerContainer = document.querySelector('.header-container')
const paragraph = document.querySelector('#paragraph')
const resetButton = document.querySelector('#reset-button')


const gameBoard = (() => {
    let board = ["","","","","","","","",""];
    
    const render = (list = [], place) => {
        place.innerHTML = list.map((item, index) => {
        return `
        <div class="box" data-index="${index}">${item}</div>
        `
        }).join('');
    };
    
    const runTest = () => {
        const equals3 = (a, b, c) => {
            if ((a === "") || (b === "") || (c === ""))
            {return}
            else {
            return (a===b && b===c && a===c);
            };
        };
        
        // Winning Conditions
        const check1 = equals3(board[0], board[1], board[2]) ? "check1" : false; // top
        const check2 = equals3(board[0], board[4], board[8]) ? "check2" : false; // diagonal LR
        const check3 = equals3(board[0], board[3], board[6]) ? "check3" : false; // left
        const check4 = equals3(board[1], board[4], board[7]) ? "check4" : false; // cntr topdown
        const check5 = equals3(board[2], board[5], board[8]) ? "check5" : false; // right
        const check6 = equals3(board[2], board[4], board[6]) ? "check6" : false; // diagonal RL
        const check7 = equals3(board[6], board[7], board[8]) ? "check7" : false; // bottom
        const check8 = equals3(board[3], board[4], board[5]) ? "check8" : false; // mid center
        
        let test = (check1 || check2 || check3 || check4 || check5 || check6 || check7 || check8);
        
        const displayWinner = (winSymbol) => {
            paragraph.textContent = `${winSymbol} Won!`
        }
        // Message to self -> Issue: After resetting, winning condition remains. 
        const whoWins = () => {
            switch (test) {
                case 'check1':
                    displayWinner(gameBoard.board[0])
                    break;
            
                case 'check2':
                    console.log(`${gameBoard.board[0]}`)
                    break;
            
                case 'check3':
                    console.log(`${gameBoard.board[0]}`)
                    break;
            
                case 'check4':
                    console.log(`${gameBoard.board[1]}`)
                    break;
            
                case 'check5':
                    console.log(`${gameBoard.board[2]}`)
                    break;
            
                case 'check6':
                    console.log(`${gameBoard.board[2]}`)
                    break;
            
                case 'check7':
                    console.log(`${gameBoard.board[6]}`)
                    break;
                
                case 'check8':
                    console.log(`${gameBoard.board[3]}`)
                    break;     
                default:
                    console.log(`Keep playing`)
                    break;
            }
        }        
        return whoWins();
    }

    return { board, render, runTest };
})();

const PlayerFactory = (symbol) => {
    
    const play = (targetIndex) => {

        if (!(gameBoard.board[targetIndex] === "")) return; //can't edit if not empty
        else {
        gameBoard.board.splice(targetIndex, 1, symbol);
        gameBoard.render(gameBoard.board, gameContainer);
        gameBoard.runTest();
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
    
    const restartGame = () => {
        gameBoard.board = ["","","","","","","","",""];
        gameBoard.render(gameBoard.board, gameContainer)
        paragraph.textContent = "Who's winning?"
        console.log('ResetButton')
    };
    resetButton.addEventListener('click', restartGame)
    
    

})();

gameBoard.render(gameBoard.board, gameContainer);

// To congratulate winning player, use a counter for turns.
// If turn 0,2,4,6,8 triggers .play, player1(X) wins.
// If turn 1,3,5,7,9 triggers .play, player2(O) wins.