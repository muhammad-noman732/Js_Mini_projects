// map() = accepts a callback and applies that function 
//             to each element of an array and return a new array
// this is similar to foreach but it returns a new array 

// const numbers = [1,2,3,4,5];
// const squares = numbers.map(square)
// // console.log(squares);
// const cubes= numbers.map(cube)
// console.log(cubes);


// function square (element){
//     return Math.pow(element, 2)
// }
// function cube (element){
//     return Math.pow(element, 3)
// }

//////////////// ++++++++++++++++//////////////////////////////

const dates = ["2024-1-12","2023-2-24","2025-1-20"];

const formattedDates = dates.forEach(formatDates);
console.log(formattedDates);


function formatDates(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`
}