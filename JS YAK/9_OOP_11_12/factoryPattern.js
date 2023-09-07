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


//2nd revision
//Factory Pattern make syntex version

// const createRect = function (width, height){
//     return {
//         width: width,
//         height: height,

//         draw: function(){
//             console.log('I am a rectangle')
//             this.print();
//             console.log(this)
//         },

//         print: function(){
//             console.log('My width is ' + this.width)
//             console.log('My height is ' + this.height) 
//         }
//     }
// }

// const rect3 = createRect(40,30)
// // console.log(rect3)
// rect3.draw()

// const rect4 = createRect(100, 50);
// // console.log(rect4);
// rect4.draw();

//3rd revision 
// const createRect = function (width, height) {
//     return {
//         width: width,
//         height: height,

//         draw: function () {
//             console.log('I am rectangle')
//             this.printProperties()
//             console.log(this)
//         },

//         printProperties: function () {
//             console.log('My width is ' + this.width)
//             console.log('My height is ' + this.height)
//         }
//     }
// }

// const rect1 = createRect(10, 8)
// rect1.draw()

// const rect2 = createRect(30, 40)
// rect2.draw()