
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
    const playerScore = document.createElement('p');
    
    const computer = document.querySelector('.computer');
    const computerScore = document.createElement('p');
    
    const text = document.querySelector('.text');
    text.textContent = "Choose your option!";

    const text2 = document.querySelector('.text2');
    text2.textContent = "First to 5 wins!";

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            let computerSelection = getComputerChoice();
            let playerSelection = btn.id;
            
            round = playRound(playerSelection, computerSelection); 
            
            if (round == "W") {
                text.textContent = "You WIN!"; 
                text2.textContent = `${playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${computerSelection}`; 
                scorePlayer++;   
            } else if (round == "L") {    
                text.textContent = "You LOSE!";
                text2.textContent = `${computerSelection} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()}`;
                scoreComputer++;
            } else {
                text.textContent = "It's a TIE!";
                text2.textContent = `${computerSelection} ties ${playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()}`;   
            }
            
            playerScore.textContent = scorePlayer;
            player.appendChild(playerScore);
            
            computerScore.textContent = scoreComputer;
            computer.appendChild(computerScore);
                
            if (scoreComputer == 5) {
                text.textContent = "BETTER LUCK NEXT TIME!"; 
                scoreComputer = 0;
                scorePlayer = 0;     
            } else if (scorePlayer == 5) {
                text.textContent = "YOU ARE THE CHAMPION!";
                scoreComputer = 0;
                scorePlayer = 0;
            }

            
            
        });
    });
}

game();

