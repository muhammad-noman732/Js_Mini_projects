// super = a keyword used in classes to call the constructor origin
//          acces the method and properties of parent 
//          this = this parent 
//          super = the parent


// class Animal{

//     constructor(name , age ){
//         this.name = name;
//         this.age = age;
//     }

//     move(speed){
//         console.log(`This ${this.name} moves at speed of ${speed}`);   
//     }
// }

// class Fish extends Animal{

//     constructor(name , age , swimSpeed){
//         super(name , age)
//         // this.name = name;
//         // this.age = age;
//         this.swimSpeed = swimSpeed;
//     }

//     swim(){
//         console.log(`This ${this.name} can swim`);
//         super.move(this.swimSpeed);
//     }
// }

// class Rabbit extends Animal{

//     constructor(name , age , runSpeed){
//         super(name , age)
//         // this.name = name;
//         // this.age = age;
//         this.runSpeed =  runSpeed;
//     }

//     run(){
//         console.log(`This ${this.name} can run`);
//         super.move(this.runSpeed);
//     }
// }

// class Hawk extends Animal{

//     constructor(name , age , flySpeed){
//         super(name , age)
//         // this.name = name;
//         // this.age = age;
//         this.flySpeed =  flySpeed;
//     }
    
//     fly(){
//         console.log(`This ${this.name} can fly`);
//         super.move(this.flySpeed);
//     }
// }

// const rabbit = new Rabbit("rabbit", 1 , 25);
// const fish   = new Fish("fish", 2 , 12);
// const hawk   = new Hawk("Hawk", 3, 45);
// // console.log(rabbit.name);
// // fish.swim();
// // rabbit.run();



// // ++++++++++++++++++++ Getters and setters +++++++++++++++++++
//  class Rectangle{
    
//     constructor(width , height){
//         this.width= width;
//         this.height = height;
//         }

//         set width(newWidth){
//             if( newWidth > 0){
//                 this._width = newWidth;
//             }
//             else{
//                 console.error(`Width Must be Positive Number`)
//             }
//         }

//         set height(newHeight){
//             if( newHeight > 0){
//                 this._height =newHeight;
//             }
//             else{
//                 console.error(`Height Must be Positive Number`)
//             }
//         }

//         get width(){
//             return `${this._width.toFixed(1)}cm;`
//         }

//         get height(){
//             return`${this._height.toFixed(1)}cm;`
//         }

//         getArea(){
//             return`${(this._height * this._width).toFixed(1)} cm`
//         }
//  }

//  const rectangle = new Rectangle(6, 9);
//  rectangle.width = 5;
//  rectangle.height =10;
//  console.log(rectangle.width);
//  console.log(rectangle.height);
//  console.log(rectangle.getArea());

 

class Person{

    constructor(firstName , lastName , age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof(newFirstName)=== "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("first name must be non empty string" );
    }
    }
    
    set lastName(newLastName){
        if(typeof(newLastName) === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("last name must be non empty string" );
        }
    }
    set age(newAge){
        if(typeof(newAge) === "number" && newAge > 0 ){
            this._age = newAge;
        }
        else{
            console.error(`age must be positive number:`)
        }
    }

    get firstName(){
        return `${this._firstName}`
    }
    
    get lastName(){
        return `${this._lastName}`
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    get age(){
        return `${this._age}`

    }
}

const person1 = new Person("noman" , "baghoor" , 22);
person1.firstName = "ramzan"
console.log(person1.fullName);
