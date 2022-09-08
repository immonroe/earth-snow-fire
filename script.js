let playerScore = 0;
let computerScore = 0;
let draws = 0;

let playerWinRound = 'Player has won the round!'
let computerWinRound = 'CPU has won the round!'
let draw = `It's a draw!`
let playerWin = 'Congrats, you have won the game!'
let computerWin = 'The CPU has won the game!'
let userError = 'Sorry, you did not select one of the three options. Try again.'

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')
const playerScoreSpan = document.querySelector('.player-score')
const computerScoreSpan = document.querySelector('.computer-score')

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
  const p = document.createElement('p')
  if (playerSelection === computerSelection) {
    draws++;
    p.innerText = draw;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection=== 'rock' ||playerSelection === 'scissors' &&computerSelection === 'paper') {
    playerScore++
    p.innerText = playerWinRound;
  }
  else if (playerSelection === 'scissors' && computerSelection === 'rock' || playerSelection === 'rock' && computerSelection=== 'paper' ||playerSelection === 'paper' &&computerSelection === 'scissors') {
    computerScore++;
    p.innerText = computerWinRound;
  } else {
     p.innerText = userError;
  }
  outcomeDiv.appendChild(p)

}

const checkForWinner = (playerScore, computerScore) => {
  const h2 = document.createElement('h2')
  console.log(playerScore, computerScore)
  if (playerScore === 5) {
    h2.classList.add('player-won')
    h2.innerText = playerWin;
  } 
  if (computerScore === 5) {
    h2.classList.add('computer-won')
    h2.innerText = computerWin;
  }
  outcomeDiv.append(h2) // winner/loser message appears after scoring 5 points

}

const updateScores = (playerScore, computerScore) => {
  playerScoreSpan.innerText = `Player Score: ${playerScore}`
  computerScoreSpan.innerText = `Computer Score: ${computerScore}`
}

rockButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice()
  const playerSelection = 'rock'
  playRound(playerSelection, computerSelection)
  updateScores(playerScore, computerScore)
  checkForWinner(playerScore, computerScore)
})

paperButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice()
  const playerSelection = 'paper'
  playRound(playerSelection, computerSelection)
  updateScores(playerScore, computerScore)
  checkForWinner(playerScore, computerScore)
})

scissorsButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice()
  const playerSelection = 'scissors'
  playRound(playerSelection, computerSelection)
  updateScores(playerScore, computerScore)
  checkForWinner(playerScore, computerScore)
})

// // Using a for loop to play multiple rounds of the game, the game will also console.log() the score after each round
// for (let i = 0; i < 999; i++) {
//     let playerChoice = prompt('Which will you choose? Rock, paper, or scissors?').toLowerCase();
//     const computerSelection = getComputerChoice();
//     let roundResult = playRound(playerChoice, computerSelection);
//     console.log(roundResult);
//     gameScore(roundResult);
//     console.log('Your score is ' + playerScore);
//     console.log('The CPU score is ' + computerScore);

//     // Game ends when either player or CPU wins 5 rounds total
//     // if (playerScore === 5 || computerScore === 5) {
//       // break;
//     }
//   // }

//   // A function that keeps track of the score in the game
//   // Also announces winner of game when either user or CPU wins 5 rounds total
// function gameScore(result) {
  
//     if (result === playerWinRound) {
//       playerScore++;
//     } else if (result === draw) {
//       draws++;
//     } else if (result === computerWinRound) {
//       computerScore++;
//     } else (result === userError)
//       return userError;

  
  // remove logic to play exactly 5 rounds
    // if (playerScore === 5) {
    //   console.log(playerWin);
    //   return;
    // }
    // if (computerScore === 5) {
    //   console.log(computerWin);
    //   return;
    // }
  // }