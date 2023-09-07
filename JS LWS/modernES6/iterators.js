let arr = [1, 2, 3]

const obj = {
    name: "Anas",
    age: 4,
}

// for (let element in obj) {
//     console.log(obj[element])
// }

// for (let element of arr) {
//     console.log(element)
// }

// let iterator = arr[Symbol.iterator]();
// console.dir(iterator.next())
// console.dir(iterator.next())
// console.dir(iterator.next())
// console.dir(iterator.next())

//Must be a object
//it needs to implement a next() method
//next() fn must return an object with done: Boolean and a value

console.log([... "hello"]);

function range(start, end, step) {
    let current = start;
    return {
        [Symbol.iterator]: function () {
            return {
                next(){
                    let result;
                    if(current <= end) {
                        result = {
                            done: false,
                            value: current
                        }
                        current += step;
                        return result;
                    }
                    return {
                        done: true
                    }
                }
            }
        }
    }
}

console.log([... range(200, 100000, 2)]);