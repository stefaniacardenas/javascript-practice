// used in lesson2.html

// While loop - it is executed until the condition return false.
var i = 1;
var total = 0;

while (i <= 10) {
	total = total + i;
	i = i + 1;
}

console.log("Total: " + total);

// For loop
// Format of a for loop:
// for (/* before loop starts */; /* test before each iteration */; /* after each iteration */) {
  // set of statements
// }

var total = 0;
var i; //we state the value of i below

for (i = 1; i <= 10; i = i + 1) {
	total = total + i;
}
console.log("Total: " + total);


// Arrays

var animals = ["dog", "cat", "rabbit", "horse", "elephant", "monkey"];

console.log("The first animal of the array is: " + animals[0]);
console.log("There are " + animals.length + " animals in this array.");

var i;
//i = 0 because we start from index 0 in the array

for (i = 0; i < animals.length; i = i + 1) {
	var animal = animals[i]; 
}
console.log(animal);