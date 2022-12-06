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