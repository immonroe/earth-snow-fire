let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerSelection() {
    const choices=["rock","paper","scissors"];
    const result = Math.floor(Math.random() * 3);
    return choices[result];
} 

// Win function, disables buttons at end of game and shows winning message.
function win(playerSelection, computerSelection) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;

    if (userScore < 5){result_p.innerHTML = ` You win! ${playerSelection} beats ${computerSelection}.`;
    } else if(userScore === 5){
    result_p.innerHTML="Congrats, you win! <button onclick='endGame()'>Click here to play again</button>";

    rock_div.setAttribute("disabled", 1);
    paper_div.setAttribute("disabled", 1);
    scissors_div.setAttribute("disabled", 1);
    }
}

function lose(playerSelection, computerSelection) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    
    if (compScore<5){result_p.innerHTML = `You lose! ${(computerSelection)} beats ${(playerSelection)}.`;
    } else if (compScore === 5) {
      result_p.innerHTML="Game over, you lose! <button onclick='endGame()'>Play Again?</button>";
      rock_div.setAttribute("disabled", 1);
      paper_div.setAttribute("disabled", 1);
      scissors_div.setAttribute("disabled", 1);
    }
}

function draw() {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = "It's a tie!";
}

function game(playerSelection) {
    const computerSelection = getComputerSelection();
    if (playerSelection === computerSelection) {
      draw(playerSelection, computerSelection);
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
      win(playerSelection, computerSelection);  
    } else if (playerSelection === "paper" && computerSelection === "rock"){
      win(playerSelection, computerSelection);
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
      win(playerSelection, computerSelection);
    } else{
      lose(playerSelection, computerSelection);
    }   
}

function endGame() {
  userScore = 0;
  compScore = 0;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = '';
  rock_div.removeAttribute("disabled");
  paper_div.removeAttribute("disabled");
  scissors_div.removeAttribute("disabled");
}

function main() {
  rock_div.addEventListener("click", () => game("rock"));
  paper_div.addEventListener("click", () => game("paper"));
  scissors_div.addEventListener("click", () => game("scissors"));
}

main();