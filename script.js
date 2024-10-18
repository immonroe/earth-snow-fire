humanScore = 0
computerScore = 0

function playGame() {
  for (i = 0; i < 5; i ++) {
    playRound()
    console.log(`Computer Score - ${computerScore}`)
    console.log(`Player Score - ${humanScore}`)
  }
  
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getHumanChoice() {
  let choice = prompt('Would you like to pick rock, paper, or scissors?')
  return choice.toLowerCase()
}

function playRound(humanChoice, computerChoice) {

  humanChoice = getHumanChoice()
  computerChoice = getComputerChoice()
  
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }

  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      humanScore ++
      return "You win! Rock beats scissors.";
    } else {
      computerScore ++
      return "You lose! Paper beats rock.";
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore ++
      return "You win! Paper beats rock.";
    } else {
      computerScore ++
      return "You lose! Scissors beats paper.";
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      humanScore ++
      return "You win! Scissors beats paper.";
    } else {
      computerScore ++
      return "You lose! Rock beats scissors.";
    }
  } else {
    return 'That is not a valid option, please try again.'
  }
}

playGame();