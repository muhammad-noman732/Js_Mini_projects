// sort() => use to sort element of array in place 
//                sort element as string in lexacographical order, not alphabetic
//                  lexacographical ( alphabet + number + )

let number = [1,2 , 10 , 5 ,8,2,4,7,11 ];
//  this will sort according to  lexacographical 
number.sort();
// console.log(number);[1, 10, 11, 2, 2, 4,  5,  7, 8]

//  to sort in asending and decending order 
number.sort((a , b)=> a- b )
// console.log(number);

//  desending order 
number.sort((a , b)=> b- a )
// console.log(number);

const people = [
    {name : "noman" , age:22 , gpa : 3.68},
    {name : "ashbil" , age:23 , gpa : 3.5},
    {name : "malik" , age:21 , gpa : 3.8},
    {name : "sohaib" , age:20 , gpa : 3.6}
]

//  sort on the base of name in asending order 
// people.sort((a, b)=> a.age - b.age);
people.sort((a, b)=> a.name.localeCompare(b.name));
// console.log(people);

// shuffle the array
// fisher yaters algoriths 
const cards = ["A",3,3,4,5,6,7,8,9,10,"J","Q","k"];

function shuffle(cards){
    for (let i = cards.length-1 ; i > 0 ; i--) {
        let random = Math.floor(Math.random() *(i+1));
        // swap using destructring 
        [cards[i], cards[random]]   = [cards[random] , cards[i]];
    }
}
shuffle(cards);
console.log(cards);

