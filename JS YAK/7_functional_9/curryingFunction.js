function add(a, b, c){
    return a + b +c
}

// console.log(add(41, 52, 63))

function currying (a){
    return function (b){
        return function (c){
            return a + b + c
        }
    }
}

let result = currying(5)(5)(5)
console.log(result)