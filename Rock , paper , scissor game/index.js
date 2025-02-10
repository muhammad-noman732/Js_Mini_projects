let choice = ["rock" , "paper" , "scissors"];

let playerDisplay = document.getElementById("playerDisplay");
let computerDisplay = document.getElementById("computerDisplay");
let resultDisplay = document.getElementById("result");
let result = "";
let playerScoreDisplay = document.getElementById("playerScoreDisplay");
let computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerCount = 0 ;
let computerCount = 0 ;

function playGame( playerChoice){
       const computerChoice = choice [Math.floor(Math.random() * 3)];
       
       if (playerChoice === computerChoice) {
          result  = "IT IS TIE";
    
       }
       
       else{

       switch (playerChoice) {
        case "rock":
           result = (computerChoice === "scissors") ? "YOU WIN" :"YOU LOSE"
            break;

        case "paper":
            result = (computerChoice === "rock") ? "YOU WIN" :"YOU LOSE"
            break;

        case "scissors":
            result =  ( computerChoice === "paper") ? "YOU WIN" :"YOU LOSE"
                 break;
       }         
       }

    playerDisplay.textContent = `Player:${playerChoice}`
    computerDisplay.textContent = `Computer:${computerChoice}`
    resultDisplay.textContent =`${result}`

    // Reset the text color classes
       resultDisplay.classList.remove("greenText", "redText");
    switch(result){
        case "YOU WIN":
            resultDisplay.classList.add("greenText");
            playerCount += 1;
            playerScoreDisplay.textContent =  playerCount;
            break;

        case "YOU LOSE":
            resultDisplay.classList.add("redText");
            computerCount += 1
            computerScoreDisplay.textContent = computerCount ;
            break;
    }
}
