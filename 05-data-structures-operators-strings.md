# 5. Data structures, Modern Operators, Strings
## Destructuring Arrays
Destructuring is an ES6 feature. It is a way of unpacking values from an array/object into separate variables. By doing this, you are giving array elements names, not creating new variables in the memory. 

```js
const arr = [2, 3, 4];

// without destructuring
const a = arr[0];
const b = arr[1];
const c = arr[2];

// with destructuring
const [x, y, z] = arr;

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// you do not have to unpack all vals in an arr
let [first, second] = restaurant.categories;

// you can skip elems during unpacking
let [firstElem, , thirdElem] = restaurant.categories;

// to swap two elems, without destructuring
const temp = first;
first = second;
second = temp;

// to swap two elems, with destructuring
[first, second] = [second, first];

// use destructuring to unpack array returned by a function
const [myStarter, myMain] = restaurant.order(2, 0);

// nested destructuring
const nested = [2, 4, [5, 6]];
const [a, , [c, d]] = nested;

// set default vals for unpacked variables
// useful if we do not know the array size
// such as when getting data from an API
const [p, q, r] = [8, 9]; // the val of r will be undefined
const [p=1, q=1, r=1] = [8, 9]; // the val of r will be 1
```

Whenever JS sees square bracket on the left hand side of the equal sign, it knows it should do destructuring. 

## Destructuring Objects
```js
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // this function destructure the object passed into it
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// useful when dealing with 3rd-party data
// since in an object, the order of its elems doesn't matter, so no longer need to skip
// by default, the variable names are same with the property names
const {name, openingHours, categories} = restaurant;
console.log(name);

// give unpacked variables a different name
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName);

// have default values if the attribute doesn't exist in the object
const {menu = [], starterMenu: starters = []} = restaurant; 
console.log(menu, starters);

// mutate variables while destructuring objects
let a = 11;
let b = 9;
const obj = {a: 23, b: 7, c: 14};

// this gives an error: {a, b} = obj; the fix is to wrap whole thing in (). 
({a, b} = obj);
console.log(a, b); // returns 23 an 7

// nested objects
const {fri} = openingHours;
console.log(fri);

const {fri: {open, close}} = openingHours;
console.log(open, close);
// give then different var names
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);

// often, in JS, we have functions with a lot of parameters. 
// then as a user, it can be hard to figure out the order of these parameters. 
// So, instead of defining the parameters manually,
// we can just pass an object into the function as an argument,
// and the function will then immediately destructure the object. 
restaurant.orderDelivery({ // pass an object into the function
  time: '22:30',
  address: '1234 abc street',
  mainIndex: 2,
  starterIndex: 2,
});
```

## The Spread Operator (...)


















## Rest Pattern and Parameters


## Short Circuiting (&& and ||)


## The Nullish Coalescing Operator (??)

## Logical Assignment Operators



## Looping Arrays: The for-of Loop

## Enhanced Object Literals

## Optional Chaining (?.)


## Looping Objects: Object Keys, Values, and Entries


## Sets


## Maps: Fundamentals


## Maps: Iteration


## Summary: Which Data Structure to Use?




## Working With Strings 




## String Methods Practice


























