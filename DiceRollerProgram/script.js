let myInput = document.getElementById("myInput");
let button = document.getElementById("myBtn");
let diceNum = document.getElementById("dices");
let diceImages = document.getElementById("images");
let array = [];
let images = [];
let randomNum;

button.onclick = function(){
    let num = Number(myInput.value);
    //  console.log(num);
    // restrcition for number between 1 and 6
    if (num < 1 || num > 6 ){
        let para = document.getElementById("para");
        para.textContent = `please enter the number between 1 and 6 `;
        para.style.color= "red";
        return;
    
    }
    // reset the par content if user enter the correct number than this one should not show 
     para.textContent = "";
    // Reset the array and content as for next check the previous will not show
    array = [];
    images = [];
    diceNum.textContent = "";
    diceImages.innerHTML=""
    for(let i = 0 ; i < num ; i++){
        randomNum  = Math.floor(Math.random() * 6)+ 1;
        array.push(randomNum);
        images.push(`<img src="images/dice${randomNum}.png">`)
        }
        diceNum.textContent = `dice:${array.join(', ')}`;
        diceImages.innerHTML= images.join(" ");

}