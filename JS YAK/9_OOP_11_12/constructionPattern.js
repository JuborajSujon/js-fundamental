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

//2nd revision - construction Pattern

// const Rectangle = function(width, height){
//     this.width = width,
//     this.height = height,

//     this.draw = function(){
//         console.log('I am a rectangle')
//         this.print()
//         console.log(this)
//     },
//     this.print = function(){
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//     }
// }

// const rect4 = new Rectangle(50, 25)
// rect4.draw()

//3rd revision - construction Pattern

// const Rectangle = function (width, height) {
//     this.width = width
//     this.height = height

//     this.draw = function () {
//         console.log('I am a rectangle')
//         this.printProperties()
//         console.log(this)
//     }

//     this.printProperties = function () {
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//     }
// }

// const rect3  = new Rectangle(34, 56)
// rect3.draw()