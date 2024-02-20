//Ask user for selection. Store it
let playerChoice;

let buttonSelection = document.querySelectorAll('button');

buttonSelection.forEach((button) => {
    button.addEventListener('click', () => {
    playerChoice = parseInt(button.id);
    });
});


//Ask computer for selection. Store it
let computerChoice = getComputerChoice();

function getComputerChoice() {

    let computerSelection = Math.floor(Math.random() * 3);
    return computerSelection
}

function computerChoiceToWords(q) {
    let computerToWords;
    if (q === 0) {
        computerToWords = "Rock";
    }else if (q === 1) {
        computerToWords = "Paper";
    }else {computerToWords = "Scissors"}

    return computerToWords;
}

function playerChoiceToWords(b) {
    let playerChoiceToWords;
    if (b === 0) {
        playerChoiceToWords = "Rock";
    }else if (q === 1) {
        playerChoiceToWords = "Paper";
    }else {playerChoiceToWords = "Sissors"}

    return playerChoiceToWords;
}
//Game logic

function playRound(a, b) {
    const gameArray =[[-1,0,1],[1,-1,0],[0,1,-1]];
    let result = gameArray[a][b];
    return result
}

let playRoundResult = playRound(playerChoice, computerChoice)

function finalResult(playRoundResult, playerChoiceToWords, computerChoiceToWords) {
    let finalResult
    if (playRoundResult === -1) {
        finalResult = `You tied! ${playerChoiceToWords} tieds with ${computerChoiceToWords}`;
    }else if (playRoundResult === 0) {
        finalResult = `You Loose! ${computerChoiceToWords} beats ${playerChoiceToWords} `;
    }else {
        finalResult = `Yoy Win! ${playerChoiceToWords} beats ${computerChoiceToWords}`}
    return finalResult
}

//Show result in console.log
console.log(finalResult(playRoundResult, playerChoiceToWords(playerChoice), computerChoiceToWords(computerChoice)))

//modify player selection to intiger to compare
//let userChoice = playerChoiceToInt(playerChoice)

//Transform player choice into integer function
//function playerChoiceToInt(playerChoice) {
//       let playerSelection

        /* if (playerChoice === "rock") {
             playerSelection = 0;
        }else if (playerChoice === "paper") {
            playerSelection = 1;
        }else if (playerChoice === "scissors") {
            playerSelection = 2;
        }else {
            playerSelection = alert("Wrong Selection. Select Rock, Paper or Scissors.")
        }
        return playerSelection}
 */