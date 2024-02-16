let playerChoice = prompt("Select Rock, Paper or Scissors: ").toLowerCase()

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]

    let randomChoice = choices[randomNumber()]
    return randomChoice

}

function randomNumber() {
    return Math.floor(Math.random() * 3)
}

function playRound() {
    if (playerChoice === getComputerChoice()) {
        return ""
    }
}


console.log(playerChoice)
console.log(getComputerChoice())