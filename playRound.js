let computerWin = 0;
let playerWin = 0;

function playRound() {
    if (computerSelection === playerSelection) {
        return "Computer chooses " + computerSelection + "!" + "\n" + "Its a tie!" + "\n" + "Score (Comp): " + computerWin + "\n" + "Score (You): " + playerWin; }
    else if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') {
        computerWin++;
        return "Computer chooses Rock!" + "\n" + "Computer wins, Rock beats Scissors" + "\n" + "Score (Comp): " + computerWin + "\n" + "Score (You): " + playerWin; }
    else if (computerSelection === 'ROCK' && playerSelection === 'PAPER') {
        playerWin++;
        return "Computer chooses Rock!" + "\n" + "Player wins, Paper beats Rock" + "\n" + "Score (Comp): " + computerWin + "\n" + "Score (You): " + playerWin; }        
    else if (computerSelection === 'PAPER' && playerSelection === 'SCISSORS') {
        playerWin++;
        return "Computer chooses Paper!" + "\n" + "Player wins, Scissors beat Paper" + "\n" + "Score (Comp): " + computerWin + "\n" + "Score (You): " + playerWin; }
    else if (computerSelection === 'PAPER' && playerSelection === 'ROCK') {
        computerWin++;
        return "Computer chooses Paper!" + "\n" + "Computer wins, Paper beats Rock" + "\n" + "Score (Comp): " + computerWin + "\n" + "Score (You): " + playerWin; }
    else if (computerSelection === 'SCISSORS' && playerSelection === 'ROCK') {
        playerWin++;
        return "Computer chooses Scissors!" + "\n" + "Player wins, Rock beats Scissors" + "\n" + "Score (Comp): " + computerWin + "\n" + "Score (You): " + playerWin; }
    else if (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') {
        computerWin++;
        return "Computer chooses Scissors!" + "\n" + "Computer wins, Scissors beat Paper" + "\n" + "Score (Comp): " + computerWin + "\n" + "Score (You): " + playerWin; }
};