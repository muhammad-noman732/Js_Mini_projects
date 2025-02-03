// destructring : extract the value from array and objects 
//    and assign them to variable in convinien tway
//  [] = use for array destructing 
//  {} = use for objects destructring 
//  exampes 

// 1- swap the value of two variables

var a = 10 ;
var b = 3;
 [a, b] = [b, a];
//  console.log(a);
//  console.log(b);

// 2 = swap elements in array 
var colors = ["red" ,"green" , "blue" , "black"];
[colors[0] , colors[3]] = [colors[3] , colors[0]];
// console.log(colors);
// 

// 3 - Assign array elements t variables 
var colors = ["red" ,"green" , "blue" , "black" ,"yellow"];
// this is spread operator
// let elemnts = [...colors];
// console.log(elemnts);

// destructring and also use spread fro extracting remainning elements
const[firstColor , secondColor , thirdColor, ...extraColors] = colors;
// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);


// 4- extract value from objects
 const person1 = {
    firstName : "noman",
    lastName :"bahoor",
    age : 22,
    job:"enginer"
 }

const person2 = {
    firstName : "ali",
    lastName :"baghoor",
    age : 20
 }
//  for object destrucctring use {}
// we can also set default value
 const{firstName , lastName , age , job = "unemployed"} = person2;
// console.log(firstName);
// console.log(lastName);
// console.log(job);
// console.log(age);


// 5- destructring in function parameters

function displayInfo({firstName , lastName, job, age}){
         console.log(`name ${firstName} ${lastName}`);
         console.log(`age ${age}`);
         console.log(`job ${job}`);
}

const person11 = {
    firstName : "noman",
    lastName :"bahoor",
    age : 22,
    job:"enginer"
 }

const person12= {
    firstName : "ali",
    lastName :"baghoor",
    age : 20
 }

 displayInfo(person11);
 

 

