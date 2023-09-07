let num = 134;
let nnum = -134;
let fnum = 124.2225;
let str = 'hello';
// let ifinum = infinity;
// let undinum = undefined;
// let nullnum = null;


let text = num.constructor; // Returns the function that created JavaScript's Number prototype
console.log(text);

console.log(Number.EPSILON) // Returns the different between 1 and the smellest number 

console.log(Number.isFinite(fnum)) // If returns to checks whether a value is a finite number

console.log(Number.isInteger(fnum)) // If returns to checks whether a value is a integer number

console.log(Number.isNaN(num)) // true if the value is Number.NaN, otherwise false
console.log(isNaN(str))

console.log(Number.isSafeInteger(fnum)) // true id the value is Number.isSafeInteger, otherwise false

console.log(Number.MAX_SAFE_INTEGER) // Returns the maximum safe integer in JavaScript

console.log(Number.MIN_SAFE_INTEGER) // Returns the maximum safe integer in JavaScript

console.log(Number.MAX_VALUE) //Returns the largest number possible JavaScript

console.log(Number.MIN_VALUE) // Returns the lowest number possible JavaScript

console.log(Number.NaN) // Represents a "Not-a-Number" value

console.log(Number.NEGATIVE_INFINITY) // Represents negative infinity (returned on overflow)
console.log(Number.POSITIVE_INFINITY) // Represents positive infinity ( returned on overflow)

console.log(Number.parseFloat('10.30is the float numer')) //Parses a string and returns a number

console.log(Number.parseInt('10number is a integer')) //Parses a string and returns a whole number

console.log(num.toExponential(5)) //Converts a number into an exponential notation

console.log(num.toFixed(3)) //Formats a number with x number of digits after the decimal point

console.log(num.toLocaleString()) //Converts a number into a string, based on the locale setting

console.log(num.toString())// Converts a number into a string

console.log(fnum.toPrecision(2)) //Formats a number to x length.

console.log(nnum.valueOf())

