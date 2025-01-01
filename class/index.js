//               ... Class ...
// class Product {
//     constructor (name ,price){
//         this.name = name,
//         this.price = price
//     }
//     displayProduct(){
//         console.log(`product:${this.name} `);
//         console.log(`price: $${this.price.toFixed(2)} `); 
//     }

//     calculateTotalTax(tax){
//         return this.price + (this.price * tax);
//     }
// } 

// const salesTax = 0.05;
// const product1 = new Product("shirt" ,22);
// const product2 = new Product("underware" ,30);
// const product3 = new Product("pant" ,100);
// product1.displayProduct();
// const total = product1.calculateTotalTax(salesTax);
// console.log(`total price: $${total}`);


// static = keyword that define the method and properties that
//             belong to class itself rather than object created by 
//             class( class owns anything statics not the object)


// class MathUtil{
//     static PI = 3.14159;

//     static getDiameter(radius){
//         return 2 * radius;
//     }

//     static getCircumference(radius){
//         return 2 * this.PI * radius;
//     }

//     static getArea(radius){
//         return this.PI * radius * radius;
//     }

// }
// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));

//     
class User {
    static userCount = 0 ;
    
    constructor(username){
        this.username = username ,
        User.userCount++
    }

    sayHello(){
        console.log(`Hello ,My username is ${this.username}`);
    }

    displayUserCount(){
        console.log(`there are ${User.userCount} user are online`);
         }
}

const user1 = new User("noman");
const user2 = new User("arslan");
const user3 = new User("ramzn");
console.log(user1.username);
user1.sayHello();
user1.displayUserCount();


