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
        const check1 = () => equals3(gameBoard.board[0], gameBoard.board[1], gameBoard.board[2]) ? "check1" : false; // top
        const check2 = () => equals3(gameBoard.board[0], gameBoard.board[4], gameBoard.board[8]) ? "check2" : false; // diagonal LR
        const check3 = () => equals3(gameBoard.board[0], gameBoard.board[3], gameBoard.board[6]) ? "check3" : false; // left
        const check4 = () => equals3(gameBoard.board[1], gameBoard.board[4], gameBoard.board[7]) ? "check4" : false; // cntr topdown
        const check5 = () => equals3(gameBoard.board[2], gameBoard.board[5], gameBoard.board[8]) ? "check5" : false; // right
        const check6 = () => equals3(gameBoard.board[2], gameBoard.board[4], gameBoard.board[6]) ? "check6" : false; // diagonal RL
        const check7 = () => equals3(gameBoard.board[6], gameBoard.board[7], gameBoard.board[8]) ? "check7" : false; // bottom
        const check8 = () => equals3(gameBoard.board[3], gameBoard.board[4], gameBoard.board[5]) ? "check8" : false; // mid center
        
        let test = (check1() || check2() || check3() || check4() || check5() || check6() || check7() || check8());
        
        const displayWinner = (winSymbol) => {
            if (winSymbol === "X") {
                paragraph.textContent = `${player1.name} Won!`
            }
            else {
                paragraph.textContent = `${player2.name} Won!`
            }
        }
        const whoWins = () => {
            switch (test) {
                case 'check1':
                    displayWinner(gameBoard.board[0])
                    break;
            
                case 'check2':
                    displayWinner(gameBoard.board[0])
                    break;
            
                case 'check3':
                    displayWinner(gameBoard.board[0])
                    break;
            
                case 'check4':
                    displayWinner(gameBoard.board[1])
                    break;
            
                case 'check5':
                    displayWinner(gameBoard.board[2])
                    break;
            
                case 'check6':
                    displayWinner(gameBoard.board[2])
                    break;
            
                case 'check7':
                    displayWinner(gameBoard.board[6])
                    break;
                
                case 'check8':
                    displayWinner(gameBoard.board[3])
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

const PlayerFactory = (symbol, name) => {

    const play = (targetIndex) => {

        if (!(gameBoard.board[targetIndex] === "")) return; //can't edit if not empty
        else {
        gameBoard.board.splice(targetIndex, 1, symbol);
        gameBoard.render(gameBoard.board, gameContainer);
        gameBoard.runTest();
        };
    };
    
    return { play, name };
}

const player1 = PlayerFactory('X', "John");
const player2 = PlayerFactory('O', "Mary");

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
        currentPlayer = player2
        console.log('ResetButton')
    };
    resetButton.addEventListener('click', restartGame)
    
    return { restartGame }

})();

gameBoard.render(gameBoard.board, gameContainer);