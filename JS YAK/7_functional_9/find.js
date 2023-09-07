const arr = [1, 2, 3, 4, 5, 7, 8, 4, 6, 3, 2, 6, 7, 9];

// const result = arr.find(function(value){
//     return value === 9
// })
// console.log(result)

// const result1 = arr.findIndex(function(value){
//     return value === 9
// })
// console.log(result1)

function myfind(array, callback){
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return array[i]
        }
    }
}

const result = myfind(arr, function(value){
    return value === 9
})

console.log(result)

function myfindindex(array, callback) {
	for (let i = 0; i < array.length; i++) {
		if (callback(array[i])) {
			return i;
		}
	}
}

const result1 = myfindindex(arr, function (value){
    return value === 9
})
console.log(result1)