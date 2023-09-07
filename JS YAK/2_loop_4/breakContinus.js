// let isRunning = true;

// while(true){
//     let rand = Math.floor(Math.random()*10 + 1)
//     if (rand === 9) {
//         console.log("Winner Winner Chicken Dinner")
//         //isRunning = false
//         break
//     } else {
//         console.log('you have got ' + rand)
//     }
// }


for (let i = 0; i < 10; i++){
    if (i === 3 || i === 7) {
        continue
    }else{
        console.log(i)
    }
}