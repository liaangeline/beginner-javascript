/* 
    
    People say js functions are 'first class citizens'
    this means js functions are values in themselves, they can be stored in variables
    and passed in to other functions.

    functions can be passed into other functions, they can be stored in variables, 
    they can be handled and moved around just like in any other piece of data in js

*/

// Different ways to write functions

// REGULAR WAY

// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// ANONYMOUS FUNCTION. function without a name.
// the example below causes an error. Using this is better for callbacks or immediately invoked function expression

// function (firstName) {
//   return `Dr. ${firstName}`;
// }

/* 
    FUNCTION EXPRESSION - when you store a function as a value in a variable
    we took an anonymous function and turned it into a variable, now we don't get an error.

    Why would you want to use this instead of the regular way?
    You can't run the function even before it was defined.

    Because you define a regular function with a function keyword, but on the 
    function expression, you use a variable, 

    HOISTED - functions that are declared using a function keyword (ie. the regualr way)
    which means js takes all functions and puts them at the top, so anywhere you call the 
    function it will be available to you. So you can run a function before its defined

    JS DOES NOT HOISE VARIABLE FUNCTIONS. It will hoist the declaration of the variable
    but it doesn't do it with the type of function below.

*/

// console.log(doctorize('lia')); // error message

// const doctorize = function (firstName) {
//   return `Dr. ${firstName}`;
// };

/* 
    ARROW FUNCTION - have 3-4 nuance ways to declare them
    consise functions (ie. callback functions). quick one liner function
    they don't have their own scope in reffered to the 'this' keyword

    Arrow functions are anonymous functions.

*/

// regular function
function inchToCM(inches) {
  const cm = inches * 2.54;
  return cm;
}

// smaller way to write the code
const inchesToCm2 = function (inches) {
  // explicit return -
  return inches * 2.54;
};

/* eslint-disable */

// now we can convert the above code into an arrow function
// remove 'function' and add a fat arrow after the parameter
// if your function needs to do some stuff inside of the block, you can leave it like this

const inchesToCm3 = (inches) => {
    return inches * 2.54;
}

// IMPLICIT RETURN - without having to type the return and curly brackets keyword and its all in one line
// same as above, the curly brackets and the return keyword needs to be removed and it need to be in one line.
const inchesToCm4 = (inches) => inches * 2.54;

// If you only have one parameter for your function, you can get rid of the parentheses as well
const inchesToCm5 = inches => inches * 2.54;


function add(a, b = 3){
    const total = a + b; 
    return total;
}

// you cant remove the parentheses because there is more than one parameter
const add2 = (a, b = 3) => a + b; 

// RETURNING AN OBJECT 
function makeABaby(first, last){
    const baby = {
        name: `${first} ${last}`,
        age: 0
    }

    return baby;
}

// using one curly bracket will be read as the curly bracket which starts and ends the block of code, eventhough our intended use is for an object

// const makeABaby2 = (first, last) => { name: `${first} ${last}`,age: 0 }

// to solve this, add parentheses. This will contain it inside the parentheses and won't think that its the block of the function
const makeABaby2 = (first, last) => ({ name: `${first} ${last}`,age: 0 });

/* 
    IIFE - Immediately Invoked Expression or IRFE - ... Run ...
    wrap a function in a parentheses. (parentheses always run first in js). This will
    return a function value (example below)
    Then you can immediately run that function by putting parentheses at the end
*/ 

(function() {
    console.log('running anonymous function');
    return 'hello';
})();

// with parameter
(function(age) {
    console.log('running anonymous function');
    return `hello I am ${age}`;
})(100);

/* 
    METHODS - function that lives inside an object
    ie. console.log()     ---    log() is the function   ----- console is an object

*/

const wes = {
    name: 'Wes Bos',
    // Method!
    // functions can have names, but not necessary
    sayHi: function() {
        console.log('Hey Wes')
        return 'Hi Wes';
    },

    // Short hand method 
    // you can get rid of the function keyword and colon
    // this will make a property called yellHi and set to a function called yellHi
    yellHi() {
        console.log('Hi!');
    },

    // Arrow function - this example is an arrow function that takes no parameters, but you can have one
    // the only reason why you would want to do it this way is if you don't want to access 'this'
    // arrow functions take the parent scope of this
    whisperHi: () => {
        console.log('hello')
    }
}

// CALL BACK FUNCTIONS - something that will happen when something is done. 
// ie. when something clicks something run this, or when a certain amount of time has past, run this. 

// click callback
const button = document.querySelector('.clickMe');
console.log(button);

//listen for a click - when the click happens we pass it reference to a function that we want to run
button.addEventListener('click', wes.yellHi);


function handleClick(){
    console.log('neat');
}

// const button2 = document.querySelector('.clickMe2');
// button2.addEventListener('click', handleClick);

//you can also do an anonymous function
const button2 = document.querySelector('.clickMe2');
button2.addEventListener('click', function() {
    console.log('nice job!');
});
// this is called a callback function. a function that get passed on to another function and called by the browser at a later point in time

//Timer callback
// takes a function to call after a certain amount of time and asks for a duration in miliseconds
setTimeout(wes.yellHi, 1000);

//can pass it in an anonymous function
setTimeout(function() {
    console.log('Done!')
}, 1000)

// arrow function
setTimeout(() => console.log('Yay!'), 1000)