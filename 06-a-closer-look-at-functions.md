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


## Functions Accepting Callback Functions


## Functions Returning Functions


## The call and apply Methods


## The bind Method


## Coding Challenge #1


## Immediately Invoked Function Expressions (IIFE)


## Closures


## More Closure Examples

































