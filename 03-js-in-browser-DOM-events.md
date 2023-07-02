# JS in the browser - DOM and events
```js
// select an elem in the DOM
console.log(document.querySelector('.message'));

// get text inside this elem 
console.log(document.querySelector('.message').textContent); 
```
## DOM and DOM manipulation
DOM: Document Object Model. A structured representation of html documents, connects JS with html, allows JS to access/manipulate them. Can change text of elements, change html attributes of elements, change their css styles, etc. 

As the html page loads, the DOM tree is automatically created by the browser. 

The DOM always starts with the "document" object, as the root. 

DOM is not a part of the JS language. The DOM and their methods (such as querySelector()) are part of the web APIs, with are libraries that the browsers implement. These libraries are also written in JS, and available to us automatically. 

All browsers implement the same official DOM specification, so DOM manipulation works in all browsers. 



























