//create gameboard object and make functions private through modules/tuck them away
const gameBoard = (()=>{
    const _boardContent = [
        ['x','o','x'],
        ['o','x','o'],
        ['x','o','x'],
          
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


const gameController = (()=>{
    //some private functions
    const player1 = playerFactory('Player 1');
    const player2 = playerFactory('Player 2');

    const roundControl = () => {
        let playerOneTurn = true;
        let playerTwoTurn = false;
     

        if (playerOneTurn === true){
            displayController.renderContent(player1);
            playerOneTurn = false;
            playerTwoTurn = true;
        }

        else if (playerTwoTurn === true){
            displayController.renderContent(player2);
            playerTwoTurn = false;
            playerOneTurn = true;
        }

    };
    return {roundControl};
  
  
  })();
  
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
    
    /*
    const renderContent = ()=>{
   

            for (var i = 0; i < gameRowZero.length; i++) {
                gameRowZero[i].textContent = board[0][i];
         
            };

            for (var i = 0; i < gameRowOne.length; i++) {
                gameRowOne[i].textContent = board[1][i];
            
            };

            for (var i = 0; i < gameRowTwo.length; i++) {
                gameRowTwo[i].textContent = board[2][i];
              
            };
        
    
    };
    */

    

    const renderContent = () => {
        for (var i = 0; i < gameRowZero.length; i++) {
    
            gameRowZero[i].addEventListener('click',(e)=>{
            
                if (playerOneTurn === true){
                    board[0][i] = 'x';
                    e.target.textContent = board[0][i];
                    playerOneTurn = false;
                    playerTwoTurn = true;
                    
                }
                else if(playerTwoTurn === true){
                    board[0][i] = 'o';
                    e.target.textContent = board[0][i];
                    playerTwoTurn = false;
                    playerOneTurn = true;
                }
                e.target.disabled = true;
                console.log(playerOneTurn);
            });
     
        };

        for (var i = 0; i < gameRowOne.length; i++) {
            gameRowOne[i].addEventListener('click',(e)=>{
                if (playerOneTurn === true){
                    board[1][i] = 'x';
                    e.target.textContent = board[1][i];
                    playerOneTurn = false;
                    playerTwoTurn = true;
                }
                else if(playerTwoTurn === true){
                    board[1][i] = 'o';
                    e.target.textContent = board[1][i];
                    playerTwoTurn = false;
                    playerOneTurn = true;
                }
                e.target.disabled = true;
            });
        
        };

        for (var i = 0; i < gameRowTwo.length; i++) {
            gameRowTwo[i].addEventListener('click',(e)=>{
                if (playerOneTurn === true){
                    board[2][i] = 'x';
                    e.target.textContent = board[2][i];
                    playerOneTurn = false;
                    playerTwoTurn = true;
                }
                else if(playerTwoTurn === true){
                    board[2][i] = 'o';
                    e.target.textContent = board[2][i];
                    playerTwoTurn = false;
                    playerOneTurn = true;
                }
                e.target.disabled = true;
            });
          
        };
    


    };
    console.log(playerOneTurn);
    return {renderContent};
  })();
  


displayController.renderContent();


