# JavaScript Fundamentals 1

## Getting Started
`VS Code` settings: 
Auto save: onFocusChange
theme: (customize)
Multi Cursor Modifier: ctrCmd
Word Wrap (customize)
Format On Save: checked

## Hello World
In Chrome console: 
```
alert("Hello World");
```

## Brief intro to JS
JavaScript is a high-level, object-oriented, multi-paradigm programming language. JS makes web app to have behaviors, dynamic effects, etc. Combined with node.js, they can also build back-end apps. All versions >= ES6 is called modern JavaScript. 

Adding ; to the end of line is optional, but is a good practice. 

## Link a JavaScript file
At the end of the html body tag: 
```html
<script src="script.js"></script>
```

```js
let js = "amazing";
console.log(40 + 8 + 23 - 10);
```

## Values and Variables
```js
console.log("Lisa");
console.log(123);
let firstName = "Lisa";
console.log(firstName);
```

## Data Types
In Javascript, every value is either an Object or a Primitive. 

### The 7 Primitive data types
1. Number. All numbers in JS are floating pointer numbers, they are used for decimals and integers. In `let age = 23; `, the `23` is actually `23.0`. 
2. String. Such as `let firstName = 'Lisa';`. 
3. Boolean. Can only be true or false. `let myFlag = true`. 
4. Undefined. Value taken by a variable that is not yet defined / empty value. `let children; `. 
5. Null. Also means empty value. 
6. Symbol (defined in ES2015). Value that is unique and cannot be changed. (not useful for now)
7. BigInt (defined in ES2020). Larger integers than the Number type can hold. 

Note: JavaScript has `dynamic typing`: We do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically. Therefore, in JS, it is the value that has type, not the variable - Variable simply stores the values that has a type. It also means that later in the code, we can assign a new value with a different data type to the same variable, without a problem. E.g.: variable x can initially be a number and then later, a string. This feature can be useful, but can also be a source of some difficult to find bugs. 

JS comment: 
```js
// This is a inline comment

/* This
   is 
   a
   multi-line comment
*/
```
JS Datatype examples: 
```js
let myFlag = true;
console.log(myFlag);

console.log(typeof true); // boolean
console.log(typeof myFlag); // boolean
console.log(typeof 23); // number
console.log(typeof 'Jonas'); // string

/* dynamic typing example */
myFlag = 'YES!';
console.log(typeof myFlag); // string

/* undefined variable */
let year;
console.log(year); // undefined
console.log(typeof year); // undefined

/* dynamic typing example */
year = 1991;
console.log(typeof year); // number

console.log(typeof null); // should return null, but return object due to a legacy bug. 
```

## let, const and var
`let` and `const` were introduced in ES6. 

Use the `let` keyword to define vars that can change later (reassign/mutate), during the execution of the program. Or to define an empty variable. 
```js
let age = 8;
age = 9;
let name;
```

Use the `const` keyword to define vars that are not supposed to change anytime in the future. Which also means we CANNOT declare empty const vars. 
```
const birthYear = 2000; 
```

Recommend to `use const by default, and only use let when you are really sure that this var is going to change`. Because it is a good practice to have as little var mutations/changes as possible, as it introduces a potential to create bugs. 

The `var` keyword is the old way to define variables, and should be completely avoided. It works very similar to let. More on this later. 
```js
var job = 'programmer';
job = 'student'
```

In js, it is not mandatory to declare a var before using it. It is not recommended to use it this way. 

## basic Operators
```js
const curYear = 2023;
const ageJohn = curYear - 2001;
const ageSara = curYear - 2013;
// can log different values in one console.log()
console.log(ageJohn, ageSara, 2 ** 3) // 22 10 8

// use + to concatenate strs
const firstName = 'Lisa';
const lastName = 'Lumos';
console.log(firstName + " " + lastName)

// +=, ++, ...
let x = 1 + 2; // 3
x += 5; // 8
x *= 2; // 16
x++; // 17
console.log(x); //  17
console.log(ageJohn < ageSara) // false
const isFullAge = ageSara >= 18;
```

## Strings and Template Literals
Concatenating vars and string literals can be a pain to manage the spaces in between. Starting with ES6, we can use `template literals` to do this:
```js
const firstName1 = 'Joe';
const weight1 = 150;
const firstName2 = 'Ann';
const weight2 = 100;

// Use template literal
const sentence = `${firstName1} and ${firstName2} has a weight difference of ${weight1-weight2}lbs. `;
console.log(sentence);

// Use backtick for any string
console.log(`Just a regular string...`);

// Create a multi-line string
console.log(`This
string
has multiple lines`);
```

You can also use backticks for all strings, then you don't need to think about which quotation mark to use. 

## if / else statements
The if/else control structure: 
```js
const age = 14;
const ageForDriving = 16
const isOldEnough = age >= ageForDriving;

console.log(isOldEnough);

let yearsLeft;

if (isOldEnough) {
  console.log("Sarah can start driving. ");
} else {
  yearsLeft = ageForDriving - age;
  console.log(`Sarah cannot start driving yet, wait another ${yearsLeft} years. `);
}
```

## Type Conversion and Type Coercion
Type conversion is manual, while type coercion is automatic. 

Type conversion only can be to three types: number, string, or boolean. 
```js
const inputYear = '2005';
console.log(Number(inputYear) + 10); // type conversion to number
console.log(String(23)); // type conversion to string

console.log(Number('lisa')); // return NaN (invalid number)
console.log(typeof NaN); // return number
```

Type coercion:
```js
console.log('Ben has ' + 10 + ' oranges. '); // type coercion to string
console.log('25' - '10' - 5); // return number 10. type coercion to number
console.log('25' + '10' + 5); // return string 25105. type coercion to string
console.log(5 + '5'); // return string 55. if have string, prioritize to use string
console.log('25' * '10'); // return number 250. type coercion to number
console.log('25' / '10'); // return number 2.5. type coercion to number
```

Use of type coercion: 
```js
// 5 falsy values (vals that becomes false when converted to boolean):
// 0, '', undefined, null, NaN
// but manual conversion is rarely used
console.log(Boolean(0));
console.log(Boolean('lisa'));
console.log(Boolean({})); // empty object is converted to true

// example of coercion
const money = 100; // 100 0
if (money) {
  console.log("Still have money. ");
} else {
  console.log("Have no money. ");
}

let height = 0; // = 0
if (height || height == 0) {
  console.log("Height is defined. ");
} else {
  console.log("Height is not defined. ")
}
```

## Equality Operators == vs ===
- `===` is the strict equality operator, because it does not perform type coercion. 
- `==` is the loose equality operator, which does type coercion. 

```js
// strict equal
const age = 100;
if (age === 100) console.log('You are 100 yrs old. ')
console.log(100 === 100) // true
console.log(100 === 101) // false
console.log('100' === 100) // false

// loose equal
console.log('100' == 100) // true
```

Advice: avoid the loose equality operator as much as you can. Always use `===` only. Even if type conversion is needed, it is best to convert manually instead of relying on the loose operator. Same goes with not-equal operator. 

More examples:
```js
const answer = Number(prompt("What is your favorite number? ")); // create a prompt for user input, prompt returns a string
console.log(answer); 
console.log(typeof answer); // number

if (answer === 20) {
  console.log('20 is a great number! ')
} else if (answer === 7) {
  console.log('7 is a great number! ')
} else {
  console.log('Number is not 20 or 7')
}

if (answer !== 23) console.log('Why not 20?') // strict not equal
```

## logical operators
```js
const hasDriversLicense = true; 
const hasGoodVision = true; 

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = false; 
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
```

## switch
```js
const day = 'friday';
switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}
```

## Ternary operators
```js
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);
```

## JS releases: ES5, ES6+, ESNext
JS releases always have `backward compatibility` all the way to ES1, because of the fundamental principle "Do not break the web". So that even oldest code runs on the newest engine. The first version of JS has a lot of wired bugs, and these cannot be changed because of this compatibility goal. JS now has yearly release.

JS do not have forward compatibility - Old engine cannot run newer code. But users may have an old engine. In dev env, to ensure that you can use the latest JS features, you just need the must up-to-date Google Chrome browser. In prod env, to make sure the code works on older engines, the code can be converted to ES5 (using transpile and polyfill) with Babel. 

ES5 is fully supported in all browsers, down to IE9 from 2011

ES6 and ES6+ are well supported in all modern browsers. And we can use most features in them in production with the help of transpiling and polyfilling. ES6 compatibility table shows what features are currently supported by which browser. 

ESNext means future versions of JS. Some features in these are already usable in production with transpiling and polyfilling. 

Why bother with ES5 still?
- help you better understand how some JS features work behind the scenes
- many tutorials and example code online are still written in ES5. 
- as a developer, you often have to work on old code bases. 

## Activating Strict mode
Recommend to have strict mode on for all scripts. 

Strict mode allows for secure JS code. Note that `'use strict'; ` needs to be the first statement in the script (commends are fine, but no code): 
- strict mode forbids user to do certain things
- it create visible errors in the developer console in certain situations. Without strict mode it may simply fail silently. 
- it introduces a list of variable names that are reserved for potential future features. Such as `interface`, `private`, ...
- ...

Below code will not return anything. 
```js
// without strict mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // accidentally forgot s in the middle
if (hasDriversLicense) console.log('I can drive :D'); // will not print
```

Below code will return an error "caught ReferenceError: hasDriverLicense is not defined"
```js
// use strict mode
'use strict';
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // accidentally forgot s in the middle
if (hasDriversLicense) console.log('I can drive :D'); 
```

## Functions
```js
function logger() { // define a function
  console.log('Hello Lisa! ');
}

logger(); // call a function

function makeJuice(nApples, nOranges) {
  const juice = `Juice with ${nApples} apples and ${nOranges} oranges.`;
  return juice;
}

const appleJuice = makeJuice(5, 0);
console.log(appleJuice);

const appleOrangeJuice = makeJuice(2, 4);
console.log(appleOrangeJuice);

```













## Arrays























## Objects




















