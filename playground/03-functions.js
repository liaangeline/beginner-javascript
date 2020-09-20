/* eslint-disable */ 

/* 

Functions allow us to group together a set of statements. 
ie. let age = 18; is a statements

When you pass data into a function it is called an argument. 
They perform some work and that is reffered to a statement

They also return a value

*/

Math.max() //output -Infinity

// the line below is a js statement
// 10 and 12, the data you want to pass into the function are called arguments
Math.max(10, 12) // will return the highest number which is 12
// sometimes functions will return data (the answer/output which is 12)

Math.floor(2.4444) //2

console.log('hey'); //if you paste this in a broswer console it will log 'hey' but it will say undefined below
// not all functions will return a value

parseFloat('56.290831') //will turn the string into a number
parseInt('56.990831') //will turn the string into an integer. output 56

Date.now() //takes no arguments. Return the number of milliseconds since ?Jan 1 1970?

// functions that will work with the DOM (HTML elements on the page)
const p = document.querySelector('p'); //find something that matches the selector in the HTML file and puts it in a variable
console.log(p);

// window scroll
window.scrollTo(0,200); //takes in x and y coordinates and scrolls to that location

// you can also pass a options object
window.scrollTo({
    top: 100,
    left: 100,
    behavior: 'smooth'
  });