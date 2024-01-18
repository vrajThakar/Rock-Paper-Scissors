function getComputerChoice() {
    let computerChoice = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random() * 3);
    return computerChoice[index];
}

function playerSelection() {
    let playerChoice = prompt("Please Type 'Rock', 'Paper', or 'Scissors'")
    return playerChoice[0].toUpperCase() + playerChoice.slice(1).toLowerCase();
}

function getWinner(p1, p2) {
    if ((p1 == 'Rock' && p2 != 'Paper') || (p1 == 'Paper' && p2 != 'Scissors') || (p1 == 'Scissors' && p2 != 'Rock')) {
    return 1;
    }
    return 2;
}

function playRound(playerChoice, computerChoice) {
    console.log("Player Played: " + playerChoice)
    console.log("Computer Played: " + computerChoice)
    if (playerChoice == computerChoice) {
        console.log("It's a tie! Re-play Round!")
        return 0;
    }
    getWinner(playerChoice, computerChoice) == 1 ? console.log("Player Won!") : console.log("Computer Won!");
    return getWinner(playerChoice, computerChoice);   
}

function game() {
   let playerScore = 0;
   let computerScore = 0;

   while (playerScore != 3 && computerScore != 3) {
    let result = playRound(playerSelection(), getComputerChoice());
    if (result == 0) {
        continue;
   } else if (result == 1) {
    playerScore++;
    continue;
   }
   computerScore++;

   }
    playerScore == 3 ? console.log("Player Wins the Match!") : console.log("Computer Wins the Match!")   
}
game();
