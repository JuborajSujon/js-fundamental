const arr = [1,2,3,4,5]

// let sum = 0;

// // arr.forEach(element => {
// //     sum += element;
// // });
// // console.log(sum)

// // make a function as like foreach build in function 

// function forEach(array, callback){
//     for (let i = 0; i < array.length; i++) {
//         callback(array[i], i, array)
//     }
// }

// function callback(value, index, array){
//     array[index] = value + 10;
// }

// forEach(arr, callback)

// console.log(arr)



//summerization total course


// let sum = 0;
// arr.forEach(function(value, index, array){
//     //  console.log(value, index , array)
//     sum += value
// })
// console.log(sum)

let sum = 0;

function forEach(array, callback){
    for (let i = 0; i < array.length; i++) {
        callback(array[i])
    }
}

function callback(value){
    sum += value
}
forEach(arr, callback)
console.log(sum)

// ******* Javascript point some example *********  //

// function Counter() {
// 	this.count = 0;
// 	let self = this;
// 	return {
// 		increase: function () {
// 			self.count++;
// 		},
// 		current: function () {
// 			return self.count;
// 		},
//         decrease: function () {
//             self.count--;
//         },
// 		reset: function () {
// 			self.count = 0;
// 		},
// 	};
// }

// var counter = new Counter();
// var numbers = [1, 2, 3, 5, 7, 9, 19];
// var sum = 0;
// numbers.forEach(function (e) {
//     sum += e;
//     this.decrease();
// }, counter);

// console.log(sum); // 6
// console.log(counter.current()); // 3
