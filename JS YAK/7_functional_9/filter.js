const arr = [1, 2, 3, 4, 5, 7, 8, 4, 6, 3, 2, 6, 7]

// const newArr = arr.filter(function(value, index, arr){
//     return value > 4;
//     retuen value % 2 === 0;
//     retuen value % 2 === 1;
// })

// console.log(newArr)

// function myFilter(array, callback){

//     const newArr = []
//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i], i, array)) {
//             newArr.push(array[i])
//         }   
//     }
//     return newArr
// }

// function callback(value, index, array){
//     return value % 2 == 0
// }
// console.log(myFilter(arr, callback))
// console.log(myFilter(arr, function(value){
//     return value > 4;
// }))
// console.log(
// 	myFilter(arr, function (value) {
// 		return value % 2 == 1;
// 	})
// );

function myNewFilter(array, callback){
    myNewArray = [];

    for(i=0; i<array.length; i++){
        if(callback(array[i], i, array)){
            myNewArray.push(array[i])
        }
    }
    return myNewArray
}

function callbackNew(value, index, array){
    return value % 2 === 0;
}

const finalArray = myNewFilter(arr, callbackNew)
const finalArray1 = myNewFilter(arr, function(value){
    return value > 4;
})

console.log(finalArray)
console.log(finalArray1)

