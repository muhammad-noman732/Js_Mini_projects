//  stop watch
 let intervalId;
 let elapsedTime = 0; // Track total time in milliseconds
let isRunning = false; // To check if timer is running
 
 function startTimer(){
    if(!isRunning){
        isRunning = true;
        intervalId = setInterval(() => {
            elapsedTime += 1000; // increase time by 1 seconds (1000 miliseconds)
            updateDisplay()
         }, 1000);
    } 
 }

 function stopTimer(){
     clearInterval(intervalId);
     isRunning = false;
 }

 function resetTimer(){
          clearInterval(intervalId);
          elapsedTime = 0 ;
          isRunning = false;
          updateDisplay();
 }


 function updateDisplay(){
    const miliseconds = elapsedTime;
    let hours   = Math.floor(elapsedTime  /( 1000 * 60 * 60 )).toString().padStart(2 , 0);
    let minutes = Math.floor((elapsedTime /( 1000 * 60) % 60 )).toString().padStart(2 , 0); 
    let seconds = Math.floor((elapsedTime / 1000) % 60 ); 

    document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`
 }
