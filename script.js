const button = document.querySelectorAll("button")
button.forEach(button => {
  button.addEventListener("click", function() {
    console.log('Button clicked!')
  })
})

humanScore = 0
computerScore = 0
roundCount = 1



function playGame() {
  playRound()
  roundCount ++
  console.log(`Player Score - ${humanScore}`)
  console.log(`Computer Score - ${computerScore}`)
}



function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getHumanChoice() {
  let choice = prompt(`Rock, Paper, or Scissors?`)
  return choice.toLowerCase()
}

function playRound(humanChoice, computerChoice) {

  humanChoice = getHumanChoice()
  computerChoice = getComputerChoice()
  
  if (humanChoice === computerChoice) {

    console.log("It's a tie!")
    return "It's a tie!";
  }

  if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      humanScore ++
      console.log("You win! Rock beats scissors.")
      return "You win! Rock beats scissors.";
    } else {
      computerScore ++
      console.log("You lose! Paper beats rock.")
      return "You lose! Paper beats rock.";
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore ++
      console.log("You win! Paper beats rock.")
      return "You win! Paper beats rock.";
    } else {
      computerScore ++
      console.log("You lose! Scissors beats paper.")
      return "You lose! Scissors beats paper.";
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      humanScore ++
      console.log("You win! Scissors beats paper.")
      return "You win! Scissors beats paper.";
    } else {
      computerScore ++
      console.log("You lose! Rock beats scissors.")
      return "You lose! Rock beats scissors.";
    }
  } else {
    console.log("That is not a valid option, please try again.")
    return "That is not a valid option, please try again."
  }
}

playGame();