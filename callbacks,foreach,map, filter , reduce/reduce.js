// reduce() = reduce the element of array 
//              to single value

// const prices = [5,20,25,30,40,50,10];
// const total = prices.reduce(sum);

// console.log(`$${total.toFixed(2)}`);

// function sum(previus , next){
//     return previus + next;
// }

//  ============ maximun numbrs +++++++++++++

const grades = [55,78,65,90,30,50,81];

const maximun= grades.reduce(getMax);

console.log(`maximum :${maximun.toFixed(2)}`);

function getMax(previus , next){
    return Math.max(previus , next);
}

