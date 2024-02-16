let playerChoice = prompt("Select Rock, Paper or Scissors: ").toLowerCase();
let computerChoice = getComputerChoice();

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];

    let randomChoice = choices[randomNumber()];
    return randomChoice

}

function randomNumber() {
    return Math.floor(Math.random() * 3)
}



function playRound() {
    const gameArray =[[-1,0,1],[1,-1,0],[0,1,-1]];
    return gameArray[2][0]
    

}


console.log(playRound())