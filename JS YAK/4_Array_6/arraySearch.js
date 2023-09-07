const arr = [4, 5, 6, 8, 44, 30, 70, 99, 120, 150, 300]

const find = 70;
let isFound = false;

for (let i = 0; i < arr.length; i++) {
    if(arr[i] === find){
        console.log('Data found at ' + i + ' number index');
        isFound = true
        break;
    }
}

if(!isFound){
    console.log('Data Not Found')
}