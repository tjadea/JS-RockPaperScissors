let computerWin = 0;
let playerWin = 0;

function playRound() {
    if (computerSelection === playerSelection) {
        return "Computer chooses " + computerSelection + "!" + "\n" + "Its a tie!" + "\n" + "Score (Comp): " + computerWin + "\n" + "Score (You): " + playerWin; }
    else if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') {
        computerWin++;
        return "Computer chooses ROCK!" + "\n" + "Computer wins, ROCK beats SCISSORS" + "\n" + "Score (Comp): " + computerWin + "\n" + "Score (You): " + playerWin; }
    else if (computerSelection === 'ROCK' && playerSelection === 'PAPER') {
        playerWin++;
        return "Computer chooses ROCK!" + "\n" + "Player wins, PAPER beats ROCK" + "\n" + "Score (Comp): " + computerWin + "\n" + "Score (You): " + playerWin; }        
    else if (computerSelection === 'PAPER' && playerSelection === 'SCISSORS') {
        playerWin++;
        return "Computer chooses PAPER!" + "\n" + "Player wins, SCISSORS beat PAPER" + "\n" + "Score (Comp): " + computerWin + "\n" + "Score (You): " + playerWin; }
    else if (computerSelection === 'PAPER' && playerSelection === 'ROCK') {
        computerWin++;
        return "Computer chooses PAPER!" + "\n" + "Computer wins, PAPER beats ROCK" + "\n" + "Score (Comp): " + computerWin + "\n" + "Score (You): " + playerWin; }
    else if (computerSelection === 'SCISSORS' && playerSelection === 'ROCK') {
        playerWin++;
        return "Computer chooses SCISSORS!" + "\n" + "Player wins, ROCK beats SCISSORS" + "\n" + "Score (Comp): " + computerWin + "\n" + "Score (You): " + playerWin; }
    else if (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') {
        computerWin++;
        return "Computer chooses SCISSORS!" + "\n" + "Computer wins, SCISSORS beat PAPER" + "\n" + "Score (Comp): " + computerWin + "\n" + "Score (You): " + playerWin; }
};