// function mixin(target, ...sources){
//     Object.assign(target.prototype, ...sources)
// }
// const canWalk = {
//     walk: function(){
//         console.log('Walking ....')
//     }
// }

// const canEat = {
//     eat: function(){
//         console.log('Eating ....')
//     }
// }

// const canSwim = {
// 	swim: function () {
// 		console.log("Swimming ...");
// 	},
// };


// // const man = Object.assign({}, canEat, canWalk)
// // man.name = 'Sujon'
// // console.log  (man)

// function student(name){
//     this.name = name
// }
// // Object.assign(student.prototype, canWalk, canEat);
// mixin(student, canEat, canWalk)

// const emon = new student('Emon')
// console.log(emon)

// function GoldFish(name){
//     this.name = name
// }
// mixin(GoldFish, canEat, canSwim)
// const childFish  = new GoldFish('Redragon')
// console.log(childFish)

