//Player select a choice
let playerChoice = prompt("Select Rock, Paper or Scissors: ").toLowerCase();
//Computer select a choice (number)
let computerChoice = getComputerChoice();

let userChoice = playerChoiceToInt(playerChoice)

//Transform player choice into integer
function playerChoiceToInt(playerChoice) {
        let playerSelection

        if (playerChoice === "rock") {
             playerSelection = 0;
        }else if (playerChoice === "paper") {
            playerSelection = 1;
        }else if (playerChoice === "scissors") {
            playerSelection = 2;
        }else {
            playerSelection = alert("Wrong Selection. Select Rock, Paper or Scissors.")
        }
        return playerSelection
}

//random number between 0 and 2
function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * 3);
    return computerSelection
}

//convert computer choice to Rock, Paper or Scissors

function computerChoiceToWords(computerChoice) {
    let computerToWords;
    if (computerChoice === 0) {
        computerToWords = "Rock";
    }else if (computerChoice === 1) {
        computerToWords = "Paper";
    }else {computerToWords = "Scissors"}

    return computerToWords
}

//Game logic

function playRound(userChoice, computerChoice) {
    const gameArray =[[-1,0,1],[1,-1,0],[0,1,-1]];
    let result = gameArray[userChoice][computerChoice];
    return result
}

let playRoundResult = playRound(userChoice, computerChoice)

function finalResult(playRoundResult, playerChoice, computerChoiceToWords) {
    let finalResult
    if (playRoundResult === -1) {
        finalResult = `You tied! ${playerChoice} tieds with ${computerChoiceToWords}`;
    }else if (playRoundResult === 0) {
        finalResult = `You Loose! ${computerChoiceToWords} beats ${playerChoice} `;
    }else {
        finalResult = `Yoy Win! ${playerChoice} beats ${computerChoiceToWords}`
    }
    return finalResult
}


console.log(finalResult(playRoundResult, playerChoice, computerChoiceToWords(computerChoice)))