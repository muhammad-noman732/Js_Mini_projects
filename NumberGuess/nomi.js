


let attempts = 0;
const maxAttempts = 10;
let randomNumber;

function startGame(){
    randomNumber = Math.floor(Math.random() * 100)+ 1;
    attempts = 0; // always reset attemps when new Game start
    document.getElementById("attempts").textContent =attempts;
    document.getElementById("myInput").disabled = false;
    document.getElementById("message").textContent = "";
    document.getElementById("checkBtn").disabled = false;
    document.getElementById("resetButton").style.display = "none";
   
}

function checkGuess(){
    let guess = Number(document.getElementById("myInput").value);
    let messageElement = document.getElementById("message");
    let attemptsElement = document.getElementById("attempts");
    if(guess == isNaN() || guess > 100 || guess < 1){
        messageElement.textContent = `Enter a valid number between 1 and 100`;
        messageElement.style.color= "red";
        return;
    }
    attempts++;
    attemptsElement.textContent = attempts;
    // if user guess the  correct
    if(guess === randomNumber){
        messageElement.textContent= `congratulation you guess the correct Number after ${attempts} attempts`;
        messageElement.style.color ="green";
        endGame();
    }
    else if (guess > randomNumber){
        document.getElementById("message").textContent = `Too High`;
        messageElement.style.color= "red";

    }
    
    else if (guess < randomNumber){
         document.getElementById("message").textContent = `Too Low`;
         messageElement.style.color= "red";
    }
    // check if user guess more than 10 times
    if(attempts >= maxAttempts){
        messageElement.textContent = `Game Over Correct number was ${randomNumber} !` ;
        messageElement.style.color= "red";
        endGame();
    }
    // clear the input for next guess 
document.getElementById("myInput").value = " ";

}

function endGame(){
    document.getElementById("resetButton").style.display= "inline-block";
    document.getElementById("myInput").disabled = true;
    document.getElementById("checkBtn").disabled =  true;
}


function resetGame(){
    startGame();
}

startGame();