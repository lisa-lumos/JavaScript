# 6. A Closer look at functions
## Default Parameters
Sometimes its useful to have functions where some parameters are set by default, so we do not need to pass them in manually, when we don't want to change the default. 

```js
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1, // set default val
  price = 199 * numPassengers // default val can contain any expression
  // note that you cannot reverse the order of the latter 2 args
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000); // set the 2nd param as default
```

## How Passing Arguments Works: Value vs. Reference
When passing a primitive type to a function, it passes a copy of the primitive. And when a reference type (such as an object) was passed to a function, the reference got copied. 

`JS doesn't have passing by reference, only passing by value.` Unlike C++, where you ca pass a reference to any value, instead of the value itself - this works even with primitives, so you could pass a reference to the value of 5, then the original value outside of the function could be changed (aka, pass by reference). 

Note that for objects, we do pass in a reference, which is the memory address of the object. However, the reference itself is still a value - it is a value that contains a memory address. So we "pass a reference" to the function, but we do not "pass by reference" - which is an important distinction. 

## First-Class and Higher-Order Functions
First class functions: functions are simply values, they are just another type of object. 

We can also pass functions as arguments to other functions, or return functions from functions. 

Many objects in JS have methods, like array methods. So functions can also have methods. 

Higher order functions: a function that receives another function as an argument, or, a function that returns a new function. 

The function that is passed in as an argument is also called a "callback function", because it will be called later by the higher order function. 

## Functions Accepting Callback Functions
```js
const oneWord = function (str) {
  // A regular expression with the g (global) flag (/ /g) will replace all occurrences of that pattern throughout the string.
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('High Five!');
};
document.body.addEventListener('click', high5); // a higher order function
['Jonas', 'Martha', 'Adam'].forEach(high5); // another higher order function

```

The advantage of callback function: 
- Makes is easy to split the code into reusable and interconnected parts. 
- Allows us to create abstraction, so that we can hide some detailed code implementation. 

It is why "higher order function", which leaves low level details to the "low level functions". 

## Functions Returning Functions


## The call and apply Methods


## The bind Method


## Coding Challenge #1


## Immediately Invoked Function Expressions (IIFE)


## Closures


## More Closure Examples

































