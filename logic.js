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
    //returns an array as reference type(a copy)
})();

const playerFactory = (name => {
    const getName = () => name;
    return {getName}; //return an object
  });


  
const displayController = (()=>{
    //some private functions and properties
    let board = gameBoard.getBoard(); //board logic
    const gameRowZero = Array.from(document.querySelectorAll('.row-zero'));
    const gameRowOne = Array.from(document.querySelectorAll('.row-one'));
    const gameRowTwo = Array.from(document.querySelectorAll('.row-two'));
    let playerOneTurn = true;
    let playerTwoTurn = false;
    let playerOneWins = false;
    let playerTwoWins = false;
    let tie = false;
    let player1;
    let player2;
    let containerDiv = document.querySelector('.container');
    
   



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

        const winDisplay = document.createElement('div');
        winDisplay.setAttribute('id', 'win-display')
        const gameFields = document.querySelectorAll('.game-field');

        
        //check win/lose
        for (var i = 0; i < all.length; i++) {
            if((all[i].every(field => field === 'x')) === true){
                playerOneWins = true;
                console.log('player one wins');
                winDisplay.textContent = `Player ${player1.getName()} wins!`
                containerDiv.appendChild(winDisplay);
                //disable all game fields
                console.log(gameFields);
                for(let field of gameFields){
                    console.log(field);
                    field.disabled = true;
                };
                
            }
            else if((all[i].every(field => field === 'o')) === true){
                playerTwoWins = true;
                console.log('player two wins');
                winDisplay.textContent = `Player ${player2.getName()} wins!`
                console.log(gameFields);
                containerDiv.appendChild(winDisplay);
                for(let field of gameFields){
                    console.log(field);
                    field.disabled = true;
                };
            }
        };
        //check tie
        if((board.some(row => row.some(field => field === '') === true) === false) && playerOneWins === false && playerTwoWins === false){
            tie = true;
            console.log('tie'); 
            winDisplay.textContent = `It's a tie!`
            containerDiv.appendChild(winDisplay);
        }


        
    };

    const _renderContent = () => {

        //make board-rows active
        const boardRows = document.querySelectorAll('.board-row');
        for (let row of boardRows) {
            row.style.display = 'table';   
          }
       
        //add listeners to fields  
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

    const startGame = () => {
        const playerForm = document.querySelector('#player-form');
        const submitButton = document.querySelector('#player-submit');

       
        playerForm.addEventListener('submit', () => {
        player1 = playerFactory(playerForm.elements['player-one'].value);
        player2 = playerFactory(playerForm.elements['player-two'].value);

      
        

        submitButton.disabled = true;
        _renderContent();
        _restartGame();
        });
    };

    const _restartGame = () => {
        const restartButton = document.createElement('button');
        const parentDiv = document.querySelector('#player-names');
        console.log(restartButton);
        restartButton.setAttribute('id', 'restart-button');
        restartButton.textContent = 'Restart Game';
        parentDiv.appendChild(restartButton);

       
    
        restartButton.addEventListener('click', () => {
            //board = gameBoard.getBoard(); doesn't work
            //gameBoard.getBoard() is a reference, so it's the same as board
            console.log(gameBoard.getBoard());
             //remove old win displays

            const winDisplay = document.querySelector('#win-display');
            if (winDisplay !== null){
                containerDiv.removeChild(winDisplay);
            };


            playerOneTurn = true;
            playerTwoTurn = false;
            playerOneWins = false;
            playerTwoWins = false;
            tie = false;
            for (var i = 0; i < gameRowZero.length; i++) {
                gameRowZero[i].textContent = '';
                gameRowZero[i].disabled = false;
                board[0][i] = '';
            };

            for (var i = 0; i < gameRowOne.length; i++) {
                gameRowOne[i].textContent = '';
                gameRowOne[i].disabled = false;
                board[1][i] = '';
            };

            for (var i = 0; i < gameRowTwo.length; i++) {
                gameRowTwo[i].textContent = '';
                gameRowTwo[i].disabled = false;
                board[2][i] = '';
            };

        });

    }




    return {startGame};
  })();
  


displayController.startGame();



