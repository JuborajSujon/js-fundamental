// String length define manual

let str = "Some String"

let length = 0;

while(true){
    if(str.charAt(length) == ''){
        break
    } else {
        length++
    }
}

console.log(length)
console.log(str.length)
console.log('Sujon'.length)