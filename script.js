let playerScore = 0;
let computerScore = 0;


function handleButtonClick(button) {  
    
    let playerChoice = parseInt(button.id);
    let computerChoice = getComputerChoice();     
            
    let playerChoiceText = playerChoiceToWords(playerChoice);
    let computerChoiceText = computerChoiceToWords(computerChoice);
        
    let playRoundResult = playRound(playerChoice, computerChoice);

    if (playerScore === 4 || computerScore === 4){

        const result = document.querySelector('#final-result');
        result.textContent = "End of Game";
        
    }else{
        if (playRoundResult === 1){
            playerScore += 1;
        }else if (playRoundResult === 0) {
            computerScore += 1;
        }
    
        const result = document.querySelector('#final-result');
        result.textContent = finalResult(playRoundResult, playerChoiceText, computerChoiceText);

        const computerScoreM = document.querySelector('#computer-score');
        computerScoreM.textContent = `Computer result: ${computerScore}`; 

        const playerScoreM = document.querySelector('#player-score');
        playerScoreM.textContent = `Player Score: ${playerScore}`;
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