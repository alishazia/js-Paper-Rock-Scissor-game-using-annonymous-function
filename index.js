
const startGameBtn = document.getElementById('start-game-btn');


const PAPER = 'PAPER';
const ROCK = 'ROCK';
const SCISSOR = 'SCISSOR';
const DEFAULT_CHOICE = 'ROCK'

const getPlayerChoice = function () {
  const selection = prompt(`${PAPER},${SCISSOR} or ${ROCK} !`, '').toUpperCase();
  if (selection !== PAPER && selection !== SCISSOR && selection !== ROCK) {
    alert(`Invalid choice. We have selected ${DEFAULT_CHOICE} for you.`)
    return DEFAULT_CHOICE;
  }
  return selection;
};


startGameBtn.addEventListener('click', function () {
  console.log('Game started....');
  const player = getPlayerChoice()
  console.log(player);
});