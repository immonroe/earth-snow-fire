// Found a solution using an array and using the Math.random method to pick random object in the array
// https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
// https://stackoverflow.com/questions/28737679/rock-paper-scissor-javascript-using-arrays-beginner

// Earth extinguishes fire (rock beats scissors)
// Fire melts snow (scissors beats paper)
// Snow covers earth (paper beats rock)

// Add a way to keep track of score throughout the game
let playerScore = 0;
let computerScore = 0;
let draws = 0;

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
        return draw;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection=== 'rock' ||playerSelection === 'scissors' &&computerSelection === 'paper') {
        return playerWinRound;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock' || playerSelection === 'rock' && computerSelection=== 'paper' ||playerSelection === 'paper' &&computerSelection === 'scissors') {
        return computerWinRound;
    } else {
        return userError;
    }
  }

//Create messages for in-game win/loss/draw/error
let playerWinRound = 'Player has won the round!'
let computerWinRound = 'CPU has won the round!'
let draw = 'Draw!'
let playerWin = 'Congrats, you have won the game!'
let computerWin = 'The CPU has won the game!'
let userError = 'Sorry, you did not select one of the three options. Try again.'

// Using a for loop to play multiple rounds of the game, the game will also console.log() the score after each round
for (let i = 0; i < 99; i++) {
    let playerChoice = prompt('Which will you choose? earth, fire, or snow?').toLowerCase();
    const computerSelection = getComputerChoice();
    let roundResult = playRound(playerChoice, computerSelection);
    console.log(roundResult);
    gameScore(roundResult);
    console.log('Your score is ' + playerScore);
    console.log('The CPU score is ' + computerScore);

  // remove logic to play exactly 5 rounds
    // Game ends when either player or CPU wins 5 rounds total
  //   if (playerScore === 5 || computerScore === 5) {
  //     break;
  //   }
  }

  // A function that keeps track of the score in the game
  // Also announces winner of game when either user or CPU wins 5 rounds total
function gameScore(result) {
  
    if (result === playerWinRound) {
      playerScore++;
    } else if (result === draw) {
      draws++;
    } else if (result === computerWinRound) {
      computerScore++;
    } else (result === userError)
      return userError;

  
  // remove logic to play exactly 5 rounds
    // if (playerScore === 5) {
    //   console.log(playerWin);
    //   return;
    // }
    // if (computerScore === 5) {
    //   console.log(computerWin);
    //   return;
    // }
  }