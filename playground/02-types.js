/* the comment below will disable ES lint, you can also disable by line */
/* eslint-disable */ 

// ---------------- STRINGS -------------------------
// Three ways to create a string
const name = 'lia';
const middle = "angeline";
const last = `lastName`;

// single and double quotes are useful 
const sentence = "she's here";

// forward slash allows us to escape a character
const secondSentence = 'she\'s here';

// to get a forward slash to show up you need two
const thirdSentence = 'she\'s here \\';

// multiple quotes
const fourthSentence = "she's \"here\"";

// backticks
const fifthSentence = `shes's "here"`;

// multiple lines
const song = 'Is \
\
this\
\
it?';

const secondSong = `Is 

this

it?`;

const html = ` 

    <div>
        <h1>Hello ${name}!</h1>
    </div>

`;

document.body.innerHTML = html;

// concatenation - when two or more strings are combined into one
// interpolation - when you put words inside of a string
const hello = "hello my name is " + name + ". Nice to meet you!"

let secondHello = 'hello my name is ';
secondHello = secondHello + name;
secondHello = secondHello + '. Nice to meet you!';

const thirdHello = `hello my name is ${name}. Nice to meet you! I am ${1+100} years old`;








// ---------------- NUMBERS -------------------------

/*  integer - 10
    float - 10.5
*/ 

// check type
const myAge = 100; 
const firstName = 'lia';

typeof myAge; // will output that this is a number
typeof firstName; // this is a string
typeof '1234'; // string

// math 
const a = 5;
const b = 10;

a / b // division
b * a // multiplication
a - b // subtraction
b + a // addition

1 + '1' // will output 11, using concatenation
'10' * '10' // will output 100 eventhough they are both strings (this will work on * / and - but not +. Although this is not recommended) 

Math.round(20.5); // rounds the number. Output will be 21
Math.round(20.3); // output 20

Math.floor(20.5); // rounds number down. Output 20
Math.floor(20.1); // output 20
Math.floor(20.9); // output 20

Math.ceil(20.5); // rounds number up. Output 21
Math.ceil(20.1); // output 21
Math.ceil(20.9); // output 21

// outputs a random number between 0 to 1
Math.random() //ie. 0.9915164244695582

const smarties = 20;
const kids = 3;
let eachKidGets = smarties/kids; // output 6.6666.....
eachKidGets = Math.floor(eachKidGets); // output 6

// Modular - how many are left after they have been evenly split up
const iGetTheLeftovers = smarties % kids; // output 2

console.log(`Each kid gets ${eachKidGets} smarties, I get ${iGetTheLeftovers}.`)

0.1 + 0.2 // output 0.30000000000000004  ???? 
//    window.location = `https://${0.1 + 0.2}.com`;     paste this line in the browser console. It will explain why the output is wrong

/* "Your language isn’t broken, it’s doing floating point math. Computers can only natively store integers, 
so they need some way of representing decimal numbers. This representation is not perfectly accurate. 
This is why, more often than not, 0.1 + 0.2 != 0.3."*/

// infinity - higher than computers can calculate (** is to the power of)
10 ** 10 // output 100
1000 ** 20 // output 1e+60 (to the power of 60)
1000 ** 200 // output Infinity

typeof Infinity // output number
typeof -Infinity // output number

10 / 'puppy' // output NaN (not a number)








// ---------------- OBJECTS -------------------------
/*  everything in js is an object. Used for collections of data and functionality 
    ie. arrays, dates etc. 

    When something is an object in JavaScript, it is because we want to group things together

*/

// one of the ways you can create an object is using curly brackets.
const person = {
    /*  properties and values
        order doesn't matter in an object
        if you need the order to matter, then you use an array
    */
    first: 'lia',
    middleName: 'angeline',
    age: '100',
};

typeof person // output "object"

person.first // output lia
person.middleName // output lia
person.age // output lia







// ---------------- SYMBOL -------------------------
// unique identifiers/properties in js. 









// ---------------- NULL & UNDEFINED -------------------------

//outputs undefined because there is nothing there. A variable was created but it wasn't set
let dog; // no value set to it
console.log(dog) // output undefined

person.dog //output undefined


//null is a value of nothing
const somethingNull = null; // has a value of nothing

const cher = {
    first: 'cher'
}

cher.last //undefined

const teller = {
    first: 'Raymond',
    last: 'Teller'
}

teller.first = 'Teller';
teller.last = null;

teller.last // value of null









// ---------------- BOOLEAN -------------------------

// manually set or calculated. True or False. 

let isDrawing = false;

let age = 18;
let ofAge = age > 19; 
console.log(ofAge); //false

// now age is set to 100
age = 100;
ofAge = age > 19; 
console.log(ofAge); //true

// you should almost always use triple equals instead of double equals
age === 100 // true
age === 10 // false

let age2 = 100; 
age === age2 //true

//double equals
10 === 10 //true
10 == 10 //true

// triple equals will check if the values on the left and right side are the same and the type
10 === '10' //false
10 == '10' //true
// double equals outputs true because it only checks if both sides are the same value, but doesn't check the type.

