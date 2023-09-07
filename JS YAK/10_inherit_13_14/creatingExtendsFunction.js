// function extend(parent, child){
//     child.prototype = Object.create(parent.prototype)
//     child.prototype.constructor = child
// }


// function shape(color) {
// 	this.color = color;
// }
// shape.prototype.common = function () {
// 	console.log("I am common method");
// };

// function Square(width, color) {
// 	this.width = width;
// 	shape.call(this, color);
// }

// extend(shape,Square)

// // Square.prototype = Object.create(shape.prototype);
// // // sqr -> Square -> shape -> Object
// // //Reset constructor after inheritance
// // Square.prototype.constructor = Square;

// Square.prototype.draw = function () {
// 	console.log("Drawing");
// };

// const sqr = new Square(45, "green");

// // console.log(sqr) //sqr -> Square -> Object
// // console.log(shap) //shap -> shape -> Object

// //sqr -> Square -> shape -> Object

// function Circle(radius, color){
//     shape.call(this, color)
//     this.radius = radius
// }
// // Circle.prototype = Object.create(shape.prototype)
// // Circle.prototype.constructor = Circle
// extend(shape, Circle)


// //Method overrid 
// Circle.prototype.common = function(){
//     shape.prototype.common.call(this)
//     console.log('I am calling from Circle and i have overridden')
// }

// const cir = new Circle(5, 'Red')