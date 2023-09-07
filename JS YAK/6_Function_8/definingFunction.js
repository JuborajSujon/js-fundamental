function func (){
    console.log('I am a function')
}

function add(){
    let a =10, b= 3
    console.log(a+b)
}

function sub() {
	let a = 10,
		b = 3;
	console.log(a - b);
}

// func()

// for (let i = 0; i < 5; i++) {
//    func()   
// }
// add()
// sub()

const arr1 = [1, 2, 3]
const arr2 = [5, 7, 9]
const arr3 = [9, 7, 1]


function sumArray(array){
    let sum = 0
    for (let i = 0; i < array.length; i++) {
			sum += array[i];
		}
        console.log(sum)
}
sumArray(arr1)
sumArray(arr2)
sumArray(arr3)
