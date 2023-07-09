# JS in the browser - DOM and events
## DOM and DOM manipulation
DOM: Document Object Model. A structured representation of html documents, connects JS with html, allows JS to access/manipulate them. Can change text of elements, change html attributes of elements, change their css styles, etc. 

As the html page loads, the DOM tree is automatically created by the browser. 

The DOM always starts with the "document" object, as the root. 

DOM is not a part of the JS language. The DOM and their methods (such as querySelector()) are part of the web APIs, with are libraries that the browsers implement. These libraries are also written in JS, and available to us automatically. 

All browsers implement the same official DOM specification, so DOM manipulation works in all browsers. 

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


```



























