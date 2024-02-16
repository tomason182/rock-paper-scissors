let playerChoice = prompt("Select Rock, Paper or Scissors: ").toLowerCase();
let computerChoice = getComputerChoice();

function getplayerChoice(playerChoice) {
        if (playerChoice === "rock") {
            let playerSelection = 0;
        }else if (playerChoice === "paper") {
            let playerSelection = 1;
        }else if (playerChoice === "scissors") {
            let playerSelection = 2;
        }else {
            let playerSelection = prompt("Wrong Selection. Select Rock, Paper or Scissors: ")
        }
        return playerSelection
}

function getComputerChoice() {
    computerSelection = Math.floor(Math.random() * 3)
    return computerSelection
}


function playRound(playerSelection, computerSelection) {
    const gameArray =[[-1,0,1],[1,-1,0],[0,1,-1]];
    return gameArray[playerSelection][computerSelection]
    

}


console.log(playRound())