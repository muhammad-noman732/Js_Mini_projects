// dates objects ==> the bjects that contain value that represents date and time
//                   These objects can be chaneged and formatted 

// const date = new Date("2025-01-31T03:09:38Z");
// console.log(date);

const timestaps = new Date(1700000000);
console.log( timestaps);

const date  = new Date();
const year  = date.getFullYear();
const month = date.getMonth();
const day   = date.getDay();
const minutes = date.getMinutes()
const hours = date.getHours()
const miliSeconds = date.getMilliseconds()
// console.log(date);
// console.log(month);
// console.log(year);
// console.log(day);
// console.log(minutes);
// console.log(hours);
// console.log(miliSeconds);

date.setFullYear(2022)
date.setMonth(2)
date.setHours(5)
date.setDate(21)
date.setMinutes(22)
date.setSeconds(3)
console.log(date);








