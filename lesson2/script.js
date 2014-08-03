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
