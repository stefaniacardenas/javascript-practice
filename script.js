// This is where all the practise code from the Introduction to Javascript tutorial goes

console.log('Hello, this is my first line of JavaScript using Codebar');

// Variables

// In JavaScript you always need to write var before the variable name when you declare a variable
var name = "Codebar" ;
console.log(name + " is amazing!");

// JavaScript will always try to convert everything into a string.
// In the example below JavaScript will treat the number as a string and will concatenate it to the previous string.

var pi = 3.14;
console.log("The value of pi is " + pi);

var year = 2014
var nextYear = year + 1;
console.log("We are in " + year + " but " + nextYear + " is just around the corner!");

var codebarIsAmazing = true
var weatherIsNice = true
console.log("Is Codebar awesome? " + codebarIsAmazing )
console.log("Is the weather in London nice? " + weatherIsNice);

// Variables with no value are called undifined variables
var iHaveNoValue;
console.log("What kind of variable am I? " + iHaveNoValue);

// Operations exercises
// Let's set the title
console.log("Operations");

var x = 6;
var y = 3;

var addition = x + y ;
console.log("Addition: x + y = " + addition);

var subtraction = x - y;
console.log("Subtraction: x - y = " + subtraction);

var multiplication = x * y;
console.log("Multiplication: x * y = " + multiplication);

var division = x / y ;
console.log("Division: x / y = " + division);

// If statement
if (codebarIsAmazing) {
	console.log("Codebar is awesome!");
}

if (!codebarIsAmazing) {
	console.log("Codebar is not so awesome :( !")
}

