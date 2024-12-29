let counter = 0 ;
let resetBtn = document.getElementById("reset");
let decreaseBtn = document.getElementById("decrease");
let increaseBtn = document.getElementById("increase");

decreaseBtn.onclick = function(){
   document.getElementById("myH1").textContent -= 1;
  
    
}
resetBtn.onclick = function(){
    document.getElementById("myH1").textContent = 0;
  
}
// Increase by 1
increaseBtn.onclick = function(){
    let myH1= document.getElementById("myH1") ;
    // convert the value of H1 into Number
    let currentVal = Number(myH1.textContent);
    // increament the value
    currentVal +=1 ;
    // change the value of h1
    myH1.textContent= currentVal;
}