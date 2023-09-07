//symbol in JavaScript 

var cricket = Symbol('This is Cricket Symbol') // Symbol with description 
var text = "some text here"
var object = {
    name: "Sakib",
    [cricket]: "Bangladesh",
    [text]: "We get it"
}

// console.log(object)

//Symbol are invisible
//Symbol are use prototype properties
//Symbol are well knows symbols (Static properties : "developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol")
//
const person = {};

person.name = 'Sakib';
person.age = 35;

person[Symbol('founder')] = "Brendan Eich"

// for(let key in person){
//     console.log(key)
// }
// console.log(Object.keys(person))
// console.log(person)


var myArray = [1, 2, 3]
console.log(myArray.includes(2))
console.log(myArray['includes'](2))
