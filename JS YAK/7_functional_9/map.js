const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newArr = arr.map(function(value, index, arr){
//     // return Math.random()*100;
//     return value*value 
// })

// console.log(arr)
// console.log(newArr)

function myMap(array, callback){
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        //let temp = array[i] * array[i]
        let temp = callback(array[i], i, array)
        newArr.push(temp)
    }
    return newArr
}

function callback(value, index, array){
    return value*value*value

}

const mten = myMap(arr, function (value){
    return value * 10
})

console.log(myMap(arr, callback))
console.log(mten)