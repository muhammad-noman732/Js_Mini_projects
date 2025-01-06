
let button  = document.getElementById("myButton");
let dices   = document.getElementById("dices"); 
let image = document.getElementById("images");
let randomNumber;
button.onclick = function(){
    let array  = [];
    let images = [];
    let value = document.getElementById("myInput").value;

   if (value <=0 || value > 6){
    let para = document.getElementById("para");
    para.textContent = "please enter a valid number between 1  and 6";
    para.style.color = "red";
    return ;
   }

   para.textContent = "";
   dices.textContent = "";
   image.textContent = "";
   
    for (let i = 0 ; i < value ; i++){
        randomNumber = Math.floor(Math.random() * 6 ) + 1 ;
        console.log(randomNumber);
        array.push(randomNumber);
        images.push(`<img src="dice${randomNumber}.png">`)
    }
    
    dices.textContent = `dices: ${array.join(',')}`;
    image.innerHTML= images.join(" ");
}