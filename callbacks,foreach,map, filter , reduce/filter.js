// filter() = create a new array by filtering  array elements
                                
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 8, 12, 9, 10];

// const eveneNumbers = numbers.filter(isEven);
// console.log(eveneNumbers);
// const oddNumbers = numbers.filter(isOdd);
// console.log(oddNumbers);

// function isEven(element) {
//   return element % 2 === 0;
// }

// function isOdd(element) {
//     return element % 2 !== 0;
//   }

//           ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const ages = [12,34,45,21,22,,13,14,20];

// const child= ages.filter(isChild);
// console.log(child);
// const adult = ages.filter(isAdult);
// console.log(adult);

// function isChild(age){
//     return age < 18;
// }

// function isAdult(age){
//     return age > 18;
// }

// +++++++++++++++++++++++++++++++++  New problem   +++++++++++++++++++++++++++++++++++++++++

const words = ["ali","apple","coconut","pineapple" ,
                "banana", "kiwi"];

const shortWord= words.filter(greaterThanSix);
console.log(shortWord);

function greaterThanSix(element){
    return element.length <= 6;
}