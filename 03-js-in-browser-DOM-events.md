# JS in the browser - DOM and events
## DOM and DOM manipulation
DOM: Document Object Model. A structured representation of html documents, connects JS with html, allows JS to access/manipulate them. Can change text of elements, change html attributes of elements, change their css styles, etc. 

As the html page loads, the DOM tree is automatically created by the browser. 

The DOM always starts with the "document" object, as the root. 

DOM is not a part of the JS language. The DOM and their methods (such as querySelector()) are part of the web APIs, with are libraries that the browsers implement. These libraries are also written in JS, and available to us automatically. 

All browsers implement the same official DOM specification, so DOM manipulation works in all browsers. 

Examples of DOM manipulation: 
```js
// select an elem in the DOM (selected a <p> elem with its class name)
console.log(document.querySelector('.message'));

// get text inside this <p> elem 
console.log(document.querySelector('.message').textContent); 

// set the text of this <p> elem - DOM manipulation
document.querySelector('.message').textContent = 'Correct Number!';

// get the value inside a <input> elem, selecting it by class name
console.log(document.querySelector('.guess').value);

// set the val of this <input> elem
document.querySelector('.guess').value = 23;

// add event listener to a button element, 
// listens for click, 
// and runs the event handler function when the listened event happens
document.querySelector('.check').addEventListener(
  'click', 
  function() {
    // print val in <input> elem
    console.log(document.querySelector('guess').value); 
    // change the text in the <p> elem
    document.querySelector('.message').textContent = "Correct number! ";
  }
);

```

Note that, it is better to have data in you code, instead of having them only in the DOM. 

Examples of CSS styles manipulation: 
```js
// It will be an inline style, applied directly in the html, using the `style` attribute. 

document.querySelector('body').style.backgroundColor = '#60b347'; // select the body element, manipulate the style, set the background-color property, which is represented in camel case in js
document.querySelector('.number').style.width = '30rem'; // select the elem with .number class name, manipulate the style, set the width 
```
Note that, when manipulate a style, always supply a string. 

## The Final code for the game "Guess a Number"
"index.html":
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <title>Guess My Number!</title>
  </head>
  <body>
    <header>
      <h1>Guess My Number!</h1>
      <p class="between">(Between 1 and 20)</p>
      <button class="btn again">Again!</button>
      <div class="number">?</div>
    </header>
    <main>
      <section class="left">
        <input type="number" class="guess" />
        <button class="btn check">Check!</button>
      </section>
      <section class="right">
        <p class="message">Start guessing...</p>
        <p class="label-score"> Score: <span class="score">20</span></p>
        <p class="label-highscore">
           Highscore: <span class="highscore">0</span>
        </p>
      </section>
    </main>
    <script src="script.js"></script>
  </body>
</html>

```

"script.js":
```js
'use strict';

// the state variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0; 

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) { // When there is no input, guess = 0
    displayMessage('No number!');
  } else if (guess === secretNumber) { // When player wins
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) { // When guess is wrong
    if (score > 1) {
      displayM b  essage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score; // update DOM display
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
```

"style.css":
```css
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font-family: 'Press Start 2P', sans-serif;
  color: #eee;
  background-color: #222;
  /* background-color: #60b347; */
}

/* LAYOUT */
header {
  position: relative;
  height: 35vh;
  border-bottom: 7px solid #eee;
}

main {
  height: 65vh;
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.left {
  width: 52rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.right {
  width: 52rem;
  font-size: 2rem;
}

/* ELEMENTS STYLE */
h1 {
  font-size: 4rem;
  text-align: center;
  position: absolute;
  width: 100%;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.number {
  background: #eee;
  color: #333;
  font-size: 6rem;
  width: 15rem;
  padding: 3rem 0rem;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
}

.between {
  font-size: 1.4rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
}

.again {
  position: absolute;
  top: 2rem;
  left: 2rem;
}

.guess {
  background: none;
  border: 4px solid #eee;
  font-family: inherit;
  color: inherit;
  font-size: 5rem;
  padding: 2.5rem;
  width: 25rem;
  text-align: center;
  display: block;
  margin-bottom: 3rem;
}

.btn {
  border: none;
  background-color: #eee;
  color: #222;
  font-size: 2rem;
  font-family: inherit;
  padding: 2rem 3rem;
  cursor: pointer;
}

.btn:hover {
  background-color: #ccc;
}

.message {
  margin-bottom: 8rem;
  height: 3rem;
}

.label-score {
  margin-bottom: 2rem;
}

```

## The Final code for the display component "Modal Window"
"index.html":
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <title>Modal window</title>
  </head>
  <body>
    <button class="show-modal">Show modal 1</button>
    <button class="show-modal">Show modal 2</button>
    <button class="show-modal">Show modal 3</button>

    <div class="modal hidden">
      <button class="close-modal">&times;</button>
      <h1>I'm a modal window 😍</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
    <div class="overlay hidden"></div>

    <script src="script.js"></script>
  </body>
</html>

```

"script.js":
```js
'use strict';

// follows best practices of putting selected elems in variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); // if do not use querySelector instead of querySelectorAll, it will only return the first element, of all elems with this same class name. It now returns a NodeList object. Can use it like an array

const openModal = function () {
  modal.classList.remove('hidden'); // remove this class from the class list of this html elem. Do not use dot before the class name. Removing the whole class removes all properties set inside it. Much more convenient than setting a property directly in the code, such as modal.style.display = 'block', as it is hard to remember, and tedious if you have many properties to set/unset. 
  overlay.classList.remove('hidden'); 
};

const closeModal = function () {
  modal.classList.add('hidden'); // add the class named hidden to the html elem
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal); // this elem can only be available to be clicked on when it is not hidden, so, a click can be used to hide it

// keyboard events are global events, which do not apply to a specific elem
// so listen on the whole document
// keydown/keypress/keyup
document.addEventListener('keydown', function (e) { // can access the event e
  // console.log(e.key);
  if (e.key === 'Escape' && 
      !modal.classList.contains('hidden')) { // only close modal when it is not hidden
    closeModal();
  }
});
```

"style.css":
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  color: #333;
  line-height: 1.5;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: linear-gradient(to top left, #28b487, #7dd56f);
}

.show-modal {
  font-size: 2rem;
  font-weight: 600;
  padding: 1.75rem 3.5rem;
  margin: 5rem 2rem;
  border: none;
  background-color: #fff;
  color: #444;
  border-radius: 10rem;
  cursor: pointer;
}

.close-modal {
  position: absolute;
  top: 1.2rem;
  right: 2rem;
  font-size: 5rem;
  color: #333;
  cursor: pointer;
  border: none;
  background: none;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

p {
  font-size: 1.8rem;
}

/* -------------------------- */
/* CLASSES TO MAKE MODAL WORK */
.hidden {
  display: none;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;

  background-color: white;
  padding: 6rem;
  border-radius: 5px;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 5;
}

```

















