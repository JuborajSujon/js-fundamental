const arr = [1, 2, 3, 4, 5, 7, 8, 4, 6, 3, 2, 6, 7]

// const sum = arr.reduce(function(prev, curr){
//     return prev + curr;
// })

// console.log(sum)

// const max = arr.reduce (function (prev, curr){
//     return Math.max(prev, curr)
// })

// console.log(max)


function myReduce(array, callback, initi){

    for (let i = 0; i < array.length; i++) {
        
        initi = callback(initi, array[i])
    }

    return initi
}

const sum = myReduce(arr, function(prev, curr){
    return prev + curr
}, 0)

const max = myReduce(
	arr,
	function (prev, curr) {
		return Math.max(prev, curr);
	},
	0
);

const min = myReduce(
	arr,
	function (prev, curr) {
		return Math.min(prev, curr);
	},0
);

console.log(sum)
console.log(max)
console.log(min)

