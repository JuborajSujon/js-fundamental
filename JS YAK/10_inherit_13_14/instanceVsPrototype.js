// function Square(width){
//     this.width  = width
// }

// Square.prototype = {
//     draw: function (){
//         console.log('Draw')
//     },
//     toString: function (){
//         return "My width is = " +  this.width
//     }
// }
//Make instance for all object

// const sqr1 = new Square(10)
// const sqr2 = new Square(5)

// console.log(sqr1.toString())



// using instance and prototype members in javascript
// function Square(width){
//     this.width  = width
//     this.getWidth = function(){
//         console.log('Width is ' + this.width)
//         // this.draw()
//     }
// }

// Square.prototype = {
//     draw: function (){
//         // this.getWidth()
//         console.log('Draw')
//     },
//     toString: function (){
//         return "My width is = " +  this.width
//     }
// }

// const sqr1 = new Square(10)
// const sqr2 = new Square(5)

//call from instance
// console.log(sqr1.getWidth())
// console.log(sqr2.getWidth())


//call from prototype
// console.log(sqr1.draw())
// console.log(sqr2.draw())