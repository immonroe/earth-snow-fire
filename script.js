let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

// Get reference to scoreboard div 
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p"); // specifiying a nested element
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// Random selected choices from computer
function getComputerSelection() {
    const choices=["r","p","s"];
    const result = Math.floor(Math.random() * 3);
    return choices[result];
} 

//Converts r,p,s => rock, paper, scissors for output on screen
function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

// Win function, disables buttons at end of game and shows winning message.
function win(playerSelection, computerSelection) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;

    if (userScore < 5){result_p.innerHTML = `${convertToWord(playerSelection)} beats ${convertToWord(computerSelection)}. You win!`;
} else if(userScore === 5){
  result_p.innerHTML="Game over, you win! <button onclick='endGame()'>Click here to play again</button>";

  rock_div.setAttribute("disabled", 1);
  paper_div.setAttribute("disabled", 1);
  scissors_div.setAttribute("disabled", 1);
}

}

// Lose function, disables buttons at end of game and shows losing message.
function lose(playerSelection, computerSelection) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    
    if (compScore<5){result_p.innerHTML = `${convertToWord(computerSelection)} beats ${convertToWord(playerSelection)}. You lose!`;
    } else if (compScore === 5) {
  result_p.innerHTML="Game over, you lose! <button onclick='endGame()'>Play Again!</button>";
  rock_div.setAttribute("disabled", 1);
  paper_div.setAttribute("disabled", 1);
  scissors_div.setAttribute("disabled", 1);
};

}

// Funciton for user and CPU picking the same option
function draw() {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = "It's a tie!";
}

// Game logic, determines win/lose/tie
function game(playerSelection) {
    const computerSelection = getComputerSelection();
    if (playerSelection === computerSelection) {
      draw(playerSelection, computerSelection);
    } else if (playerSelection === "r" && computerSelection === "s"){
      win(playerSelection, computerSelection);  
    } else if (playerSelection === "p" && computerSelection === "r"){
      win(playerSelection, computerSelection);
    } else if (playerSelection === "s" && computerSelection === "p"){
      win(playerSelection, computerSelection);
    } else{
      lose(playerSelection, computerSelection);
    }   
}

// Game end function (disable all buttons and reset score forcing a reset)
function endGame() {
  userScore = 0;
  compScore = 0;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = ``;
  rock_div.removeAttribute("disabled");
  paper_div.removeAttribute("disabled");
  scissors_div.removeAttribute("disabled");
}

// Event listeners
function main() {
  rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissors_div.addEventListener("click", () => game("s"));
}

main();