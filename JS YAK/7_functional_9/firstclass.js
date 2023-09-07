// First Class function 

function add(a, b) {
    return a+b
}

// 1. A function can be stored in a variable
let sum = add 
console.log(sum(4, 5))
console.log(typeof sum)

// 2. A function can be stored in an array
const arr = []
arr.push(add)
console.log(arr[0](5,3))

// 3. A function can be stored in an object
const obj = {
    sum : add 
}

console.log(obj.sum(5,7))

// 4. We can create fuction as need
setTimeout(function(){
    console.log("It is asycnconize function ")
}, 2000)

// 5. We can pass function as an arguments

// 6. We can return function from another function

