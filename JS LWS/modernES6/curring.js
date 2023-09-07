function multiply (a, b, c){
    return a * b * c
}

console.log(multiply(5, 6, 7))

function curringply (a){
    return function (b) {
        return function (c) {
            return a * b * c
        }
    }
}

console.log(curringply(5)(6)(7))