const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];
const arr4 = [1, 2, [3, 4]];
const arr5 = [[5, 6], 7, 8];
const arr6 = "Robin";
const ages = [13, 33, 16, 40];

const fruits = ['Apple', 'Watermelon','Orange','Pear','Cherry','Strawberry','Nectarine','Grape','Mango','Blueberry','Pomegranate'];

const fruits1 = ["Plum","Banana","Raspberry","Mandarin","Jackfruit","Papaya","Kiwi","Pineapple","Lime","Lemon","Apricot","Grapefruit","Melon",];


const children = arr1.concat(arr2, arr3); // Joins arrays and returns an array with the joined arrays
console.log(children)

console.log(arr1.constructor) //returns the functions that created the array object's prototype

const progr = ['java', 'php', 'python','roby', 'c++', 'rust']

const newProgr = progr.copyWithin(3,1,2); // Copies array elements with the array to and from specified position
console.log(progr)

console.log(ages.every(checkAge)); //checks if every element in an array pass a test

function checkAge(age) {
	return age > 20;
}

console.log(progr.fill('roby',4,5)) //Fill the elements in an array with a static value.

console.log(ages.filter(checkAge)); //created a new array with every element in an array that pass a test

console.log(ages.find(checkAge)); //returns the value of the first element in a array that pass test

console.log(ages.findIndex(checkAge)) //returns the index of the first element in the a array that pass test

console.log(ages.forEach(myFunction)); //Call a function for each array element

function myFunction(i){
    console.log(i)
}

console.log(Array.from(arr6)) //Create a array from an object

console.log(progr.includes('php')) //checks if array contain this specified elements.

console.log(progr.indexOf('php')) //Search the array for an element and return its position

console.log(Array.isArray(arr1)) //checks wheres an object is an array

console.log(arr1.join(' * ')) //Joins all elements of an array into a string

console.log(Object.keys(arr1)) //Returns a arrary Iteration object, containing the keys of the original array.

console.log(progr.lastIndexOf('roby')) // Search the array for an element, starting at the end, and returns its position

console.log(arr1.length) //Sets or returns the number of elements in an array

function myMap(x){
    return x * 2
}
console.log(arr4[2].map(myMap))// Creates a new array with the result of calling a function for each array element

console.log(arr2.pop()) //Removes the last element of an array, and returns that element

console.log(arr2.push('string')) //Adds new elements to the end of an array, and returns the new length

console.log(ages.reduce(myReduce)) //Reduce the values of an array to a single value (going left-to-right)

function myReduce(x,y){
    return x+Number(y)
}

console.log(arr2.reverse()) //Reverses the order of the elements in an array

console.log(fruits.shift())//Removes the first element of an array, and returns that element

console.log(fruits.unshift('Apple')) //Adds new elements to the beginning of an array, and returns the new length

console.log(fruits.slice(1,6)) //Selects a part of an array, and returns the new array

console.log(fruits.splice(2, 0, "Lemon", "Kiwi")) //Adds elements from an array
console.log(fruits.splice(2, 2))//Removes elements from an array

console.log(ages.some(checkAge)) //Checks if any of the elements in an array pass a test
console.log(fruits.sort()) //Sorts the elements of an array

