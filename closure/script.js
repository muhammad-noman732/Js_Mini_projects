// closure = a function defined inside of another function
//             the inner function has acces to variable
//             and scope of outer function.
//             Allow for state variables and maintenance
//             used frequently in js frameworks react , vue and angular


// function init(){
//     let name = "Mozila";

//     function display(){
//         console.log(name);
        
//     }
//     display()
// }

// init();

// another example
function makeFunc() {
    const name = "Mozilla";
    
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();


//   this function maintain the state and 
function makeCounter(){
let count = 0;
 function increment(){
    count++;
    console.log(`count increment by ${count}`);
   } 

function getCount(){
    return count;
}
//    return object
   return { increment , getCount}
}

let counter = makeCounter()
counter.increment(); 
// it will maintin the state 
counter.increment();
counter.increment();
console.log(counter.getCount());



function createGame(){
    let score = 0 ; 
    function incrementScore(points){
        score += points;
        console.log(`+${points} pts`);
    
    }

    function decrementScore(points){
        score -= points;
        console.log(`-${points} pts`);
         
    }

    function getScore(){
        return score
    }

    return {incrementScore , decrementScore, getScore};
    
}

const result = createGame();
result.incrementScore(5);
result.incrementScore(6);
result.decrementScore(3);
console.log(`final score is ${result.getScore()}`);



