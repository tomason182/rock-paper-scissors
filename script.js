let playerChoice = prompt("Select Rock, Paper or Scissors: ").toLowerCase();
let computerChoice = getComputerChoice();

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
}

function getComputerChoice() {
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
    }
    return finalResult;
}

console.log(finalResult(playRound(getplayerChoice(playerChoice), computerChoice))); // Pasando los argumentos necesarios
