// var Rectangle = function (width, height) {
// 	this.width = width;
// 	this.height = height;

// 	this.draw = function () {
// 		console.log("I am a rectangle");
// 		this.print();
// 		console.log(this);
// 	};
// 	this.print = function () {
// 		console.log("My width is " + this.width);
// 		console.log("My height is " + this.height);
// 	};
// };

// const rect3 = new Rectangle(34, 50);
// rect3.draw();


// Object of new kewword


// 1. Create new empty Object
// 2. bind factory and construction function 
// 3. Inherit all prototype to empty Object
// 4. Return new object

// function myNew(constructor){
//     const obj = {} // create empty object
//     Object.setPrototypeOf(obj, constructor.prototype) // Set prototype
//     let argsArray = Array.prototype.slice.apply(arguments)
//     constructor.apply(obj, argsArray.slice(1)) 

//     return obj // return new object
// }

// const rect4 = myNew(Rectangle, 45, 30)
// rect4.draw()

