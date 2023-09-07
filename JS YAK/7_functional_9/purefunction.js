// What is pure Function?

// * It returns the same result if given the same arguments
//It does not cause any observable side effects

function sqr(n){
    return n*n 
}

console.log(sqr(2))
console.log(sqr(2))
console.log(sqr(2))

let n = 10;

// * It is not pure function 
function change(){
    n = 100 
}
change();
console.log(n)

// * Another example not pure function

const point = {
   x : 30,
   y : 60
}

function printPoint(value){
    value.x = 100;
    value.y = 50;
    console.log(value)
}


printPoint(point);
console.log(point)
