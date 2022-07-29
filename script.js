// Test a console.log to verify that js successfully linked
// console.log('Hello World!')

// Your game is going to play against the computer, 
// so begin with a function called getComputerChoice that 
// will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’

// Tip: use the console to make sure this is returning the
//  expected output before moving to the next step!

// Found answer using an array
// https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array

// function getComputerChoice() {
//     const choice = ['rock', 'paper', 'scissors'];
//     return choice[Math.floor(Math.random() * choice.length)];
// }


// Write a function that plays a single round of Rock Paper 
// Scissors. The function should take two parameters - the 
// playerSelection and computerSelection - and then return a
//  string that declares the winner of the round like so: 
//  "You Lose! Paper beats Rock"

// Make your function’s playerSelection parameter case-insensitive 
// (so users can input rock, ROCK, RocK or any other variation).

// function playRound(playerSelection, computerSelection) {
//     // your code here!.. You can use an if else statement for this!
//   }
   
//   const playerSelection = "rock";
//   const computerSelection = getComputerChoice();
//   console.log(playRound(playerSelection, computerSelection));

// Write a NEW function called game(). Call the playRound function 
// inside of this one to play a 5 round game that keeps score and 
// reports a winner or loser at the end.
// HINT: Remember loops? This is a great opportunity to use one

// for (let i = 0; i < 5; i++) {
//     // your code here!
//  }