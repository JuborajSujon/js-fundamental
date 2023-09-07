function addAll(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }    
    return sum
}

let result = addAll(1, 2, 3)
console.log(result)