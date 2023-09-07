// *** Construction Pattern

// const Rectangle = function (width, height) {
//     this.width = width
//     this.height = height

//     this.draw = function () {
//         console.log('I am a rectangle')
//         this.print()
//         console.log(this)
//     }
//     this.print = function () {
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//     }
// }

// const rect3 = new Rectangle(34, 50)
// rect3.draw()







































// "this" keyword important point

//1. implicit binding
//2. explicit binding
//3. new binding
//4. window binding

// const sakib = {
//     name: 'Sakib',
//     age: 35,

//     printPlayerName: function(){
//     console.log(this.name)
//     }
// }

// sakib.printPlayerName()

//Exception : only work for normal function will not work for arrow function 

// let printPlayerNameFunction = function (obj){
//     obj.printPlayerName = function(){
//         console.log(this.name)
//     }
// }

// const sakib = {
//     name: 'Sakib',
//     age: 35
// }

// const tamim = {
// 	name: "tamim",
// 	age: 30,
// };

// printPlayerNameFunction(sakib)
// printPlayerNameFunction(tamim)

// sakib.printPlayerName()
// tamim.printPlayerName()


// const Person = function (name, age){
//         this.name = name;
//         this.age = age;
//         this.printName = function (){
//             console.log(this.name)
//         };
//         this.father = {
//             name: "Mr. XXX",
//             }
//         }


// const sakib = new Person('Sakib', 35)
// console.log(sakib)




//Otherwise ths will be equal to window object


//                         explicit binding example


// let printName = function (v1, v2, v3) {
// 			console.log(`${this.name} is ${v1}, ${v2}, & ${v3}`);
// }

// const sakib = {
//     name: "sakib",
//     age: 35
// }
// let v1 = "Handsome", v2 = "All-rounder",  v3 = "Best Player";

// const v = [v1, v2, v3]
// printName.apply(sakib, v1, v2, v3)
// printName.apply(sakib, v)
// const newfunc = printName.bind(sakib, v1, v2, v3);
// newfunc()


//                           New binding
// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     console.log(`${this.name} is ${this.age} years old`)
// }

// const sakib = new Person ('Sakib', 35)


//                          window binding
// let PrintName = function (){
//     console.log(this.name)
// }

// const sakib = {
//     name: "Sakib"
// }

// PrintName.call(sakib)

// PrintName()

// this will be equal to window object in case of arrow fucntion 

//HN NAYEM -  stack learner 

// function myFunc(c, d){
//     // console.log(this)
//     console.log(this.a + this.b + c + d)
// }

// // myFunc.call({a:40, b:40}, 10, 10)
// // myFunc.apply({a:40, b:40}, [10, 10])
// // myFunc()

// let testBind = myFunc.bind({a:7, b:3}, 5, 5)
// testBind()