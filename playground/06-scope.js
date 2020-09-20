/* eslint-disable */


// ---------------- GLOBAL VARIABLES -------------------------
// variables that are available ANYWHERE in your application
const first = 'wes'; // global variables, it is not inside any modules, functions etc. and can be accessed at any js running on the page
// ie. a script tag or like the console

// global scope can be found in 'window' <- type in the console ie. document, setTimeout etc.

let second = 'bos';
var age = 100;

/* 
    both above variables can be found when you type the name in the console. 
     but if you put window in front ie. window.second the let and const will 
    output undefined, but the var will work. This is because the var variables are attched to the window object
    and are globally scoped. let and const are still globally scoped but not attached to the window. 
*/

function sayHi(){
    console.log('hi!');
}
sayHi();
// functions when declared globally will work in the windowie. window.sayHi()




// ---------------- FUNCTION SCOPE -------------------------
const myAge = 100;

function go(){
    const hair = 'blonde'; //function scope - the variable created in this function is only available in the function
    //console.log(hair); //outputs blonde
    // console.log(age); // it works. global variables can go in. if this variable is not found in the function it will go a level higher and check there and keep going until it find it
    return hair
}
go(); // causes an error since the variable 'hair' is not defined

// You will need to create a new variable
const getHair = go();
console.log(getHair); // works!

console.log(age);
//console.log(hair); // won't work becaus the variable hair is only available inside the go() function

// You can name the variable the same thing if they are in separate scopes, but it is not recommended 


// ---------------- FUNCTION SCOPING -------------------------
function sayHello(name){
    function yello(){
        console.log(name.toUpperCase()); //THIS FUNCTION WILL BE SCOPE TO THE PARENT FUNCTION
    }
    yello();
}
sayHello('lia') // LIA
//yello(); // ERROR yello is not defined

// ---------------- BLOCK SCOPE -------------------------

// variables are scoped differently 
// remember: const cannot be reassigned, while let and var can

if(1 === 1){
    // block (normally with curly brackets) inside the curly brackets those variables are not allowed outside
    const cool = true;
    var coolio = true; //only one that works outside the block scope
    let cooool = true;
}
console.log(coolio); //coolio works! output: true
//console.log(cooool); //cooool is not defined
//console.log(cool); //cool is not defined

//MAKE IT AVAILABLE OUTSIDE THE FUNCTION SCOPE

//let hello; //create a global variable hello ----- (not usually recommended)

// if(2 === 2){
//     let hello = true; //define/update the global variable hello 
// }

// console.log(hello); // now it works! ooutput:true

//its better for it to be available inside a function ----- a better way

function greeting(name){
    let hello;
    if(name === 'wes'){
        hello = true; 
    } else {
        return false;
    }

    return hello
}
console.log(greeting('wes')); // true
console.log(greeting('qwerty')); // false

// // this causes the variable i become a global variable which can create issues
// for(var i = 0; i < 10; i++){
//     console.log(i);
// }

// turning the variable into 'let' prevents the issue
for(let i = 0; i < 10; i++){
    console.log(i);
}

// var variables are not block scope but FUNCTION SCOPED
function greeting2(name){
    if(name === 'wes'){
       var hello2 = true; // var variable is available inside the if statement as well as inside the function block
    } else {
        return false;
    }

    return hello2
}
console.log(greeting2('wes')); // true

// console.log(hello) // will not work
// note: this means the var name is available only inside the function. 
// but if you are not using it in a function it essentially becomes a global scope

const dog = 'snickers';

function logDog() {
  console.log(dog); //2. logDog wants to print variable dog which is defined above 
}

function go2() {
  const dog = 'sunny'; //1. looks here, wants to go to function logDog()
  logDog();
}

// it doesn't care where it runs, it cares about where it is defined

go2(); //snickers




const doggo = 'snickers';

function logDog2(doggo) {
  console.log(doggo);
}

function go3() {
  const dog = 'sunny'; 
  logDog2(dog); // it cares about the value, it gets the value from the variable above
}

go3(); //sunny


// ------ SUMMARY and TIPS --

// TRY YOUR BEST TO NOT MAKE GLOBAL VARIABLES. It will make things easier if you don't global variables
// var is function scoped and let and const are block scoped
// Modules - almost impossible to create global variables unless you specifically attach it to window....
