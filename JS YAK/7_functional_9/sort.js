const person = [
	{ name: "A", age: 24 },
	{ name: "B", age: 19 },
	{ name: "C", age: 26 },
	{ name: "D", age: 21 }
];

const arr = [4, 8, 1, 6, -2, -4, 0, 7, 9, 4, 3, -8, 5, 6, 8, 2, 1, 7]
const evenArray = [4, 8, 1, 6, 4, 0, 7, 9, 4, 3, 12, 5, 6, 8, 2, 1, 7]

// console.log(arr.sort(function(a,b){
//     return a-b
// }))

console.log(
	arr.sort(function (a, b) {
		if (a > b) {
            return 1
        } else if(a < b) {
            return -1
        } else{
            return 0
        }
	})
);

// console.log(person.sort(function(a,b){
//     return a.age - b.age
// }))

console.log(person.sort(function(a,b){
    if (a.age > b.age) {
        return 1
    } else if(a.age < b.age){
        return -1
    } else {
        return 0
    }
}))

const result = evenArray.some(function (value){
    return value % 2 === 0
})

console.log(result)