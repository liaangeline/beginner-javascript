// note: If the script tag is in the head instead of below the end tag of the body, you can add this function
// so the js file waits for the DOM to load first before doing anything. There can still be complications though
//
// function init() {
// js code
// }

// document.addEventListener('DOMContentLoaded', init); // listen to the document and run function once the DOM content has loaded
//
//
//
//

// Two main ways to select elements from the page: .querySelector and .querySelectorAll
const p = document.querySelector('p'); // selects the first matching element that you chose
const divs = document.querySelectorAll('div'); // .querySelectorAll - searches the entire document for all of the elements that you chose
const items = document.querySelector('.items');
const itemImages = items.querySelectorAll('img'); // you can use querySelector on any other element. here we are looking for an image under the first .items tag
const itemsHeading = document.querySelectorAll('.items h2');
console.log(p);
console.log(divs);
console.log(items);
console.log(itemImages);
console.log(itemsHeading);

// below is the old way (many other versios of getElementBy....)
const classItems = document.getElementsByClassName('items'); // you don't ned to add '.'
console.log(classItems);

//
// ------------------ ELEMENT PROPERTIES AND METHODS ------------------
//

const heading = document.querySelector('h2');
console.log(heading); // seems like just an element, but it is actually an object that has a lot of properties and methods inside
console.dir(heading); // shows object properties
console.dir(heading.textContent); // shows everything inside h2, including code. (GETTER)

// inner and out html
console.log(heading.innerHTML); // shows whats inside the element, same as .textContent, but the tags found inside <h2> are included
console.log(heading.outerHTML); // shows what is outside. ie. <h2> <span> as well as the text

// set the textContent property on that element
heading.textContent = 'I am a heading'; // (SETTER)
console.dir(heading.textContent); // outputs new phrase above (.textContent is a PROPERTY, exists on elements <h2> and nodes)
console.log(heading.textContent);

console.dir(heading.innerText); // only shows the readable text (aware of styling and wont return the text of "hidden " elements)

// add on to text
const pizzaList = document.querySelector('.pizzaQuestion');
console.log(pizzaList.textContent);
pizzaList.textContent = `${pizzaList.textContent} ME!`;
console.log(pizzaList.textContent);

// another way to add stuff - better way!
pizzaList.insertAdjacentText('afterbegin', 'Hey! '); // this is a METHOD
pizzaList.insertAdjacentText('beforebegin', 'Neat! ');

//
// ------------------ GET, ADD AND REMOVE CLASSES ------------------
//

const pic = document.querySelector('.nice');
// ------- CLASS LIST --
console.log(pic.classList); // shows a list of things we can do

pic.classList.add('dog'); // added a new class 'dog'
pic.classList.add('cool');
pic.classList.remove('cool'); // removed the class cool

//
// ------------------ EVENT LISTENER ------------------
//

function toggleRound() {
  pic.classList.toggle('round'); // adds the class if its not there, removes it if it is
}

pic.addEventListener('click', toggleRound); // makes image round or square on click

pic.classList.contains('round'); // check if it is using the round class

//
// ------------------ ATTRIBUTES ------------------
//

// anything that is provided to an element as additional info
// like classes src alt etc.

pic.alt = 'Cute pup'; // add alt (SETTER)
console.log(pic.alt); // (GETTER) (some are both getters and setters)
pic.width = 400; // adjust size
pic.naturalWidth = 200; // (GETTER) cannot change the width because this should only show the actual width of the image

console.log(pic.naturalWidth); // outputs 0 but if you put this in the console the width is correct. This is because the image wasn't downloaded completly

// wait for all of the things that need to be downloaded ie. images (placing the script before the </body> only waits for the HTML to load)
window.addEventListener('load', function () {
  console.log(pic.naturalWidth); // now it will output the correct size
});

// wait for the specific image to load
pic.addEventListener('load', function () {
  console.log(pic.naturalWidth); // now it will output the correct size
});

pic.setAttribute('alt', 'REALLY CUTE PUP'); // this will also work for things that are non standards. ie. making up attributes (not really recommended)
console.log(pic.getAttribute('alt'));
console.log(pic.getAttribute('alt'));

// a better way
// if you want your own set of sttributes, use data attributes (things like data-name data-...)
// if you want to attach some kind of meta data that does not have any standard name attribute, you can use data-...
const custom = document.querySelector('.custom');
console.log(custom.dataset); // gives a list of all the propeties

custom.addEventListener('click', function () {
  alert(`Welcome ${custom.dataset.name}`);
});
