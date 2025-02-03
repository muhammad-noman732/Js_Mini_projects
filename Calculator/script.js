// CALCULATOR PROGRAM 

let  display = document.getElementById("display");

function AppendToDisplay(input){
    display.value +=  input;
    
}

function calculate(){
    // eval takes an expression and evaluate it 
    // like eval(1+2+3) = 6
    try {
        display.value = eval(display.value);
    } catch (error) {
         display.value = "Error";
    }
      
}

function clearDisplay(){
    display.value = ""
}