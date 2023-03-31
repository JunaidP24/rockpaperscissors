let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*3)];
}

function playRound(playerSelection){
    computerSelection = getComputerChoice();
    const roundLoss = `You Lose! ${computerSelection} beats ${playerSelection}`;
    const roundWon = `You Won! ${playerSelection} beats ${computerSelection}`;
    const roundTie = 'Twas a draw!'
    switch(playerSelection){
        case "paper":
            switch(computerSelection){
                case "rock":
                    playerScore++;
                    return roundWon;
                case "paper":
                    return roundTie;
                case "scissors":
                    computerScore++;
                    return roundLoss;
            }
            break;

        case "scissors":
            switch(computerSelection){
                case "rock":
                    computerScore++;
                    return roundLoss;
                case "paper":
                    playerScore++;
                    return roundWon;
                case "scissors":
                    return roundTie;
            }
            break;

        case "rock":
            switch(computerSelection){
                case "rock":
                    return roundTie;
                case "paper":
                    computerScore++;
                    return roundLoss;
                case "scissors":
                    playerScore++;
                    return roundWon;
            }
            break;
    }
}

const checkWinner = (playerScore,computerScore) => {
    gameScore = `Score: ${playerScore} - ${computerScore}`;
    score.textContent = gameScore;
    if (playerScore === 5 || computerScore === 5){
        if (playerScore < computerScore){
            results.innerText = 'You LOST! Refresh the page to play again!';
        }
        else{
            results.innerText = 'Winner Winner Chicken Dinner! Refresh the page to play again!';
        }
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
}

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const container = document.querySelector('.container');
const score = document.querySelector('.score');
const results = document.createElement('div');
results.classList.add('results');

container.appendChild(results);

rockBtn.addEventListener('click', () => {
    results.textContent = playRound('rock');
    checkWinner(playerScore,computerScore);
});

paperBtn.addEventListener('click', () =>{
    results.textContent = playRound('paper');
    checkWinner(playerScore,computerScore);
});

scissorsBtn.addEventListener('click', () =>{
    results.textContent = playRound('scissors');
    checkWinner(playerScore,computerScore);
});