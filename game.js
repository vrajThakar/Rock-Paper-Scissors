 function getComputerChoice() {
    let computerChoice = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random() * 3);
    return computerChoice[index];
}

function getWinner(p1, p2) {
    if ((p1 == 'Rock' && p2 != 'Paper') || (p1 == 'Paper' && p2 != 'Scissors') || (p1 == 'Scissors' && p2 != 'Rock')) {
    return 1;
    }
    return 2;
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        console.log("It's a tie! Re-play Round!")
        return 0;
    }
    getWinner(playerChoice, computerChoice) == 1 ? console.log("Player Won!") : console.log("Computer Won!");
    return getWinner(playerChoice, computerChoice);   
}

function displayChoice(player, computer) {
    const playerChoiceContainer = document.querySelector('.container')
    const playerChoice = document.createElement('p');
    playerChoice.textContent();
    playerChoiceContainer.appendChild();


}
const buttons = document.querySelectorAll('button');

const playerChoiceContainer = document.querySelector('.container .choices .playerMove');
const computerChoiceContainer = document.querySelector('.container .choices .computerMove');   

const playerResultContainer = document.querySelector('.container .results .player-result');
const computerResultContainer = document.querySelector('.container .results .computer-result');   

const playerResult = document.createElement('h4');
const computerResult = document.createElement('h4');

const playerMove = document.createElement('span');
const computerMove = document.createElement('span');


let playerScore = 0;
let computerScore = 0;

// we use the .forEach method to iterate through each button
    buttons.forEach((button) => {

  // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        let computerChoice = getComputerChoice();

        playerMove.textContent = button.textContent;
        computerMove.textContent = computerChoice;

        playerChoiceContainer.appendChild(playerMove);
        computerChoiceContainer.appendChild(computerMove);

        let result = playRound(button.textContent, computerChoice);

        if (result == 0) {
            playerScore += 0.5;
            computerScore += 0.5;

        } else if (result == 1) {
         playerScore++;
         
        } else {
        computerScore++;
        }

        playerResult.textContent = playerScore;
        computerResult.textContent = computerScore;

        playerResultContainer.appendChild(playerResult);
        computerResultContainer.appendChild(computerResult);

    });
    });
