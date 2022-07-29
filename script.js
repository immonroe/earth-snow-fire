// Test a console.log to verify that js successfully linked
// console.log('Hello World!')

// Your game is going to play against the computer, 
// so begin with a function called getComputerChoice that 
// will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’

// Tip: use the console to make sure this is returning the
//  expected output before moving to the next step!

// Found article on Math.random via MDN through stackoverflow
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let computerResponse = getComputerChoice(1, 3);
