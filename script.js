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

// Multiple arguments

function whatIAmDoingToday(coach, place) {
	console.log("Today, I am at " + place + " and I'm learning JavaScript with the help of " + coach + "!");
};

whatIAmDoingToday("Alex", "Makers Academy");

// Returning values

function addStuff(x, y) {
	return x * y;
};

addStuff(10, 6);


// Variable scopes
var result;

function addingValues(x, y) {
	result = x+y;
};

addingValues(10,6);
console.log(result);

// This variable is only visible inside the function.
// If I call the var result outside the function it will give me an error because it doesn't know what result is outside the function.
function subtractValues(x, y) {
	var result = x-y;
	console.log(result);
};

subtractValues(10,6);

var me = "Stefania";
var aboutMe = "I love coding and pizza";
var sessionsAttended = 0

console.log("Hi! My name is " +me+ ". A couple of things about me: " + aboutMe +".");
if (sessionsAttended > 0) {
	console.log("This is not my first time here. I <3 Codebar!");
} else {
	console.log("This is the first time I'm attending Codebar!");
}


