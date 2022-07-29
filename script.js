// Test a console.log to verify that js successfully linked
// console.log('Hello World!')

// Your game is going to play against the computer, 
// so begin with a function called getComputerChoice that 
// will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’

// Tip: use the console to make sure this is returning the
//  expected output before moving to the next step!

// Found answer using an array
// https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array

function getComputerChoice(min, max) {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}




// Write a function that plays a single round of Rock Paper 
// Scissors. The function should take two parameters - the 
// playerSelection and computerSelection - and then return a
//  string that declares the winner of the round like so: 
//  "You Lose! Paper beats Rock"



// Make your function’s playerSelection parameter case-insensitive 
// (so users can input rock, ROCK, RocK or any other variation).

