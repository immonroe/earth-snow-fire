// Test a console.log to verify that js successfully linked
// console.log('Hello World!')

// Your game is going to play against the computer, 
// so begin with a function called getComputerChoice that 
// will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’

// Tip: use the console to make sure this is returning the
//  expected output before moving to the next step!

// Found a solution using an array and using the Math.random method to pick random object in the array
// https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array

// Earth extinguishes fire (rock beats scissors)
// Snow covers earth (paper beats rock)
// Fire melts snow (scissors beats paper)

function getComputerChoice() {
    const choice = ['earth', 'snow', 'fire'];
    return choice[Math.floor(Math.random() * choice.length)];
}

