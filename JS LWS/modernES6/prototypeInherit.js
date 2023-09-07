function Person (name, age){
    this.name = name;
    this.age = age;

} // parent class

function Cricketer(name, age,type, country) {
    Person.call(this)
    this.name = name;
	this.age = age;
    this.type = type;
    this.country = country;  
} // sub class

Person.prototype = {
    eat: function(){
        console.log(`${this.name} is eating`)
    }
}

Cricketer.prototype = Object.create(Person.prototype)

Cricketer.prototype.constructor = Cricketer;

const sakib = new Cricketer("Sakib", 35, "All rounder", "Bangladesh")
console.log (sakib)
// const tamim = new Person("Tamim", 35)
// console.log(tamim)

// // sakib.eat()
// // tamim.eat()

// let f = function Person() {};

// console.dir(f)