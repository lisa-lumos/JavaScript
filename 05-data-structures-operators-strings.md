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
Introduced in ES6. Works on all iterables, including arrays. Most of the built-in JS data structures are iterables, except objects. It can be arrays, strings, maps, sets, etc. 

```js
const arr = [1, 2, 3];

// spread elems in the prv array, used to create a new array
// so newArr becomes [0, 1, 2, 3, 4]
const newArr = [0, ...arr, 4]; 

// can be used to pass multiple elems into a function
console.log(...newArr); 

// More examples:
// add one more menu item to prv restaurant object
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// copy an existing array (shallow copy)
const copyOfMenu = [...restaurant.mainMenu];
// join multiple arrays
a = [1, 2, 3];
b = [4, 5];
const combined = [...a, ...b];

// use spread operator on strings
const str = 'Lisa';
const letters = [...str, '', 'Lumos']; // ['L', 'i', 's', 'a', ' ', 'Lumos']

// Since ES 2018, the spread operator also works on objects, 
// even if they are not iterables. 
const copyOfRestaurantObj = {...restaurant};  // shallow copy of objs
const copyOfRestaurantUpdate = {foundedIn: 2001, ...restaurant, founder: 'Lisa'}; 
```

The big difference between array-destructuring and the spread operator, is that the spread operator takes all elems from the array, and, it doesn't create new variables. So, we can only use it in places where we would otherwise write comma-separated values. 

## Rest Pattern, Rest Parameters (for the rest of elems)
Collect multiple items, and condense them into an array. Called rest, because it takes the rest of the elems, in the destructuring assignment. It must be the last element before the equal sign. 

```js
// spread, because it is on right side of =
const arr = [1, 2, ...[3, 4]]; 

// rest, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // a, b, [3, 4, 5]

// more examples
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu, 
  ...restaurant.starterMenu
];

// with objects, ordering is not needed
const {sat, ...weekdays} = restaurant.openingHours; // will get fri and thur
 
// with functions, "Rest arguments"
const add = function (...numbers) {
  // this function can take a single value, multiple values, or an array
  // which makes it super flexible
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(2, 3, 4);
const x = [5, 6, 7];
add(...x);

// more examples
// if in the restaurant object, we have a function defined as:
orderPizza: function (mainIngredient, ...otherIngredients) {
  console.log(mainIngredient); // an elem
  console.log(otherIngredients); // an array of the rest of the elems. 
},

restaurant.orderPizza('mushrooms', 'onions', 'olives');
restaurant.orderPizza('mushrooms'); // the otherIngredients will be []. 
```

## Short Circuiting (&& and ||)
Logical operators can use any data type, return and data type, and they can do short-circuiting.

For the OR operator, if the first value is a truthy value, it will immediately return that first value. It will not even look at the 2nd value, which is what short-circuiting means.   

For practical uses, we can use the OR operator to set default values, and use the AND operator to execute code in the second part, if the 1st part is true. 

```js
// the result of the OR operator doesn't have to be a boolean
console.log(3 || 'lisa'); // 3
console.log('' || 'lisa'); // lisa
console.log(true || 0); // true
console.log(undefined || null); // null. It returns the last val, because first val is falsy, even if 2nd val is also falsy

// example
// if restaurant have this value, then use it, otherwise use default 10
// instead of using turnery operator, we can use short circuiting
// Note that if this val does exists, but is 0, it will not behave as we wanted
// Solution will be in the next section
const guest1 = restaurant.nGuests ? restaurant.nGuests : 10;
const guest1 = restaurant.nGuests || 10;

// the AND operator
console.log(0 && 'lisa'); // 0
console.log(2 && 'lisa'); // lisa

// example
// the if statement can be replaced by short circuiting
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
```

`''`, `undefined`, `null` are considered as falsy values in JS. 

## The Nullish Coalescing Operator (??)
Was introduced in ES2020. Will check for nullish vals, instead of falsy vals. Nullish values include `null` and `undefined`. It doesn't include 0 or empty string. 
```js
restaurant.numGuests = 0;

// the val will be 10 instead of 0, it is not what we wanted
const guests = restaurant.numGuests || 10;

// the val will be 0, as wanted. 
const guestCorrect = restaurant.numGuests ?? 10;
```

## Logical Assignment Operators
Was introduced in ES2021. 
```js
const restaurant1 = {
  name: 'Capri',
  numGuests: 20,
};

const restaurant2 = {
  name: 'La piazza',
  owner: 'Giovanni Rossi',
};

// assume we need to add numGuests property to objects that do not have them
// and set to a default val
restaurant1.numGuests = restaurant1.numGuests || 10;
restaurant2.numGuests = restaurant2.numGuests || 10;

// the OR assignment operator will make above code concise:
restaurant1.numGuests ||= 10;
restaurant2.numGuests ||= 10;

// according to prv section, it should be replaced by 
restaurant1.numGuests ??= 10;
restaurant2.numGuests ??= 10;

// similarly, there is also logical AND assignment operator &&=
restaurant1.owner &&= '<anonymous>'; // will change nothing in the object
restaurant2.owner &&= '<anonymous>'; // this val will be '<anonymous>'

// note that, restaurant1.owner &&= '<anonymous>'; is different from
// restaurant1.owner = restaurant1.owner && '<anonymous>';
// because the former doesn't create a new property in the object
// while the latter creates this property, and set its val to undefined. 
// so what &&= does, is that if the property already exist, then set it. 
```

## Looping Arrays: The for-of Loop
Introduced in ES6. No longer need to create counters and conditions like a regular loop. Can still use "continue" or "break". 

```js
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// to get the idx, will need more work
for (const item of menu.entries()) {
  console.log(item) // displays the idx and the elem, in a 2-elem array
  // the old way to get them:
  console.log(`idx: ${item[0]}, val: ${item[1]}`);
}

// use destructuring
for (const [idx, val] of menu.entries()) {
  console.log(`idx: ${idx}, val: ${val}`);
}

console.log(menu.entries()); // prints the array iterator itself
console.log([...menu.entries()]); // prints an array of 2-elem arrays

```

## Enhanced Object Literals
```js
// below object is inside the restaurant object
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

// before ES6
const restaurant = {
  name: 'La piazza',
  owner: 'Giovanni Rossi',
  openingHours: openingHours,

  printHello: function (name) { // functions
    console.log('Hello ${name}!');
  },
};

// with ES6
// when property name is same with the variable name
const restaurant = {
  name: 'La piazza',
  owner: 'Giovanni Rossi',
  openingHours, // enhanced object literals

  printHello(name) { // functions
    console.log('Hello ${name}!');
  },
};

// with ES6, can compute property names, not just computing property values
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
  [day-${2 + 4}]: { // can calculate property name, inside [...]
    open: 0,
    close: 24,
  },
};

```

## Optional Chaining (?.)
Assume this restaurant data came from a web api, and we want to know whether this restaurant open on Monday or not. 

```js
console.log(restaurant.openingHours.mon); // undefined
console.log(restaurant.openingHours.mon.open); // type error, because undefined doesn't have open property

// so need to first check if this mon property exists
if (restaurant.openingHours.mon):
  console.log(restaurant.openingHours.mon.open);

// now assume the openingHours property is also optional
// then have to check for both
// which gets harder to handle when you have deeply nested objects,
// with a lot of optional properties

// Optional chaining was introduced in ES2020, to solve this problem

// only if monday exists, the open property will be read,
// otherwise, undefined will be returned 
console.log(restaurant.openingHours.mon?.open); 

// can have multiple optional chainings
console.log(restaurant.openingHours?.mon?.open); 

for (const day of days) {
  // if the property doesn't exist,
  // instead of undefined, display "closed"
  // so, used the nullish coalescing operator
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open ast ${open}`);
}

// optional chaining also works on methods
// if method is not exist, do not call it
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist. ');
console.log(restaurant.orderNoodles?.(0, 1) ?? 'Method does not exist. ');

// optional chaining also works on arrays
const users = [
  {name: 'lisa', email: 'lisa@email.com'}
];
console.log(users[0]?.name ?? 'empty');

```

## Looping Objects: Object Keys, Values, and Entries
```js
// return an array of keys in this objects
const properties = Object.keys(openingHours);
console.log(properties);
console.log(`We are open on ${properties.length} days`);

// loop over the keys of the object "openingHours"
for (const day of properties) {
  console.log(day);
}

// return an array of values in this objects
const values = Object.values(openingHours);

const entries = Object.entries(openingHours);
for (const[day, {open, close}] of entries) {
  console.log(`On ${day}, we open at ${open} and close at ${close}`);
}

```

## Sets
In the past, JS had very little built-in data structures, there was only objects and arrays. But in ES6, 2 more data structures was introduced - sets and maps. 

Set can hold different data types. 

Sets are iterables. 

```js
// inside the parenthesis, need to pass an iterable, such as an array
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza']);
console.log(orderSet); // {"Pasta", "Pizza"}

// strings are also iterables
console.log(new Set('lisa'));  // {"l", "i", "s", "a"}

console.log(new Set()); // a set can also be empty

let orderSize = orderSet.size;

console.log(orderSet.has('Pizza')); // true

orderSet.add('Garlic Bread');

for (const order of orderSet) console.log(order);


orderSet.delete('Pasta');

orderSet.clear();

// The main user case for a set is to rmv dup vals from arrays. 
const arrayDups = ['Pasta', 'Pizza', 'Pizza'];
const mySet = new Set(arrayDups);
const arrayUnique = [...mySet];

// count the number of unique letters in a string
console.log(new set('lisalumos').size);
```

## Maps: Fundamentals
Introduced in ES6. Key value pairs. Key can be of any type, even objects arrays, or other maps. 

```js
const restaurant = new Map();
restaurant.set('name', 'Classico Italiano');
restaurant.set(1, 'Firenze, Italy');
restaurant.set(2, 'Lisbon, Portugal');

// The set method also returns the updated map
console.log(restaurant.set(3, 'place A'))

// This allows chaining of the set methods
restaurant
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open.')
  .set(false, 'We are closed.')
;

// access the value using the key
console.log(restaurant.get('name'));

const time = 21;
let message = restaurant.get(time > restaurant.get('open') && time < restaurant.get('close'));

// check if the map has a certain key
console.log(restaurant.has('categories'));

// delete elem from map, by key
restaurant.delete(2);

// compared with objects, 
// you can use the delete operator, but it is slow and not recommended. 

// get the size of the map
console.log(restaurant.size); 

// rmv all elements from the map
restaurant.clear();

const arr = [1, 2];
restaurant.set(arr, 'test');
console.log(restaurant.get(arr));

rest.set(document.querySelector('h1'), 'Heading');

```

## Maps: Iteration

```js
// another way to initialize a map
const question = new Map([
  ['question', 'What is your favorite color? '], // a key value pair
  [1, 'Red'],
  [2, 'Green'],
  ['correct', 2],
  [true, 'Correct'],
  [false, 'Try again! '],
]);

// convert object to map
const hoursMap = new Map(Object.entries(openingHours)); 

console.log(question.get('question'));

// iterate
for (const [key, value] of question) {
  if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your answer')); 
console.log(question.get(answer === question.get('correct')));

// convert map to array
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
```

## Summary: Which Data Structure to Use?
Common data sources:
1. From the code itself. Such as data written directly in the source code, like a status message
2. From the UI. Such as user input, or data from DOM
3. From external source. Such as data from a web API. 

If the data is a simple list, then use Arrays or Sets. Use sets for de-duplicating an array, and for high-performance. 

If the data is key-val pairs, then use Objects or Maps. 

For example, if an API returns an array of objects, then we can use a JS array to contain this data. 

Maps are better suited for key-val stores than objects, because it has better performance, more flexible (key can have any data type), easier to iterate. Its size is also easier to compute. 

If you need functions as values, then you should use Objects. Because maps doesn't have this. 

For JSON data, it is common to use Objects. 

## Working With Strings 
Strings in js are primitives, but whenever a methods is called on a string, js will first convert it to a String object, behind the scene, then call the method against the string object. After the function is called, the result is converted back to the primitive string. 

```js
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // 'A'
console.log(airline.length); // 16
console.log(airline.indexOf('r')); // 6 (aka, first index of)
console.log(airline.lastIndexOf('r')); // 10
console.log(airline.indexOf('Portugal')); // 8 (case sensitive, if not exist, returns -1)

console.log(airline.slice(4)); // get the substr starts from idx 4, and to the end
console.log(airline.slice(4, 7)); // at the substr with idx [4, 7)
console.log(airline.slice(-1)); // 'l' (counting from the end)

// extract the first word off a string
console.log(airline.slice(0, airline.indexOf(' ')))





```
























