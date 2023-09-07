// abc()

function abc(){
    console.log(
        'I am function'
    )
}

let newAbc = function (){
    console.log('I am new abc fuction')
}


// Creational Phase
// abc = ref
//newAbc = undefine]

var x = 55;

function test(){
    var x = 45;
    console.log(x)
}

test()