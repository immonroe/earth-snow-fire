// Add a way to keep track of score throughout the game
let playerScore = 0;
let computerScore = 0;
let draws = 0;

//Create messages for in-game win/loss/draw/error
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

// Your game is going to play against the computer, 
// so begin with a function called getComputerChoice that 
// will randomly return either one of your options
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters
// the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: 
// "You Lose! x beats y"
function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    draws++;
    const p = document.createElement('p')
    p.innerText = draw;
    outcomeDiv.appendChild(p)
  } else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection=== 'rock' ||playerSelection === 'scissors' &&computerSelection === 'paper') {
    playerScore++
    const p = document.createElement('p')  
    p.innerText = playerWinRound;
    outcomeDiv.appendChild(p)
  }
  else if (playerSelection === 'scissors' && computerSelection === 'rock' || playerSelection === 'rock' && computerSelection=== 'paper' ||playerSelection === 'paper' &&computerSelection === 'scissors') {
    computerScore++;
    const p = document.createElement('p')
    p.innerText = computerWinRound;
    outcomeDiv.appendChild(p)
  } else {
    const p = document.createElement('p')
    p.innerText = userError;
    outcomeDiv.appendChild(p)
  }
}

const checkForWinner = (playerScore, computerScore) => {
  console.log(playerScore, computerScore)
  if (playerScore === 5) {
    const h2 = document.createElement('h2')
    h2.classList.add('player-won')
    h2.innerText = playerWin;
    outcomeDiv.append(h2) // winner message appears after scoring 5 points
  } 
  if (computerScore === 5) {
    const h2 = document.createElement('h2')
    h2.classList.add('computer-won')
    h2.innerText = computerWin;
    outcomeDiv.append(h2) // losing message appears after cpu scores 5 points

  }
}

rockButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice()
  const playerSelection = 'rock'
  playRound(playerSelection, computerSelection)
  checkForWinner(playerScore, computerScore)
})

paperButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice()
  const playerSelection = 'paper'
  playRound(playerSelection, computerSelection)
  checkForWinner(playerScore, computerScore)
})

scissorsButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice()
  const playerSelection = 'scissors'
  playRound(playerSelection, computerSelection)
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