//create gameboard object and make functions private through modules/tuck them away
const gameBoard = [
  ['1','2','3'],
  ['4','5','6'],
  ['7','8','9'],
];



const playerFactory = (name => {
    return {name}; //return an object
  });

const computerFactory = () => {
    const computer = 'Computer';
    return {computer};
  };
  
  const player = playerFactory('Player');
  const computer = computerFactory();
  
  console.log(player1.name); // 'jeff'
  
  jeff.sayHello(); // calls the function and logs 'hello!'