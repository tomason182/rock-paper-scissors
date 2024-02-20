function handleButtonClick(button) {
    let playerChoice = parseInt(button.id);
    let computerChoice = getComputerChoice();
    let playRoundResult = playRound(playerChoice, computerChoice);

    console.log("Player Choice:", playerChoice);
    console.log("Computer Choice:", computerChoice);
    console.log("Play Round Result: ", playRoundResult);
    
    let playerChoiceText = playerChoiceToWords(playerChoice);
    let computerChoiceText = computerChoiceToWords(computerChoice);

    const result = document.querySelector('#final-result');
    result.textContent = finalResult(playRoundResult, playerChoiceText, computerChoiceText);
    
    let playerResult = 0;
    let computerResult = 0;

    while (playerResult < 5  || computerResult < 5) {        
        if (playRoundResult === 0) {
            const playerScore = document.querySelector('#player-score');
            playerScore.textContent = `player result:  ${playerResult}`;
            playerResult += 1;
        }else if (playRoundResult === 1){
            const computerScore = document.querySelector('#computer-score');
            computerScore.textContent = `Computer result: ${computerResult}`;
            computerResult += 1;
        }else {
            continue
        }
            
    }
    
}

let buttonSelection = document.querySelectorAll('button');

buttonSelection.forEach((button) => {
    button.addEventListener('click', () => {
        handleButtonClick(button);
    });
});

function getComputerChoice() {

    return Math.floor(Math.random() * 3);
    
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
    }else if (b === 1) {
        playerChoiceToWords = "Paper";
    }else {playerChoiceToWords = "Sissors"}

    return playerChoiceToWords;
}

function playRound(a, b) {
    const gameArray =[[-1,0,1],[1,-1,0],[0,1,-1]];
    return gameArray[a][b];
}

function finalResult(x, y, z) {
    let finalResult
    if (x === -1) {
        finalResult = `You tied! ${y} tieds with ${z}`;
    }else if (x === 0) {
        finalResult = `You Loose! ${z} beats ${y} `;
    }else {
        finalResult = `Yoy Win! ${y} beats ${z}`}
    return finalResult
}