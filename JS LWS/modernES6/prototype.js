// let person = {}
// person.name = 'Jasim';
// person.age = 30;
// person.printName = function () {this.name}
// person.printAge = function () {this.age}



function Person (name, age) {
    // let person = Object.create(Person.prototype)

    this.name = name;
    this.age = age;

    // return person;
}
Person.prototype = {
	eat: function () {
		console.log(`Person is eating`);
	},
	sleep: function () {
		console.log(`Person is sleeping`);
	},
	play() {
		console.log(`Person is playing`);
	},
};

// // console.dir(p)
const sakib = new Person('sakib', 35)
const tamim = new Person('tamim', 35)


sakib.play()
tamim.eat()
// const captain = {
//     name: "Mashrafi",
//     age: 36,
//     country: "Bangladesh"
// }

// const player1 = Object.create(null) // Object or null
// player1.name = 'sakib';
// player.age = 36;
// console.log(player1)

// const player = Object.create(captain);
// console.log(player)
// console.log(player.name)

// function test() {

// }
// console.dir(test)
function PersonWithNew(name, age) {
	// let this = Object.create(PersonWithNew.prototype);

	this.name = name;
	this.age = age;

	// return this;
}

const hassan = new PersonWithNew("sakib", 35);
const ikbal = new PersonWithNew("tamim", 35);

class Student {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat () {
		console.log(`Person is eating`);
	};
	sleep () {
		console.log(`Person is sleeping`);
	};
	play() {
		console.log(`Person is playing`);
	}
}

const asraful = new Student('Asraful', 32)
const nasir = new Student('nasir', 32)
asraful.play()