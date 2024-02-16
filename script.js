let playerChoice = prompt("Select Rock, Paper or Scissors: ").toLowerCase();
let computerChoice = getComputerChoice();

function getplayerChoice(playerChoice) {
        if (playerChoice === "rock") {
            const playerSelection = 0;
        }else if (playerChoice === "paper") {
            const playerSelection = 1;
        }else if (playerChoice === "scissors") {
            const playerSelection = 2;
        }else {
            const playerSelection = prompt("Wrong Selection. Select Rock, Paper or Scissors: ")
        }
        return playerSelection
}

function getComputerChoice() {
    computerSelection = Math.floor(Math.random() * 3);
    return computerSelection
}


function playRound(getplayerChoice, getComputerChoice) {
    const gameArray =[[-1,0,1],[1,-1,0],[0,1,-1]];
    let result = gameArray[getplayerChoice][getComputerChoice];
    return result
}

function finalResult(result) {
    if (result = -1) {
        let finalResult = `You tied! ${playerChoice} tieds with ${playerChoice}`;
    }else if (result = 0) {
        let finalResult = `You Loose! ${playerChoice} beats ${playerChoice} `;
    }else {
        let finalResult = `Yoy Win! ${playerChoice} defeat ${playerChoice}`
    }
    return finalResult
}


console.log(playRound())