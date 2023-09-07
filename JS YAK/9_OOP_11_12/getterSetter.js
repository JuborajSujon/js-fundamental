// class Rectangle {
//     constructor(width, height) {

//         this.width = width
//         this.height = height
//         let position = {
//             x: 56,
//             y: -100
//         }
//         // this.getPosition = function(){
//         //     return position
//         // }

//         let printProperties = function () {
//             console.log("My width is " + this.width)
//             console.log("My height is " + this.height);
//         }.bind(this)
//         this.draw = function () {
// 			console.log("I am rectangle");
// 			printProperties();
// 			console.log('position: X = ' + position.x + ' and ' + 'Y = '+ position.y);
// 		}

//         Object.defineProperty(this, 'position', {
//             get: function(){
//                 return position
//             },
//             set: function(value){
//                 position = value
//             }
//         })

//     }
// }

// const rect7 = new Rectangle(45, 30)
// rect7.draw()
// rect7.position = {
//     x: 456,
//     y: -330
// }
// console.log(rect7.position)
// console.log(rect7.getPosition())