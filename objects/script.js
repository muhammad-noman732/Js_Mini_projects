// this = refrence to object where THIS is used 
//         (the object depend on  the immediate context)
//          person.name = this.name

// const person1 = {
//     name:"noamn",
//     age:21,
//     food:"spongbob",
//     sayhello: function(){
//         console.log(`hi i am ${this.name}`);
//     },
//     eat: function(){
//         console.log(`${this.name} eats ${this.food}`);
        
//     }
// }
// console.log(person1.name);
// person1.sayhello();
// person1.eat();



//    constructor = special method defining the method and properties 
//                      of objects

function Car(make, model , year,color){
    this.make= make,
    this.model = model,
    this.year = year,
    this.color =color,
    this.drive = function(){
        console.log(`you drive the  ${this.model}`);
        
    }
}

const car1 = new Car("civic","mustang",2022 ,"red");
const car2 = new Car("ford","camerio",2020 ,"blue");
const car3 = new Car("lombergini","charger",2010 ,"white");
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive();

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
car3.drive();