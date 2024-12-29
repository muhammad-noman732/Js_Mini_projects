// let attempts = 0  ;
// let min = 50;
// let max = 100 ;
// let guess  = document.getElementById("inputNum").value;
// let result = document.getElementById("result");
// const btn = document.getElementById("myBtn");
// btn.onclick = function(){

//     let randomNumber = Math.floor(Math.random() * ( max-min)) + min;
//     console.log(randomNumber);
//     attempts++;
//     if(guess > randomNumber){
//         result.textContent = `Too high`;
//         max = randomNumber;
//     }
//     else if (guess < randomNumber){
//         // console.log(`Too Low`);
//         result.textContent = `Too low`
//         min= randomNumber
//     }
//     else{
//         if(guess == randomNumber){
//             // console.log(`congratulation you won after ${attempts}`);
//             result.textContent = `congratulation you won after ${attempts} attempts`
//         }
//         else{
//             result.textContent = `enter a valid number between ${min} and ${max}`
//             // console.log(`enter a valid number between ${min} and ${max}`);
//         }
//     }
// }


// Declare the necessary variables
let randomNumber;
let attempts = 0;
const maxAttempts = 10;  // Limit the number of attempts

// Function to start a new game
function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
    attempts = 0; // Reset attempts
    document.getElementById('attempts').textContent = attempts; // Update attempts display
    document.getElementById('message').textContent = ''; // Clear the message
    document.getElementById('guessInput').disabled = false; // Enable the input field
    document.querySelector('button').disabled = false; // Enable the guess button
    document.getElementById('resetButton').style.display = 'none'; // Hide the reset button
}

// Function to handle the guessing logic
function checkGuess() {
    let userGuess = parseInt(document.getElementById('guessInput').value); // Get the user's guess from the input field
    let messageElement = document.getElementById('message'); // Element to display the result message
    let attemptsElement = document.getElementById('attempts'); // Element to display the number of attempts

    // Check if the input is valid
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageElement.textContent = "Please enter a valid number between 1 and 100.";
        messageElement.style.color = "red";
        return;
    }

    // Increment the number of attempts
    attempts++;
    attemptsElement.textContent = attempts;

    // Check if the guess is correct
    if (userGuess === randomNumber) {
        messageElement.textContent = `Congratulations! You guessed the correct number: randomNumber. It took you{attempts} attempts.`;
        messageElement.style.color = "green";
        endGame();
    } else if (userGuess < randomNumber) {
        messageElement.textContent = "Too low! Try again.";
        messageElement.style.color = "red";
    } else if (userGuess > randomNumber) {
        messageElement.textContent = "Too high! Try again.";
        messageElement.style.color = "red";
    }

    // Check if the user has used all attempts
    if (attempts >= maxAttempts) {
        messageElement.textContent = `Game Over! The correct number was ${randomNumber}.`;
        messageElement.style.color = "orange";
        endGame();
    }

    // Clear the input field for the next guess
    document.getElementById('guessInput').value = '';
}

// End the game: disable inputs and show the reset button
function endGame() {
    document.getElementById('guessInput').disabled = true; // Disable the input field
    document.querySelector('button').disabled = true; // Disable the guess button
    document.getElementById('resetButton').style.display = 'inline-block'; // Show the reset button
}

// Function to reset the game
function resetGame() {
    startGame(); // Start a new game
}

// Initialize the game when the page loads
startGame();


// 