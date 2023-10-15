let buttons = document.querySelectorAll('.buttons button');

let computerscore = document.getElementById('Computer-score');
let resultel = document.getElementById('result');
let userscore = document.getElementById('user-score');
let arr = ['rock','paper','scissors'];
let playerscore = 0;
let computerScore = 0;
buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
         const result = playRound(btn.id, computerPlay());
        resultel.textContent = result;

    })
})
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
    
  }



    






function playRound(playerSelection,computerSelection){
    if (playerSelection === computerSelection) {
        return "It's a tie!";
      } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
      ) {
        playerscore++;
       userscore.textContent = playerscore;
        return "You win! " + playerSelection + " beats " + computerSelection;
      } else {
        computerScore++;
        computerscore.textContent = computerScore;
        return "You lose! " + computerSelection + " beats " + playerSelection;
      }
    }



