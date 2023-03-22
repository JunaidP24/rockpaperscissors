let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
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

function game(){
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Make your choice of Rock, Paper, or Scissors");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
    }
    if (playerScore > computerScore){console.log("Winner, Winner Chicken Dinner!");}
    else if (playerScore == computerScore){console.log("Tie Game, Unlucky!");}
    else {console.log("Boohoo, You lost!");}
}

game();