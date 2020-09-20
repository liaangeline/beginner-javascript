/*

FUNCTIONS can do anything. Groups together a set of instructions. 
They can take in values (arguments)
Can return a new value or set of values

Functions are created or defined then later called.

When you make a function and author what it does, its called a function definition 
When you run the function it's called running or calling a function. 

*/

// This is a function definition - define it, name it, add parenthesis and open and close (function block)
function calculateBill() {
  // this is the function body. It will be part of the function
  // console.log('running Calculate Bill');

  // variables created inside of the function (block scoping) can only be access inside the function, not available outside.
  const total = 100 * 1.13;
  // console.log(total);

  // return allows us to use a variable that is created in a function to be available outside.
  return total;
  // so when you run calculateBill() it will return the value of total
  // however you still can't run total outside of the function
}

// function call or run
calculateBill(); // this will show the value. (undefined if nothing is returned)

// You can store the value, since the total variable is not available, only the value. You need to capture the result/returned value of the variable.
const myTotal = calculateBill();
console.log(myTotal);
// Now you have access to the value of the total
console.log(`Your total is ${myTotal}`);

/* 
    the variable 'total' was a temporary variable, since it was created inside a function, it 
    was only available inside that function. And when the function is done running, the variable 
    is cleaned up (garbage collected) so it's no longer needed. 

    So if you want to capture the value of of the function you have to put it into a variable
    before you can display it.
*/

// You can also do this
console.log(`Your total is $${calculateBill()}`);

//      calculateBill;      in the console, it will show the code that is behind the function, not the actual value

//
//
//
// ---------------- PARAMETERS AND AGRUMENTS -------------------------
//
//
//

// tip: don't repeat yourself, keep your code DRY

// PARAMETERS - when you define a function you can place parameters.(ie. billAmount, taxRate) parameters are like placeholders

// add parameters. When someone calls this function, it expects somebody to pass it some data
function calculateBill2(billAmount, taxRate) {
  console.log(billAmount);

  const total = billAmount * (1 + taxRate);
  return total;
}

// the values that you pass are called ARGUMENTS (ie. 100, 0.13) arguments are actual values
// so billAmount will be 100 and taxRate will be 0.13
const myTotal2 = calculateBill2(100, 0.13); // outputs 100.13

// this way the function works without having to reassign
const myTotal3 = calculateBill2(200, 0.13); // outputs 100.13
console.log(myTotal2, myTotal3);

/* 
    What ever you write as an argument and when you call the function, it will
    make a temporary variable and make them available to you via the name you put into your parameters.

*/

// you can use a variable as well, as long as there is a value it will work
const liaBill = 500;
const liaTaxRate = 0.3;
const liaTotal = calculateBill2(liaBill, liaTaxRate);
console.log(liaTotal);

const liaTotal2 = calculateBill2(100, liaTaxRate);
console.log(liaTotal2);

// when values get passed into a function they sort of get renamed into whater it is you defined your parameter function as.

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

const greeting = sayHiTo('Lia');
console.log(greeting);

const greeting2 = sayHiTo('Ail');
console.log(greeting2);

// values can be passed directly, in a variable that holds a value and expressions
const myTotal4 = calculateBill2(20 + 20 + 20 + 30, 0.15);
console.log(myTotal4);

const myTotal5 = calculateBill2(liaBill + 20, 0.15);
console.log(myTotal5);

// pass function as arguments
function doctorize(name) {
  return `Dr. ${name}`;
}

console.log(doctorize('lia')); // output Dr. lia

// it is okay to reuse parameters because when parameters are passed in, when arguments are passed in, they are only available inside that function.
function yell(name) {
  return `HEY ${name.toUpperCase()}`;
}

console.log(yell(doctorize('lia'))); // output HEY DR. LIA

// DEFAULTS
function yell2(name = 'you') {
  return `HEY ${name.toUpperCase()}`;
}

console.log(yell2()); // HEY YOU

// this way it will work and fall back to the default (you) if you don't pass a parameter

// default is also useful if you know that the parameter won't change values

// if you have multiple parameters, but you want one of them to use the default value, you need to use undefined
// ie. yell2(undefined, 'hello', 35);

// You can also use an empty string so it won't cause an error ie. name = ''
