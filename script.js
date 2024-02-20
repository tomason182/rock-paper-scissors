function handleButtonClick(button) {        

    let playerChoice = parseInt(button.id);
    let computerChoice = getComputerChoice();
    let playRoundResult = playRound(playerChoice, computerChoice);

    let playerScore, computerScore;
    [playerScore, computerScore] = getScore(playRoundResult, playerScore, computerScore)
    
            
    let playerChoiceText = playerChoiceToWords(playerChoice);
    let computerChoiceText = computerChoiceToWords(computerChoice); 

    const result = document.querySelector('#final-result');
    result.textContent = finalResult(playRoundResult, playerChoiceText, computerChoiceText);

    const computerScoreM = document.querySelector('#computer-score');
    computerScoreM.textContent = `Computer result: ${computerScore}`; 

    const playerScoreM = document.querySelector('#player-score');
    playerScoreM.textContent = `Player Score: ${playerScore}`
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

function getScore(comp, a, b) {
   
    if (a === NaN && b === NaN) {
        a = 0;
        b = 0;
    }else if (a === NaN){
        a = 0;
    }else if (b === NaN) {
        b = 0;
    }

    if (comp === 0){
        a += 1;
    }else if(comp === 1) {
        b +=1;
    }
}