//create gameboard object and make functions private through modules/tuck them away
const gameBoard = (()=>{
    const _boardContent = [
        ['','',''],
        ['','',''],
        ['','',''],
          
          ];
    //boardContent is a private property
       
    const getBoard = () => _boardContent;
   
    return {getBoard};
    //this function makes getBoard public
})();

const playerFactory = (name => {
    const getName = () => name;
    return {getName}; //return an object
  });


  
const displayController = (()=>{
    //some private functions and properties
    const board = gameBoard.getBoard(); //board logic
    const gameRowZero = Array.from(document.querySelectorAll('.row-zero'));
    const gameRowOne = Array.from(document.querySelectorAll('.row-one'));
    const gameRowTwo = Array.from(document.querySelectorAll('.row-two'));
    const player1 = playerFactory('Player 1');
    const player2 = playerFactory('Player 2');
    let playerOneTurn = true;
    let playerTwoTurn = false;
    let playerOneWins = false;
    let playerTwoWins = false;

    const _checkWinCondition = () => {
        //loop over 2-dimensional array and return columns/rows as arrays to check
        //then add conditions for diagonal
    
        const horizontal = board;
        const vertical = [ 
            //check columns
            //could have used .map
            [board[0][0], board[1][0], board[2][0]],
            [board[0][1], board[1][1], board[2][1]],
            [board[0][2], board[1][2], board[2][2]],
        ];
        const diagonal = [
            [board[0][0], board[1][1], board[2][2]],
            [board[0][2], board[1][1], board[2][0]]
        ];

        //combine all arrays so for-loop only needs to be run once
        const all = [].concat(horizontal).concat(vertical).concat(diagonal);
        console.log(all);

        for (var i = 0; i < all.length; i++) {
            if((all[i].every(field => field === 'x')) === true){
                playerOneWins = true;
                console.log('player one wins');
            }
            else if((all[i].every(field => field === 'o')) === true){
                playerTwoWins = true;
                console.log('player two wins');
            };
        };


        
    };

    const renderContent = () => {
        for (var i = 0; i < gameRowZero.length; i++) {
            
            gameRowZero[i].addEventListener('click',(e)=>{
                let targetIndex;

                if (playerOneTurn === true){
                    targetIndex = e.target.getAttribute('data-index');
                    board[0][targetIndex] = 'x';
                    e.target.textContent = board[0][targetIndex];
                    playerOneTurn = false;
                    playerTwoTurn = true;
                    
                }
                else if(playerTwoTurn === true){
                    targetIndex = e.target.getAttribute('data-index');
                    board[0][targetIndex] = 'o';
                    e.target.textContent = board[0][targetIndex];
                    playerTwoTurn = false;
                    playerOneTurn = true;
                }
                e.target.disabled = true;
                _checkWinCondition();
    
            });
     
        };

        for (var i = 0; i < gameRowOne.length; i++) {
            gameRowOne[i].addEventListener('click',(e)=>{
                if (playerOneTurn === true){
                    targetIndex = e.target.getAttribute('data-index');
                    board[1][targetIndex] = 'x';
                    e.target.textContent = board[1][targetIndex];
                    playerOneTurn = false;
                    playerTwoTurn = true;
                }
                else if(playerTwoTurn === true){
                    targetIndex = e.target.getAttribute('data-index');
                    console.log(targetIndex);
                    board[1][targetIndex] = 'o';
                    e.target.textContent = board[1][targetIndex];
                    playerTwoTurn = false;
                    playerOneTurn = true;
                }
                e.target.disabled = true;
                _checkWinCondition();
    
            });
        
        };

        for (var i = 0; i < gameRowTwo.length; i++) {
            gameRowTwo[i].addEventListener('click',(e)=>{
                if (playerOneTurn === true){
                    targetIndex = e.target.getAttribute('data-index');
                    board[2][targetIndex] = 'x';
                    e.target.textContent = board[2][targetIndex]
                    playerOneTurn = false;
                    playerTwoTurn = true;
                }
                else if(playerTwoTurn === true){
                    targetIndex = e.target.getAttribute('data-index');
                    board[2][targetIndex] = 'o';
                    e.target.textContent = board[2][targetIndex];
                    playerTwoTurn = false;
                    playerOneTurn = true;
                }
                e.target.disabled = true;
                _checkWinCondition();
    
            });
          
        };
       


    };


    return {renderContent};
  })();
  


displayController.renderContent();



