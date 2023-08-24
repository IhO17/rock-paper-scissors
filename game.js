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

    function getVal(e) {
        console.log(e);
    }

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn) => {
        
        btn.addEventListener('click', () => {
            let computerSelection = getComputerChoice();
            console.log(computerSelection);
            round = playRound(btn.id, computerSelection); 
            console.log(round);
        });

    });

    function getPlayerSelection() {
        const container = document.querySelector('.text');

        const content = document.createElement('div');
        content.classList.add('result');
        content.textContent = btn.id;
        console.log(content.textContent);
        

        container.appendChild(content);
    }



    while (scoreComputer < 5 && scorePlayer < 5) {

        //let playerSelection = prompt("Pick your item: "); 
        let computerSelection = getComputerChoice();
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

game();

