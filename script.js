//Player select a choice
let playerChoice = prompt("Select Rock, Paper or Scissors: ").toLowerCase();
//Computer select a choice (number)
let computerChoice = getComputerChoice();

<<<<<<< HEAD
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
=======
function playRound(getplayerChoice, computerChoice) {
    const gameArray = [[-1, 0, 1], [1, -1, 0], [0, 1, -1]];
    let result = gameArray[getplayerChoice][computerChoice];
    return result;
}

function getplayerChoice(playerChoice) {
    let playerSelection;

    if (playerChoice === "rock") {
        playerSelection = 0;
    } else if (playerChoice === "paper") {
        playerSelection = 1;
    } else {
        playerSelection = 2; // Cambiado de playerChoice a playerSelection
    }
    return playerSelection;
>>>>>>> origin
}

//random number between 0 and 2
function getComputerChoice() {
<<<<<<< HEAD
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
=======
    computerSelection = Math.floor(Math.random() * 3);
    return computerSelection;
}

function computerToWords(computerChoice) {
    let var2;
    if (computerChoice === 0) {
        var2 = "rock";
    } else if (computerChoice === 1) {
        var2 = "paper";
    } else {
        var2 = "scissors"; // Cambiado de "scissors" a var2
    }
    return var2;
}

function finalResult(result) {
    let finalResult;
    if (result === -1) {
        finalResult = `You tied! ${playerChoice} tieds with ${computerToWords(computerChoice)}`;
    } else if (result === 0) {
        finalResult = `You Loose! ${computerToWords(computerChoice)} beats ${playerChoice} `;
    } else {
        finalResult = `You Win! ${playerChoice} defeats ${computerToWords(computerChoice)}`;
>>>>>>> origin
    }
    return finalResult;
}

<<<<<<< HEAD

console.log(finalResult(playRoundResult, playerChoice, computerChoiceToWords(computerChoice)))
=======
console.log(finalResult(playRound(getplayerChoice(playerChoice), computerChoice))); // Pasando los argumentos necesarios
>>>>>>> origin
