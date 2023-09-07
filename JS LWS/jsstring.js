let text = "Hello World 120. ";

let text1 =
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";

let text2 = 'My name is Md Sujon Miah. '
let text3 = 'I love Bangladesh.'
let text4 = "Hello world, welcome to the universe. ";

console.log(text.length);

let indexPosition = text.charAt(6); // Returns the char at a specified index (position)
console.log(indexPosition)
let codeChar = text.charCodeAt(6); // Returns the unicode of char at specified index
console.log(codeChar);

let conCate = text2.concat(text3) //Return two or more joined strings.
console.log(conCate);
console.log(text2.concat(' ', text3))

let endWithString = text.endsWith('World'); // Returns if a string ends with a specified value 
console.log(endWithString);
console.log(text.endsWith('120'));
console.log(text4.endsWith('world', 11)); // you can find specific string length 

let fromUnicodeToChar = String.fromCharCode(72, 69, 76, 76, 79); // Returns Unicode values as characters (String.fromCharCode())
console.log(fromUnicodeToChar)

console.log(text.includes('W')) // Returns if a string contains a specified value.
console.log(text4.includes('the',12)) //Second parameter defined after the string find specified value.

console.log(text.indexOf('World', 5)) // Returns the index (position) of the first occurrence of a value in a string

console.log(text.lastIndexOf('World',5)) // Returns the index (position) of the first occurrence of a value in a string

let text5 = "The rain in SPAIN stays mainly in the plain";
// console.log(text5.match(/ain/gi));
console.log(text5.match(/ain/gi));

console.log(text.repeat(2)) // Ruturns a new string with number of copies of a string

console.log(text.replace(/World/, 'Bangladesh')) //Searchs a string for a value or regular expression and return a string where the value are replaced

console.log(text.search('World')) // search a string for a value or regular expression and return the index (position) of the match

console.log(text.slice(-12,-6)) // Extracts a part of a string and return a new string

console.log(text.split(' ')) // Splits a string into an array of substrings

console.log(text.startsWith('Hello')) // if checks whether a string begins with specific characters

console.log(text.substr(0,5)) //Extracts a number of characters from a string from a start index (position)

console.log(text.substring(0,11)) //Extracts characters from a string , betweem two specified index (position)

console.log(text.toLocaleLowerCase()) // Returns a string converted to lowercase letter, using the host's locale

console.log(text.toLocaleUpperCase()) // Returns a string converted to Uppercase letter, using the host's locale

console.log(text.toLowerCase()) // Returns a string converted to lower Case

console.log(text.toUpperCase()) // Returns a string converted to upper case

console.log(text.toString()) // Returns a string or a string object as a string

console.log(text.trim()) //Returns a string with removed whitespaces

console.log(text.trimStart()) //Returns a string with removed whitespaces from the start

console.log(text.trimEnd()) // Returns a string with removed whitespaces from the ends

console.log(text.valueOf()) //Returns the primitive value of a string or a string object


let className = "btn";
className += " btn-primary";
className += " none";

//The basic syntax of JavaScript template literals

let str = `Here's a template literal`;

console.log(str);// Template literal in ES6
console.log(str.length); // 25
console.log(typeof str);// string


console.log(text)
console.log(text.length)
console.log(text.slice(-15,-6))
console.log(text.replace("World" , "bangladesh"))

let text6 = 'I love cats. Cats are very easy to love. Cats are very popular.'
console.log(text6.replaceAll(/Cats/gi,'dogs'))

