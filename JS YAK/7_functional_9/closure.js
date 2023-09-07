// First look at closure

// function add(){
//     let counter = 0;

//     return function(){
//         counter += 1;
//         console.log ("hello")
//     }
// }

// let count = add()


// console.dir(count)
// count();
// console.dir(count);
// count();
// console.dir(count);
// count();

// Closure is when a function is able to remember and access it's lexical scope even when that function executing outside it's lexical scope

// function test (){
//     let msg = 'I am learning lexical scope and closure'
//     function sayMsg(){
//         console.log(msg)
//     }
//     sayMsg()
// }

// test()

// function test (){
//     let msg = 'I am learning lexical scope and closure'
//     return function (){
//         console.log(msg)
//     }
// }

// let sayMsg = test()
// sayMsg()

// for (let i = 1; i <= 5; i++) {
//     (function(n){
//         setTimeout(function () {
// 					console.log(n);
// 				}, 1000 * n);
//     })(i)
    
    
// }