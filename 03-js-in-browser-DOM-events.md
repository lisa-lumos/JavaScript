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

## The Final code
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
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
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

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
```























