let isRunning = true;

while(isRunning){
    let rand = Math.floor(Math.random()*10+1)
    if(rand === 9){
        console.log('Winner Winner Chicken Dinner')
        isRunning = false;
        // break
    }else{
        console.log("You have got " + rand)
    }
}