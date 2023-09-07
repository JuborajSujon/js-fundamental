let addition = function (a, b){
    return a+b
}


setTimeout(function(){
    console.log('I will call after 5 second')
}, 5000)

let another = addition
console.log(another(30,60))

let result = addition(10, 20);
console.log(result);