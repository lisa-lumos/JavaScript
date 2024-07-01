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


## First-Class and Higher-Order Functions


## Functions Accepting Callback Functions


## Functions Returning Functions


## The call and apply Methods


## The bind Method


## Coding Challenge #1


## Immediately Invoked Function Expressions (IIFE)


## Closures


## More Closure Examples

































