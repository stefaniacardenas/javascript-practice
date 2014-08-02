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
	console.log("Codebar is not so awesome :( !");
}

// Strict equality

var apples = "apples";
var oranges = "oranges";

if (apples === oranges) {
	console.log("Apples and oranges are the same thing!");
}

// Strict inequality

if (apples !== oranges) {
	console.log("Apples and oranges are not equal");
}

// Greater than ,  less than

var coaches = 20
var students = 24
var pizzas = 25

var people = coaches + students

if (people > pizzas) {
	console.log("We have more people than pizzas");
}

if (students > pizzas) {
	console.log("There are not enough pizzas for the students!");
}

if (coaches < students) {
	console.log("We have less coaches than students");
}

if (people > pizzas) {
	console.log("We have more people than pizzas, that's not ideal!")
} else {
	console.log("We have plenty of pizzas for everyone!")
}

// Functions. Pieces of code that you can rerun without having to define the same things again.

function hello(name) {
	console.log("Hello " + name + "!");
};

hello("Stefania");

// I can call this function from the browser console

var name = "Stefania"

function popupHello() {
	alert("Hello " + name);
};

function whatIAmDoingToday(coach, place) {
	console.log("Today, I am at " + place + " and I'm learning JavaScript with the help of " + coach + "!");
};

whatIAmDoingToday("Alex", "Makers Academy");




