const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

// ---------------- CONSOLE METHODS -------------------------

people.forEach((person, index) => {
  console.log(person.name);
  console.info(person.name); // pretty much the same as above
  if (person.name === 'Wes') {
    console.error("Hey it's Wes!"); // makes the output look like an error, but it isn't
    console.warn("Hey it's Wes!"); // same as above, but yellow and an exclaimation mark
  }
});

console.table(people); // anytime you have a list of objects and they all have the same property, it will format the data into a table

function doALotOfStuff() {
  console.group('Doing some stuff'); // groups the console stuff together
  console.log('hey there');
  console.warn('be careful');
  console.error('oh no');
  console.groupEnd('Doing some stuff'); // make sure to close the group
}

doALotOfStuff();

people.forEach((person, index) => {
  console.groupCollapsed(`${person.name}`); // can make the group show as collapsed first
  console.log(person.cool);
  console.log(person.country);
  console.groupEnd(`${person.name}`);
});

function doctorize(name) {
  console.count('Running Doctorize'); // counts the number of times this function runs.
  console.count(`Running Doctorize for ${name}`);
  return `Dr. ${name}`;
}

doctorize('wes'); // outputs above

// ---------------- CALLSTACK / STACK TRACE -------------------------
function greet(name) {
  doesntExist(); // running the greet function CAUSES AN ERROR
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes')); // calls greet and soctorize function
  console.log(name);
}

// ---------------- GARBBING ELEMENTS -------------------------
/* 
    THIS IS ONLY AVAILABLE ON THE CONSOLE
    type '$0' on the browser console and it will grab the information that you are currently selecting.
    This way you can even call in more info like the value ie. '$0.value'
    $0 - means the last element clicked
    $1 - the second last element that you clicked and so on...
    $$ - SHORTHAND SELECTORS - (can't be used in jquery?) Allows us to select things
         ie. $('p') gives us the query selector and finds the first match
             $$('p') finds all of the p tags on the page
 */

people.forEach((person, index) => {
  // debugger;
  /*
        DEBUGGER - with the dev tools open, it will pause the js from running, so we can see the js on that moment
        debugger allows us to set a breakpoint. GIves you lots of info of what happened
        when you hit the play button (if will resume, if its a loop it will go to the next loope).
        You can also go to the next function call, line by line
        this helps reduce the number of console.logs 

        REMEMBER TO REMOVE THE DEBUGGER COMMAND ONCE YOU ARE DONE
    */
  console.log(person.name);
});

// ---------------- BREAKPOINTS -------------------------
// You can create a breakpoint in the console. Under Sources got to the js file and click on the line number
// so when you refresh the page, it will stop at that point

// ---------------- SCOPE (will be talking about it in the next section) -------------------------

// ---------------- NETWORK REQUESTS -------------------------
/*  if you want to see something being fired off.
    open Network tab in the console, you can see all the files that are being used. 
    you can see when the website is sending out data for you
*/

// A Dad joke fetch - goes to an external API and grabs a dad jokeß
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}

// now you can see this new item on the Network tab
// You can also filter the datat (XHR shows when theyre sending the data out about you). Try searching something on the Apple site ie. ipad
// and you can see in XHR files are getting added making suggestions

// ---------------- BREAKUP ON ATTRIBUTE -------------------------
/* If you see js being used on the site but you don't know where it is in the files
    right click the element Break on > attribute modifications. This will cause a breakpoint when a change happenns in one of the attributes selected
    subtree option is when a div is added
    node removal - removes an element or text
    Under Sources, you could also have Event Listener Breakpoints, so if you're trying to figure out when something happends and
    when, throw in a breakpoint ie. you can have a breakpoint when someone clicks also XHR breakpoints (anytime a fetch request is 
    made or goes off to an external API it will break ie. when you fetch the dad joke)
*/

const button = document.querySelector('.bigger');
button.addEventListener('click', function (e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});
