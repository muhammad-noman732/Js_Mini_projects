// Error => an object that is created to represent a problem that occur
//             often with userInput and establishing connection 


try {
// Network error
// PROMOISE REJECTION
// SECURITY ERRORS
    console.log(x);
} 
catch (error) {
    // ye tb chlta h jb try block m error a jae
    console.error(error);
    
}
finally{
    // CLOSE FILES
    // CLOSE CONNECTION
    // RELEASE RESOURCES
    console.log("finnaly hmesha chlta h");
    
}

// problem can be arises bcz of wrong userinput

try {
let dividient =Number(prompt("enter dividient"));
let divisor = Number(prompt("enter divisor"));
console.log(dividient / divisor);

if(divisor == 0 ){
    throw new Error(" divisor can,t be 0")
}
if(isNaN(dividient ) || isNaN(divisor)){
    throw new Error ("value must be number")
} 

    
} catch (error) {
     console.error(error);
     
}

console.log(`You have reached the end`);

