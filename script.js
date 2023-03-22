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
                    return roundWon;
                case "paper":
                    return roundTie;
                case "scissors":
                    return roundLoss;
            }
            break;

        case "scisscors":
            switch(computerSelection){
                case "rock":
                    return roundLoss;
                case "paper":
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
                    return roundLoss;
                case "scissors":
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
}

game();