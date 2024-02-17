//Create variable User prompt
let playerChoice = prompt("Select Rock, Paper or Scissors: ").toLowerCase();
//Variable computerChoice get random number
let computerChoice = getComputerChoice();

//Transform player choice into integer
function getplayerChoice(playerChoice) {
        if (playerChoice === "rock") {
            const playerSelection = 0;
        }else if (playerChoice === "paper") {
            const playerSelection = 1;
        }else if (playerChoice === "scissors") {
            const playerSelection = 2;
        }else {
            const playerSelection = alert("Wrong Selection. Select Rock, Paper or Scissors.")
        }
        return playerSelection
}

//random number between 0 and 2
function getComputerChoice() {
    computerSelection = Math.floor(Math.random() * 3);
    return computerSelection
}

//make random number to rock, paper scissors

function computerChoiceToNumber(computerChoice) {
    let computerToNumber;
    if (computerChoice === 0) {
        computerToNumber = "Rock";
    }else if (computerChoice === 1) {
        computerToNumber = "Paper";
    }else {computerToNumber = "Scissors"}

    return computerToNumber
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