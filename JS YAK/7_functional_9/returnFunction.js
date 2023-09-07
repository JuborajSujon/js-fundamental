function greet(msg){
    function greetings(name){
        return msg + ' , ' + name + '!'
    }
    return greetings
}

let gm = greet('Good Morning')
let gn = greet('Good Night')
let hello = greet('Hello')
// console.log(gm)
let msg = gm('Sujon')
// console.log(msg)
// console.log(gn('Laizu'))
// console.log(gn('Lisan'))


function base(b){
    return function (n){
        let result = 1
        for(let i=0; i<b; i++){
            result *= n
        }
        return result
    }
}

let base10 = base(10)
console.log(base10(2))