/**
 * implicit binding
 * explicit binding
 * new binding
 * window binding
 */

//implicit binding 

//case 1 - In Litarel Object

const student = {
    name: "Rabbi",
    age: 35,

    printName : function () {
        console.log(this.name)  //"this" keyword pointing student object
    }

}

//case 2 - In function when pass object as parameter and inside parameter define another function 

const printPlayerNameFunction = function (obj) {
    obj.printPlayerName = function () {
        console.log(this.name) // "this" keyword pointing object
    }
    obj.insideFunctionName = function () {
        console.log(this.printName())
    }
}

const sakib = {
    name : "sakib",
    age : 34,

    printName: function () {
        console.log(this.name)
    }
}
const tamim = {
	name: "tamim",
	age: 34,

	printName: function () {
		console.log(this.name);
	},
};

printPlayerNameFunction(sakib)
printPlayerNameFunction(tamim)

sakib.printPlayerName()
sakib.insideFunctionName()

//case 3 - constructor function 
const Person = function (name, age) {
    return {
        name: name,
        age: age,
        printName: function () {
            console.log(this.name)
        },
        father: {
            name: "Mr. XXX",
            printName: function () {
                console.log(this.name)
            }
        }
    }
}

const aftab = Person('aftab', 34)
aftab.printName()
aftab.father.printName()

//explicit binding

//case 1 - when function find this another context
let v1 = 'Handsome';
let v2 = 'All rounder';
let v3 = 'Best player'

const v = [v1, v2, v3]
function printName (v1, v2, v3) {
    console.log(`${this.name} is ${v1}, ${v2} and ${v3}`)
}

printName.call(sakib, v1, v2, v3)
printName.apply(sakib, v)
let newBind = printName.bind(sakib, v1, v2, v3);
newBind();


//New bind
function Tree (name, age) {
    //let this = Object.create(null)
    this.name = name;
    this.age = age;

    console.log(`${this.name} is ${this.age} years old`)

    // return this;
}

const mango = new Tree('mango',35)


//window binding

// const newPrintName = function () {
//     console.log(this.name)
// }
"use strict";
function newPrintName (){
    console.log(this)
    console.log(this.name)
}
newPrintName()