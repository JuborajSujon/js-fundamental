let str = '1000';
let n = 10;

console.log(str*n);  // react as number
console.log(str + n); // react as string

let strq = Number.parseInt(str);
console.log(strq);
console.log(Number.parseInt(str));

let ncs = n.toString();
console.log(ncs);

console.log(Number(str));
console.log(Number(Infinity));
console.log(String(Infinity));
console.log(Boolean(Infinity));

//Falsy Values
''
0
null
undefined
NaN

console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

let t = true;
let f = false;

console.log(t.toString());
console.log(f.toString());

// Constructor

//String Number Boolean 

// Hexadecimal is a base 16 number system where Octal is a base 8 number system

let hex = 0x555;
let oct = 0756;

console.log(hex);
console.log(oct);