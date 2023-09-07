// function shape(color) {
//     this.color = color
// }
// shape.prototype.common = function () {
// 	console.log("I am common method");
// };

// function Square(width, color) {
// 	this.width = width;
//     shape.call(this, color)
    
// }

// Square.prototype = Object.create(shape.prototype);
// // sqr -> Square -> shape -> Object
// //Reset constructor after inheritance
// Square.prototype.constructor = Square;

// Square.prototype.draw = function () {
// 	console.log("Drawing");
// };

// const sqr = new Square(45, 'green');

// // console.log(sqr) //sqr -> Square -> Object
// // console.log(shap) //shap -> shape -> Object

// //sqr -> Square -> shape -> Object
