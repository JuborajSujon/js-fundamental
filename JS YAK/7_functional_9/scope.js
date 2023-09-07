let x = 200;

function abc(){
    //  let x = 100;
    console.log(x)

    function nested(){
        let y = 65;
        console.log(x)
    }
    console.log(y)
    nested()
 
}

abc()

