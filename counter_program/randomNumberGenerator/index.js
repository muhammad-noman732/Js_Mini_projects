// RANDOM NUMBER GENERATOR
const myBtn = document.getElementById("MyButton");
const label = document.getElementById("myLabel");
const max = 6 ;
const min = 1 ;
let randomNumber;
myBtn.onclick = function(){
    randomNumber = Math.floor(Math.random()* max)+ min;
    label.textContent = randomNumber
}