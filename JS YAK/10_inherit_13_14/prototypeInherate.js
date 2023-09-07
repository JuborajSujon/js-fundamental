// function shape(){

// }
// shape.prototype = {
// 	common: function () {
// 		console.log("I am common method");
// 	}
// };

// function Square(width){
//     this.width = width
// }

// Square.prototype = Object.create(shape.prototype)
//sqr -> Square -> shape -> Object

// Square.prototype.draw = function(){
//     console.log('Drawing')
// }

// const sqr = new Square(45)
// const shap = new shape()
// // console.log(sqr) //sqr -> Square -> Object
// // console.log(shap) //shap -> shape -> Object

// //sqr -> Square -> shape -> Object

// function circle(){

// }
// circle.prototype = Object.create(shape.prototype)

// const cir = new circle()
// console.log(cir)