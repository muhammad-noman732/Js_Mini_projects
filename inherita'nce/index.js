// inheritance= Allow a new class to inherit properties and
//             methos of existing class

class Animal{
    alive = true;
    static sleep(){
        console.log(`${this.name} is sleeping`);     
    }
    
    eat(){
        console.log(`${this.name} is eating`);     
    }
}

class Rabbit extends Animal{
    name ="rabbit";

    run(){
        console.log(`This ${this.name} is running`);    
    }
}
class Fish extends Animal{
    name ="fish";
    swim(){
        console.log(`This ${this.name} is swimming`);
        
    }
}

class Goat extends Animal{
    name ="goat";
    walk(){
        console.log(`This ${this.name} is walking`);
        
    }
}

const rabbit = new Rabbit();
const fish = new  Fish();
const  goat = new Goat();
rabbit.alive = false;
console.log(rabbit.alive);
rabbit.eat();
Fish.sleep();
Goat.sleep();
goat.walk();
fish.swim();
rabbit.run();
