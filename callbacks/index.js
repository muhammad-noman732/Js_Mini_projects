// callback = a callback is a function that pass as argument to another function
        // use to handle a synchronus operation":
        // reading a file
        // network request 
        // interacting with databases

//         hello();
//         goodBye();
// function hello(){
//     console.log("hello");
// }

// function goodBye(){
//     console.log("good BYe");
// }
// goodBye();
// hello();

// now underatnding basics of callback
function sum(num1 , num2 , callback){
    let sum = num1 + num2;
    callback(sum);
}

function  displaySum(result){
    console.log("sum is " , result7);
    
}
sum(2, 3 , displaySum);

