const d = new Date();
console.log(d)

const a = new Date("January 22, 2022 1:12:00");
console.log(a)

const b = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(b)

console.log(d.getDate()) //Returns the day of the month (from 1-31)

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
console.log(`${weekday[d.getDay()]} Returns the day of the week (from 0-6). we use an array, catch index to find name`) //Returns the day of the week (from 0-6)

console.log(`${d.getFullYear()} Returns the full year (4 digits) of a date`) //Returns the year

console.log(`${d.getHours()} Returns the hour (0 to 23) of a date.`)

console.log(`${d.getMilliseconds()} returns the milliseconds (0 to 999) of a date.`)

console.log(`${d.getMinutes()} returns the minutes (from 0-59)`)

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let name1 = month[d.getMonth()];
console.log(name1);

function addZero(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}

let h = addZero(d.getHours());
let m = addZero(d.getMinutes());
let s = addZero(d.getSeconds());
let time = h + ":" + m + ":" + s;
console.log(time)

console.log(d.getTimezoneOffset())

console.log(d.getUTCDate())