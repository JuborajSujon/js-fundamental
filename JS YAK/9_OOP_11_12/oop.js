// const rect = {
//     width : 100,
//     height : 50,
//     draw : function (){
//         console.log("I am a rectangle");
//         this.print;
//     },
//     print : function (){
//         console.log( 
// 					"My width is " + this.width + " and " + "height is " + this.height
// 				);
//     }
// }

// rect.draw()
// rect.height = 100;
// rect.draw()

// function myFunc(){
//     console.log(this)
// }

// const another = {
//     width: 47,
//     height: 56,
//     printInhier: rect.print
// }
// console.log(another.printInhier)
// another.printInhier()


//2nd revision

// const rect = {
//     width: 100,
//     height: 50,

//     draw: function(){
//         console.log('I am a rectangle')
//         this.printProperties()
//     },
//     printProperties: function (){
//         console.log("My width is " + this.width);
//         console.log("My height is " + this.height);
//     }
// }

// rect.draw()

// rect.height = 100;
// rect.draw()

// function myFunc(){
//     console.log(this)
//     rect.printProperties
// }
// // new myFunc()
// // ref window object for new keyword

// const another = {
//     width: 30,
//     height: 50,

//     print: rect.printProperties
// }
// another.print()