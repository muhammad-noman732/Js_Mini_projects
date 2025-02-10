const myButton = document.getElementById("myButton");
const myImage  = document.getElementById("img");


// if we have to reservse space than use visibility otherwise display
myButton.addEventListener("click" , (event)=>{
    if(myImage.style.visibility === "hidden"){
          myImage.style.visibility = "visible";
          myButton.textContent = "Hide" 
    }
    else{
        myImage.style.visibility ="hidden";
        myButton.textContent = "show" 
    }
   
})