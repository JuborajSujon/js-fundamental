const obj = {
    x: 40,
    y: 50,
    z: 30
}

// console.log('x' in obj)
// console.log('p' in obj)

for (const i in obj) {
    console.log(i)
    console.log(obj[i])
}