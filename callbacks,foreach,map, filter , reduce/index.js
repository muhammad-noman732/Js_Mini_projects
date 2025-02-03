// callback = a callback is a function that pass as argument to another function
        // use to handle a synchronous operation":
        // reading a file
        // network request 
        // interacting with databases
        // hey when you are done call this next 

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
// function sum(num1 , num2 , callback){
//     let sum = num1 + num2;
//     callback(sum);
// }

// function  displaySum(result){
//     console.log("sum is " , result);
    
// }
// 
// sum(2, 3 , displaySum);



//                      foreach()
// forEach() is an array method in JavaScript that is used to iterate over every element of the array. 

// let numbers = [1,2,3,4,5];
// // behind the scene callback function ko array ka index , array aur value di jati h
// numbers.forEach(double);
// console.log("double");

// numbers.forEach(display)
// numbers.forEach(triple);
// console.log("triple");
// numbers.forEach(display)
// numbers.forEach(square)
// console.log("square");
// // - When numbers.forEach(display) is called, the forEach() method will loop through the numbers array, and for each element, it will call the display function.
// numbers.forEach(display);
// function double(element , index , array){
//     array[index] = element * 2;
// }

// function triple(element , index , array){
//     array[index] = element * 3;
// }

// function square(element , index , array){
//     array[index] =Math.pow(element , 2)
// }

// function display(element){
//     console.log(element);
// }


                       //  lets try another examples...

let fruits = ["apple" , "banana","new year","mango"];
fruits.forEach(upperCase);
fruits.forEach(display);
fruits.forEach(lowerCase);
fruits.forEach(display);
fruits.forEach(captalize);
fruits.forEach(display);
function upperCase(element , index , array){
    array[index] = element.toUpperCase();
}
function lowerCase(element , index , array){
        array[index] = element.toLowerCase();
    }
function captalize(element , index , array){
        array[index] = element.charAt(0).toUpperCase() + element.slice(1);
    }
function display(element){
    console.log(element);  
}