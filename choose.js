let round = 0;
let numOfRound = prompt('Input the number of rounds to play...');
let playerSelection;
let computerSelection = computerPlay().toUpperCase();

for(i = 0; i < numOfRound; i++) {
    playerSelection = prompt('ROCK, PAPER or SCISSORS?');
    playerSelection = playerSelection.toUpperCase();
    console.log(playRound());
}