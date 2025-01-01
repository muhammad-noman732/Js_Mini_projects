// function decleration = define for reusable codeof block

// function hello(){
//     console.log("hello");
// hello();
    
// }
// function expession =  a way to define function as 
//                          value and variables

setTimeout(function(){
    console.log("Hello");
    
} , 3000);

// const hello = function(){
//     console.log("hello");
    
// }
// hello();

const numbers = [1,2,3,4,5,6,7,8,9,10];
//            filtering even and odd numbers...
const even = numbers.filter(function(element){
    return element % 2=== 0 ;

})
const odd = numbers.filter(function(element){
    return element % 2 !== 0 ;

})
console.log(even);
console.log(odd);

// const squares= numbers.map(function(element){
//         return Math.pow(2,element);
//     });
// console.log(squares);
