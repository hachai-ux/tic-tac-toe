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


const gameLogic = (()=>{
    //some private functions
    const playerTest = playerFactory('Player 1');
    displayController.renderContent(playerTest);
  
  })();
  
const displayController = ((player1, player2)=>{
    //some private functions and properties
    const board = gameBoard.getBoard(); //board logic
    const gameRowZero = Array.from(document.querySelectorAll('.row-zero'));
    const gameRowOne = Array.from(document.querySelectorAll('.row-one'));
    const gameRowTwo = Array.from(document.querySelectorAll('.row-two'));
    //const player1 = playerFactory('Player 1');
    //const player2 = playerFactory('Player 2');
    
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

    

    const renderContent = (player) => {
        for (var i = 0; i < gameRowZero.length; i++) {
    
            gameRowZero[i].addEventListener('click',(e)=>{
            
                if (player.getName() === player1.getName()){
                    board[0][i] = 'x';
                    e.target.textContent = board[0][i];
                }
                else if(player.getName() === player2.getName()){
                    board[0][i] = 'o';
                    e.target.textContent = board[0][i];
                }
        
            });
     
        };

        for (var i = 0; i < gameRowOne.length; i++) {
            gameRowOne[i].addEventListener('click',(e)=>{
                if (player.getName() === player1.getName()){
                    board[1][i] = 'x';
                    e.target.textContent = board[1][i];
                }
                else if(player.getName() === player2.getName()){
                    board[1][i] = 'o';
                    e.target.textContent = board[1][i];
                }
        
            });
        
        };

        for (var i = 0; i < gameRowTwo.length; i++) {
            gameRowTwo[i].addEventListener('click',(e)=>{
                if (player.getName() === player1.getName()){
                    board[2][i] = 'x';
                    e.target.textContent = board[2][i];
                }
                else if(player.getName() === player2.getName()){
                    board[2][i] = 'o';
                    e.target.textContent = board[2][i];
                }
        
            });
          
        };
    


    };
    return {renderContent};
  })();
  





