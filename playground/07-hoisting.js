/* eslint-disable */

// ---------------- HOISTING -------------------------
// ALLOWS YOU TO ACCESS FUNCTIONS AND VARIABLES BEFORE THEY HAVE BEEN CREATED

// two things that are hoisted: function declarations and variable declarations

// ------ FUNCTION DECLARATIONS
// eventhough the function is declared before the function itself, it still works
// this is because function declarations are hoisted (js brings the function to the top so you can declare it anywhere)

sayHi(); // this works, only using the regular function like belowfunction (ie. not arrow and others)

function sayHi() { 
  console.log('hey!');
  console.log(add(10, 2)); // this also works
}

function add(a, b) {
  return a + b;
}

// why does this exist?  it can be useful for some people if they want to separate to show
// what this file does and then how the file does it. it makes it easy to organize and summarize.

// ------ VARIABLE DECLARATIONS
// only for var, doesn't work for let or const

//console.log(age); // this will be undefined. since the variable age is defined after
// console.log(cool); // error since cool is not defined
//var age = 10;


// from MDN 
console.log(num); // Returns undefined, as only declaration was hoisted, no initialization has happened at this stage 
var num; // Declaration
num = 6; // Initialization

num = 6; // Initialization
console.log(num); // Returns 6, since the declaration will be hoisted and the initialization is already above the console.log()
var num; // Declaration





// This is a variable declaration.

//var myAge; // declare the variable first
//console.log(myAge);
//myAge = 10;
