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
        return "It's a tie!"
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats Scissors"
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats Paper"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beats Paper"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats Scissors"
    }  
}

function game() {
    let scoreComputer = 0;
    let scorePlayer = 0;

    while (scoreComputer < 5 && scorePlayer < 5) {

        let playerSelection = prompt("Pick your item: "); 
        let computerSelection = getComputerChoice();
        round = playRound(playerSelection, computerSelection);
        console.log(round);

        if (round[4] == "W") {
            scorePlayer++;
        } else if (round[4] == "L") {
            scoreComputer++;
        }

        console.log("Player score:    " + scorePlayer);
        console.log("Computer score:  " + scoreComputer);

        if (scoreComputer == 5) {
            console.log("COMPUTER WINS!");
            break;
        } else if (scorePlayer == 5) {
            console.log("YOU WIN!")
            break;
        }
    }
}

