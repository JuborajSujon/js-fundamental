function sample(a, b, callback){
    let c = a + b;
    let d = a - b;

    let result = callback(c, d);
    return result;

}

function sum(a, b){
    return a + b
}

let result = sample(5, 8, sum)
let result2 = sample(5, 8, function(c, d){
    return c - d;
})
let result3   = sample(5, 8, function(c, d){
    return c * d;
})
console.log(result)
console.log(result2)
console.log(result3)