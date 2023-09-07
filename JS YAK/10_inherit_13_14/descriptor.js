// const person = {
//     name: "Sujon"
// }
// console.log(person.toString())

// for (const i in person) {
//     console.log (i)
// }

// console.log(Object.keys(person))


// let descriptor = Object.getOwnPropertyDescriptor(person, 'name')
// console.log (descriptor)
//we can control some object descriptor property 
//configurable, enumerable, writable, value

// let baseObj = Object.getPrototypeOf(person)
// // console.log(baseObj)
// let baseObjDescriptor = Object.getOwnPropertyDescriptor(baseObj, "toString")
// console.log(baseObjDescriptor)

// Object.defineProperty(person, "name",{
//     enumerable: false,
//     writable: false,
//     configurable:false,
//     value: 'Laizu'
// })

// console.log(Object.keys(person)) //get empty Array 
// for (const i in person) {
//     console.log(i)
// }
// person.name = "Laizu"
// console.log(person.name)

// delete person.name
// console.log(person.name)