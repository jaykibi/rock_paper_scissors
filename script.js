// This function gets the computer's choice..
// Returns: a STRING value that is randomly chosen from an array of strings. "Rock", "Paper", "Scissors"
function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * 3);

    return options[randomChoice];
}

// This function grabs user input for playerSelection and grabs computerSelection through getComputerChoice()
// Returns: a STRING value that represents if the user won/lost against the computer.
function playRound(playerSelection, computerSelection) {
    // Sanitize arguments
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Capitalize Selection
    playerSelection =
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    computerSelection =
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

    // Result Messages
    let winMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
    let loseMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;

    // check cases, recursive call on same selection
    if (playerSelection == computerSelection) {
        return playRound(playerSelection, getComputerChoice());
    } else if (playerSelection == "Rock") {
        // Win
        if (computerSelection == "Scissors") {
            return winMessage;
        }
        // Lose
        if (computerSelection == "Paper") {
            return loseMessage;
        }
    } else if (playerSelection == "Paper") {
        // Win
        if (computerSelection == "Rock") {
            return winMessage;
        }
        // Lose
        if (computerSelection == "Scissors") {
            return loseMessage;
        }
    } else if (playerSelection == "Scissors") {
        // Win
        if (computerSelection == "Paper") {
            return winMessage;
        }
        // Lose
        if (computerSelection == "Rock") {
            return loseMessage;
        }
    }
}

// This function plays 5 rounds of the game.
// Returns: a STRING value that represents if the user won/lost the GAME.
function game() {
    // initialize player scores
    let playerScore = 0;
    let computerScore = 0;
    let playerInput;
    let resultMessage;
    let gameOver = false;
    // let playerInput = prompt("Please select rock, paper, or scissors");

    const container = document.querySelector("#game-area");

    // add button logic
    const btn = document.querySelectorAll("#btn");
    btn.forEach((button) => {
        button.addEventListener("click", function (e) {
            if (gameOver) {
                return;
            }
            playerInput = e.target.firstChild.data;
            console.log(e.target.firstChild.data);

            resultMessage = playRound(playerInput, getComputerChoice());

            // we are checking the returned string for a 'W', meaning the user won the round LOLOL
            // W's in CHAT LOL
            if (resultMessage.toLowerCase().includes("w")) {
                playerScore++;
                console.log("You won this round!");
                container.textContent = "WINNER";
            } else {
                computerScore++;
                console.log("You lost this round");
                container.textContent = "LOSER";
            }
            console.log(`Final Scores Below:`);
            console.log(`You: ${playerScore}`);
            console.log(`Computer: ${computerScore}`);

            container.textContent = `Current score: You: ${playerScore} Computer: ${computerScore}`;

            if (playerScore == 5 || computerScore == 5) {
                gameOver = true;
                if (playerScore == 5) {
                    container.textContent = "You WIN";
                    alert("YOU WINNER");
                } else {
                    container.textContent = "COMPUTER WON YOU LOST";
                    alert("YOU suck");
                }
                console.log("Game over");
            }
        });
    });
}

game();
