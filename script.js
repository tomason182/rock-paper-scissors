let playerChoice = prompt("Select Rock, Paper or Scissors: ").toLowerCase();
let computerChoice = getComputerChoice();

function getplayerChoice(var1) {
        let playerSelection;

        if (var1 === "rock") {
            playerSelection = 0;
        }else if (var1 === "paper") {
            playerSelection = 1;
        }else {
            var1 = 2;     
        }
        return playerSelection
}

function getComputerChoice() {
    computerSelection = Math.floor(Math.random() * 3);
    return computerSelection
}

function computerToWords(computerChoice) {
    if (computerChoice = 0) {
        var2 = "rock";
    }else if (computerChoice = 1) {
        var2 = "paper";
    }else {var2 = "scissors"}

    return var2;
}

function playRound(getplayerChoice, computerChoice) {
    const gameArray =[[-1,0,1],[1,-1,0],[0,1,-1]];
    let result = gameArray[getplayerChoice][computerChoice];
    return result
}


function finalResult(result) {
    let finalResult;
    if (result === -1) {
        finalResult = `You tied! ${playerChoice} tieds with ${computerToWords()}`;
    }else if (result === 0) {
        finalResult = `You Loose! ${computerToWords} beats ${playerChoice} `;
    }else {
        finalResult = `Yoy Win! ${playerChoice} defeat ${computerToWords()}`;
    }
    return finalResult
}


console.log(computerToWords(computerChoice))
console.log(getplayerChoice(playerChoice))
console.log(finalResult())