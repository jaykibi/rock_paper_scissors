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

  for (let i = 0; i < 5; i++) {
    let playerInput = prompt("Please select rock, paper, or scissors");
    resultMessage = playRound(playerInput, getComputerChoice());

    // we are checking the returned string for a 'W', meaning the user won the round LOLOL
    // W's in CHAT LOL
    if (resultMessage.toLowerCase().includes("w")) {
      playerScore++;
      console.log("You won this round!");
    } else {
      computerScore++;
      console.log("You lost this round");
    }
  }

  console.log(`Final Scores Below:`);
  console.log(`You got: ${playerScore}`);
  console.log(`PC got: ${computerScore}`);

  if (playerScore > computerScore) {
    return "You win!";
  } else {
    return "You Lost";
  }
}
