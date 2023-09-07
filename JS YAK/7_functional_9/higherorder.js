// 5. We can pass function as an arguments

// 6. We can return function from another function

function add(a, b) {
	return a + b;
}

function manipulate(a, b, func) {
	let c = a + b;
	let d = a - b;

	function multiply() {
		let e = func(a, b);
		return c * d * e;
	}

	return multiply;
}

let what = manipulate(5, 3, add);
console.log(what);
console.log(what());
