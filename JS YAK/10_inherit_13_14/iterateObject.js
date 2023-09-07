function Square(width) {
	this.width = width;
	this.getWidth = function () {
		console.log("Width is " + this.width);
		// this.draw()
	};
}

Square.prototype = {
	draw: function () {
		// this.getWidth()
		console.log("Draw");
	},
	toString: function () {
		return "My width is = " + this.width;
	},
};

const sqr1 = new Square(10);
const sqr2 = new Square(5);

//Iterate Object and HasOwnProperty in javascript

// console.log(sqr1.hasOwnProperty('width')) //true
// console.log(sqr1.hasOwnProperty('getWidth')) //true
// console.log(sqr1.hasOwnProperty('draw')) //false


// console.log(Object.keys(sqr1)) //width, getWidth

// for(let i in sqr1){
//     console.log(i)
// } //width, getWidth, draw, toString
