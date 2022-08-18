// Test a console.log to verify that js successfully linked
// console.log('Hello World!')

// Your game is going to play against the computer, 
// so begin with a function called getComputerChoice that 
// will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’

// Tip: use the console to make sure this is returning the
//  expected output before moving to the next step!

// Found a solution using an array and using the Math.random method to pick random object in the array
// https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
// https://stackoverflow.com/questions/28737679/rock-paper-scissor-javascript-using-arrays-beginner

// Earth extinguishes fire (rock beats scissors)
// Fire melts snow (scissors beats paper)
// Snow covers earth (paper beats rock)

// Add tally variables to game to keep score
let playerScore = 0;
let computerScore = 0;
let draws = 0;

// Add computer choice options
function getComputerChoice() {
    const choice = ['earth', 'snow', 'fire'];
    return choice[Math.floor(Math.random() * choice.length)];
}

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters
// the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: 
// "You Lose! Paper beats Rock"

// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

// Important note: you want to return the results of this function call, not console.log() them.
// You’re going to use what you return later on, so let’s test this function by using console.log to see the results:

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return draw;
    } else if (playerSelection === 'earth' && computerSelection === 'fire' || playerSelection === 'snow' && computerSelection=== 'earth' ||playerSelection === 'scissors' &&computerSelection === 'snow') {
        return playerWinRound;
    }
    else {
        return computerWinRound;
    }
  }

//Create messages for in-game win/loss/draw
let playerWinRound = 'Player has won the round!'
let computerWinRound = 'CPU has won the round!'
let draw = 'Draw!'
let playerWin = 'Congrats, you have won the game!'
let computerWin = 'Computer wins the game! Congratulations!'

  const playerSelection = 'Earth'.toLowerCase();
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

// //   Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round
// //   game that keeps score and reports a winner or loser at the end.

function game() {
    for (let i = 0; i < 5; i++) {

        }
    }