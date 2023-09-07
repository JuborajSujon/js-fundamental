// class Rectangle {
//     constructor(width, height) {
        
//         this.width = width
//         this.height = height
//         let position = {
//             x: 56,
//             y: -100
//         }
        
//         let printProperties = function () {
//             console.log("My width is " + this.width)
//             console.log("My height is " + this.height);
//         }.bind(this)
//         this.draw = function () {
// 			console.log("I am rectangle");
// 			printProperties();
// 			console.log('position: X = ' + position.x + ' and ' + 'Y = '+ position.y);
// 		}
//     }
// }

// const rect7 = new Rectangle(45, 30)
// rect7.draw()