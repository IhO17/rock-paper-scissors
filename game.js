
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "Rock"
    } else if (choice === 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    if (playerSelection == computerSelection) {
        return "T"
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {  
        return "W";
    } else {
        return "L";
    }
}

function game() {

    let scoreComputer = 0;
    let scorePlayer = 0;

    const player = document.querySelector('.player');
    const computer = document.querySelector('.computer');

    const playerScore = document.createElement('p');
    const computerScore = document.createElement('p');
    //content.textContent = scorePlayer;
    //
    //player.appendChild(content);

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            let computerSelection = getComputerChoice();
            let playerSelection = btn.id;
            
            round = playRound(playerSelection, computerSelection); 
            
            


            if (round == "W") {
                console.log(`You Win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${computerSelection}`);
                scorePlayer++;
            } else if (round == "L") {
                console.log(`You Lose! ${computerSelection} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()}`);
                scoreComputer++;
            } else {
                console.log("It's a tie!")
            }
            
            playerScore.textContent = scorePlayer;
            player.appendChild(playerScore);
            computerScore.textContent = scoreComputer;
            computer.appendChild(computerScore);
            
            if (scoreComputer == 5) {
                console.log("COMPUTER WINS!");
            } else if (scorePlayer == 5) {
                console.log("YOU WIN!");
            }

        });
    });
}

game();

