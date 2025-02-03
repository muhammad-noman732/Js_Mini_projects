// this = refrence to object where THIS is used 
//         (the object depend on  the immediate context)
//          person.name = this.name

// const person1 = {
//     name:"noman",
//     age :21,
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
    this.make  = make,
    this.model = model,
    this.year  = year,
    this.color = color,
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


// Nested objects = object inside the others object 
//                  allow you to represent more complex data structure 
//                  child object is enclosed by parent object 
//                  
//                  person{address{} , contactINfo{}}
//                  shoppingcart{mouse{} , keyBoard{ } , monitor{}}

const person = {
    fullName : "muammad noman",
    isStudent : true,
    age :22,
    hobbies:["cricket" , "reading " ,"coding"],
    // nested objects 
    address:{
        street:"123 adhikot st",
        city: "khushab",
        country:"pakistan"
    }
}

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies);
// console.log(person.hobbies[1]);
// console.log(person.address);
// console.log(person.address["street"]);
// console.log(person.address.city);

// printing key value pairs

for(const val in person){
    // console.log(val ,":" ,person[val]);
    
}
// printing properties of nested object address
for(const property in person.address){
    // console.log(property , ": ", person.address[property]);
    
}

// using classes nested objects 

class Person {
     constructor(name , age , ...address){
          this.name = name,
          this.age = age ,
          this.address = new Address(...address)
     }
}

class Address {
       constructor(street , city, country){
            this.street = street,
            this.city = city,
            this.country = country
       }
}

const person1 =new Person("noman" , 22, "123 st" , "adhukot","pakistan"); 
const person2 =new Person("ramzan" , 23, "121 st" , "adhikot","ireland"); 
const person3 =new Person("arslan" , 24, "123 street 32" , "lahore","hindustan"); 
// console.log(person1.address);
// console.log(person3.address.country);

//                most important 

// how to make array of objects
 
const fruits = [
     { name :"orange", color: "orange", calerios: 45},
     {name :"apple", color: "red", calerios:  90 },
     { name :"banana", color: "yellow", calerios: 105},
     {name :"coconut", color: "white" , calerios: 15 },
     {name :"pineapple", color: "yellow", calerios: 30}
]
// console.log(fruits[1].name);
// console.log(fruits[2].color);
// console.log(fruits[1].calerios);
// console.log(fruits[0].calerios);
// console.log(fruits[4].calerios);

//  to remove  a last object 
// fruits.pop();
// console.log(fruits);
//  to add a new Object

fruits.push({name:"grapes" , color :"purpule" , calerios: 48})
// console.log(fruits);

//   use of splice
 fruits.splice(1 , 2 ); // 1 index se 2 element ko remove kr diya 
//  console.log(fruits);
 
// ---------------------  foreach      ----------- 

 fruits.forEach( fruit => console.log(fruit.calerios))

//  --------------------- map -----------------
//     return a new array 
const fruitNames = fruits.map(fruit => fruit.name );
const colorNames = fruits.map(fruit => fruit.color );
const caleriosNames = fruits.map(fruit => fruit.calerios);
// console.log(fruitNames);
// console.log(colorNames);
// console.log(caleriosNames);


// -----------------   filter method -------------
yellowFruits  = fruits.filter ( fruit => fruit.color === "yellow");
const lowerCalarioes = fruits.filter((fruit) => 
                                        { return fruit.calerios < 100
                                        });
// console.log(lowerCalarioes);
// console.log(yellowFruits);


// -----------------   reduce method -------------
//    it returns a single value

const maxFruit = fruits.reduce((max , fruit)=> 
                                   fruit.calerios > max.calerios ? fruit : max)
console.log(maxFruit);
