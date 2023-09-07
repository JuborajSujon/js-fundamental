// const createRect = function (width, height) {
// 	return {
// 		width: width,
// 		height: height,
// 		draw: function () {
// 			console.log("I am a rectangle");
// 			this.print();
// 			console.log(this);
// 		},
// 		print: function () {
// 			console.log("My width is " + this.width);
// 			console.log("My height is " + this.height);
// 		},
// 	};
// };

// const rect1 = createRect(10, 5);
// rect1.draw();

// const rect2 = createRect(39, 40);
// rect2.draw();

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

// let str = new String('string')
