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
  })();
  
const displayController = (()=>{
    //some private functions
    const board = gameBoard.getBoard();
    
    const renderContent = ()=>{
        //create arrays for each row
        const gameRowZero = Array.from(document.querySelectorAll('.row-zero'));
        const gameRowOne = Array.from(document.querySelectorAll('.row-one'));
        const gameRowTwo = Array.from(document.querySelectorAll('.row-two'));

        //const gameFields = document.querySelectorAll('.game-rows');

        //map board object to gameFields
        
        //loop through elements
        //turn nodelist into array to get index
        /*
        gameFieldsArray = Array.from(gameFields);
        gameFieldsArray.forEach(field_element =>{
            index = gameFieldsArray.indexOf(field_element);
            */
        
        //assign contents to each row

            for (var i = 0; i < gameRowZero.length; i++) {
                gameRowZero[i].textContent = board[0][i];
         
            };

            for (var i = 0; i < gameRowOne.length; i++) {
                gameRowOne[i].textContent = board[1][i];
            
            };

            for (var i = 0; i < gameRowTwo.length; i++) {
                gameRowTwo[i].textContent = board[2][i];
              
            };
        
        
        

        /*
        board.forEach(field_row => {
            field_row.forEach(field_content => {
                if 
            field_element.textContent = field_content;
                console.log(field_element.textContent);
                });
            });
          };
          */
        //assign board content to elements
    };
    return {renderContent};
  })();
  


  const player1 = playerFactory('Player 1');
  const player2 = playerFactory('Player 2');

  displayController.renderContent();



