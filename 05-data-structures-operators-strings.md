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


























