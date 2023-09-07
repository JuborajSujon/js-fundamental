const car = {
    name:'BMW',
    model:'fx100',
    color:'red',
    start: function(){
        let startStr = 'the car has started';
        console.log(startStr);
    },
    drive: function(){
        let driveStr = 'now it is running';
        console.log(driveStr);
    },
    break: function(){
        let breakStr = 'we can break when its nessecery';
        console.log(breakStr);
    },
    stop: function(){
        let stopStr = 'car will stop when fule will finish';
        console.log(stopStr);
    }

};

// let carColor = car.color;
// let carModel = car.model;
// let carName = car.name;

// console.log(carColor);
// console.log(carModel);
// console.log(carName);

// car.start();
// car.drive();
// car.break();
// car.stop();


// console.log(car.start());
// console.log(car.drive());
// console.log(car.break());
// console.log(car.stop());

const person = {
    firstName : 'John',
    lastName : 'Doe',
    id : 5566,
    fullName : function (){
        return this.firstName + " " + this.lastName;
    }
}

let personFullName = person.fullName();
console.log(personFullName);