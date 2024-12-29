 let celciusToFarenHeight = document.getElementById("radio1"); 
 let FarenHeightToCalcius= document.getElementById("radio2");
 let result = document.getElementById("temeparature"); 
 let btn = document.getElementById("converter");
 
 btn.onclick = function(){
    let givenTemperature = Number(document.getElementById("input").value);
    console.log(givenTemperature);
    
    if(celciusToFarenHeight.checked){
       let temp = (givenTemperature *9/5) +32;
       console.log(temp);
       result.textContent = temp+"F"
    }
    else if(FarenHeightToCalcius.checked){
    let temp = (givenTemperature - 32) * 5/9;
    console.log(temp);
    result.textContent = temp +"C"
    
    }
 }