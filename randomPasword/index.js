let button = document.getElementById("myBtn");
let result = document.getElementById("result");
let allCharacters ;

button.onclick = function(){
    let length = Number(document.getElementById("myInput").value);
    let lowerCase= "abcdefghijklmnopqrstvuwxyz";
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers= "0123456789";
    let specialCharacters = "!@#$%^&*()_+?";
    allCharacters = lowerCase+ upperCase+ numbers + specialCharacters;
    // every time button clicked it is set to empty
    let generatedPassword = "";
    for (let i = 0 ; i < length ; i++){
        let randomIndex=  Math.floor(Math.random() * allCharacters.length);
        generatedPassword += allCharacters[randomIndex];
        
    }
    // Validate password
    if (generatedPassword.length < 8) {
        result.textContent = `Please enter at least 8 characters for the password.`;
        result.style.color = "red";
        return;  // Exit the function to prevent further checks
    }
    if (!generatedPassword.match(/[!@#$%^&*()_+?]/)) {
        result.textContent = `Include at least one special character in the password.`;
        result.style.color = "red";
        return;  // Exit the function if it doesn't have a special character
    }
    if (!generatedPassword.match(/[A-Z]/)) {
        result.textContent = `Include at least one uppercase letter in the password.`;
        result.style.color = "red";
        return;  // Exit the function if it doesn't have an uppercase letter
    }
    if (!generatedPassword.match(/[a-z]/)) {
        result.textContent = `Include at least one lowercase letter in the password.`;
        result.style.color = "red";
        return;  // Exit the function if it doesn't have a lowercase letter
    }

// console.log(generatedPassword);
result.textContent = generatedPassword;
result.style.color="green"
    
}