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

// Methods is a function that belongs to an object
// .push() method adds an object to the end of the array 
animals.push("zebra");
// .unshift() method adds an object to the beginning of the array 
animals.unshift("cow");
console.log(animals);
// .pop() removes the last object of the array
animals.pop();
console.log(animals);
// .shift() removes the first object of the array
animals.shift();
console.log(animals);
