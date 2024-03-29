# 4. How JS works behind the scenes
## An High-Level Overview of JavaScript
The scratch the surface definition: JS is a high-level, object-oriented, multi-paradigm programming language. 

But there is more about JS:
- High-level language. For low-level languages, such as C, you need to manually manage hardware resources, such as ask computer for memory to create a new variable. High-level languages, such s JS and Python, you do not need to manage resources at all. Because these languages have abstractions, that take all of that work away from the user. This makes the language easier to learn/use, but the programs will never be as fast/optimized as low-level languages. 
- Garbage-collected. One of the powerful tools that takes over memory management from us, which automatically removes old/unused objects from the memory. 
- Interpreted, or just-in-time compiles. Compiling/interpreting converts human-readable code to machine code (0s and 1s), and this happens to all programming languages. For JS, this happens inside the JS engine. 
- Multi-paradigm. A paradigm is an approach/mindset of structuring code, which will direct your coding style/technique. Three popular paradigms are: procedural, object-oriented, and functional programming. Procedural programming: What we've been doing so far, just organizing the code in a very linear way, with some functions in-between. Many languages are only procedural, or only object-oriented, or only functional, but JS does all of it. 
- Prototype-based object-oriented. Almost everything in JS is an object, except for primitive values, such as numbers, strings, etc. A JS array is an Prototype, which is an object instance. The arrays we create in our code inherit the methods from the blueprint. 
- First-class functions. Functions are treated just as regular variables. You can pass functions into other functions, and return functions from functions. This allows for functional programming. Not all languages have first-class functions. 
- Dynamically-typed. We don't assign datatypes to variables. They types only became known when the JS engine executes the code. Also, the type of variables can easily be changes as we re-assign variables. Most other programming languages do not have this. If you want to use JS with types, you can look into TypeScript. 
- Single-threaded. JS runs in one single thread, so it can only do one thing at a time. 
- Non-blocking event loop. Takes long-running tasks, executes them in the background, and puts them back in the main thread, once they are finished. 

## The JavaScript Engine and Runtime
The JS engine is a program that executes JS code. Every browser has its own JS engine. The most we known engine is Google's V8, which powers Google Chrome, but also Node.js, the JS runtime to build server side applications with JS, outside of any browser. 

Any JS engine always contains:
1. A call stack. Is where our code is executed, using execution contexts. 
2. A heap. An unstructured memory pool, which stores all the objects the code needs

In `compilation`, the entire source code is converted into machine code at once. This machine code is then written into a portable file, that can be executed on any computer. The execution can happen any long time after the compilation. 

In `interpretation`, there is an interpreter, that runs through the source code, and executes it line by line. There is no "two step process" like in the compilation. Here, the source code still needs to be converted into machine code, but it simply happens right before it's executed, and not ahead of time. 

JS used to be a purely interpreted language, but since interpreted languages are much slower than compiled languages, this low performance no longer works in modern fully fledged web applications. So modern JS engine now use a mix between compilation and interpretation, which is called "Just-in-time" compilation. 

This "Just-in-time compilation" compiles the entire code into machine code at once, and then executes it right away. 

When a piece of JS code enters the engine, the following steps happen:
1. Parsing. The code is parsed into a data structure, called the Abstract Syntax Tree (AST). This works by splitting up each line of code into pieces that are meaningful to the language, then saving those pieces into a tree in a structured way. This step also checks for syntax errors. 
2. Compilation. Takes the generated AST from prev step, and compile it into machine code. 
3. Execution. The machine code from the prev step goe executed right away. 
4. Optimization. Note that the compilation creates a very un-optimized code in the beginning, so it can start executing ASAP. Then in the background, the code is being optimized and re-compiled, when the machine code is executing. This process can be done multiple times, and after each optimization, the prv machine code will be replaced with the newer version, without stopping the execution. 

This process is what makes modern engines, such as V8, so fast. This parsing/compilation/optimization happens in some special threads inside the engine, that is in-accessible from the call stack of the execution. 

JS runtime can be compared to a big box, which includes all the things that we need to use JS, for example, in the browser. 
- JS engine. The heart of any JS runtime is always a JS engine. 
- Web APIs access. Having the engine alone is not enough. We also need access to the web APIs (everything related to the DOM, timers, console.log(...)), which are functionalities provided to the JS engine, but not part of the JS language. JS gets access to these APIs through the global window object. 
- Callback queue. A data structure that contains all the callback functions, that are ready to be executed. Such as, the callback function from the DOM event listener, for a button. When an event happens, the callback function will be called. It will first be put into the callback queue, then when the stack is empty, the callback function is passed to the stack, by event loop, so it can be executed. 

Out of the browser, then JS in running in Node.js, the Web APIs in the above structure is replaced by C++ bindings and thread pool. 

## Execution Contexts and The Call Stack
Assume the code has just finished compiling, and now ready to be executed. A "global execution context" is created for the top-level code (the code that is not inside any function). In any JS project, there is only ever one global execution context. 

After the top-level code finishes execution, the execution of functions, and the waiting for callbacks happens. For each and every function call, a new execution context will be created, containing all the info to run that function. Same with methods. 

All of the execution contexts together, make up the call stack. 

After all functions are done executing, the engine will keep waiting for callback functions to arrive from event loop, so it can execute them. 

Each function gets its own execution context, as soon as the function is called. 

What is inside an execution context?
1. Variable Environment. Stores all variables and function declarations, and an `arguments` object, which contains all the arguments that were passed into the function, that the current execution context belongs to. 
2. Scope chain. A function can also access variables outside of the function. 
3. `this` keyword. 

The execution context is generated in a creation phase, which happens right before execution. 

Note that, the execution contexts belonging to arrow functions do not have the `arguments` object, nor the `this` keyword. Instead, they use those from their closest regular function parent. 

The call stack is a place where execution contexts get stacked on top of each other, to track where we are in the program's execution. The execution context that is on the top of the stack is the one that is currently running. When it's finished running, it will be removed from the stack, and execution will go back to the previous execution context. 

The execution of the global execution context will stop (being poped off the stack), only when we close the browser tab/window. 

## Scope and The Scope Chain
Scoping controls how a program's variables are organized and accessed by the JS engine. It answers the question of "where do variables live?". 

JS uses lexical scoping, where the way variables are organized/accessed is controlled entirely by the placement of functions/blocks in the code. e.g., a function that is written inside another function has access to the variables of the parent function. 

"Scope" is the place in which a certain variable is declared, which is the variable environment inside the function's execution context. In JS, there is global/function/block scopes. 

The "scope of a variable" is the entire region in the code where a certain variable can be accessed. 

The 3 scope types:
- global scope. Outside of any function/block. Variables declared here are accessible everywhere. 
- function scope. Variables declared here are only accessible inside the function. Also called local scope. Function declarations/expressions, arrow functions, all create their own scope. 
- block scope (es6). Anything between curly braces is a block. Variables/functions declared inside a block are only accessible inside that block. Block scopes only apply to variables declared with `let` or `const`. "let and const variables are block scoped". Which means, if you declare a variable using `var` inside a block, it will still be accessible outside of the block, and be scoped to the current function, or to the global scope. 

Starting in ES6, all functions are now also block scoped, in "strict mode". 

A scope can only look up in a scope chain, it will never have access to the variables of an inner scope. The scope chain only works upwards, not downward, nor sideways. 

Variables in the global scope are called global scopes. 

The order of function calls is not relevant to the scope chain at all. The scope chain decides what variables are valid, not where the functions are called. 

The function declaration can be used before or after (above or below) the function being called. The function expression have to be defined before (above) it got called. 

## Scoping in Practice
Note that if a function A's declaration happened above a global variable x was defined, and it uses that variable x, it is fine, as long as x was defined before the function A got called. 

You can declare function B inside function A, and use it there. 

JS will always try to look for a variable in the current scope, if not found, then go up one step in the scope chain, and so on. So the variable in the closest scope takes precedence on the same named variable in a further away scope. 

So you can have variables of the same names in different scopes. The same explains why different functions can have same argument names - they are in a different scope. 

You can re-assign outer scope's variable with no problem, from a inner scope. 

## Variable Environment: Hoisting and The TDZ
Hoisting is a mechanism that makes some types of variables accessible (usable) in the code, before they are actually declared in the code. Behind the scenes, the code was scanned for variable declarations, before it is executed. This happens during the creation phase of the execution context. 

Function declarations are hoisted, and the initial val in the variable env is set to the actual function. In practice, this means we can use function declarations before they are actually declared in the code. 

Variables defined with var are also hoisted, by works in a different way. When a var variable is accessed before it is declared in the code, you do not get the declared value, you get undefined. This can be confusing and cause most of the bugs in JS. So modern JS we almost never use var. 

let and const variables are not hoisted, practically, because they live in a temporal dead zone (TDZ). It is un-accessible before it got declared - you will get an error. 

For function expressions, and arrow functions, whether or not they are hoisted depends on whether they were created using var/const/let. Because they are essentially variables. 

## Hoisting and TDZ in Practice
Best practices:
- Avoid using var to declare variables. 
- declare your variables at the top of each scope
- declare all your functions first, then use them only after the declaration

In the browser, `window` is the global object of JS in the browser. When you type `window` in the Console and hit return, you can see all global objects. The variables declared with `var` will create properties on this window object, but the variables declared with `let`/`const` will not do this. For example, if you declare `var x = 1;`, then you can verify this using `console.log(x === window.x);`, which returns true. So, variables declared with `var` can have some implications in some cases. 

## The this Keyword
One of the 3 components of any execution context. 

It points to the owner of the function:
- When a method (aka, a function attached to an object) is called, the `this` inside the method refers to the object (the caller). 
- When a normal function (not attached to an object) is called, the `this` is `undefined` in strict mode, otherwise, it points to the global object, for example, the Window object in the browser. 
- An arrow function do not get their own `this` keyword. If you use `this` inside an arrow function, it will refer to the `this` keyword of the surrounding (parent)function. In this case, it is also called the "lexical this keyword". 
- If a function is called as an event listener, then `this` points to the DOM element that the handler function is attached to. 

## The this Keyword in Practice
```js
"use strict";
console.log(this);    // will return the Window object of browser

const calcAge = function(birthYear) {
  console.log(2050 - birthYear);
  console.log(this);  // will print undefined, because this function doesn't have an owner
};
calcAge(2005); 

const calcAgeArrow = birthYear => {
  console.log(2050 - birthYear);
  console.log(this);  // will print Window object, refers to the this of its parent, which is the global scope
};
calcAgeArrow(2005); 

const andy = {
  year: 2005,
  calcAge: function() {
    console.log(this); 
    console.log(2050 - this.year);
  },
}
// will print the andy object, because it is the CALLER of this method
andy.calcAge(); 

const jane = {
  year: 2000,
}
// method borrowing
jane.calcAge = andy.calcAge; // assign a calcAge function to jane object
jane.calcAge(); // will print and use year parameter in jane, because jane is the CALLER of this method

const f = andy.calcAge; // now assign this method to a variable
f(); // will print undefined, and then an error, because undefined doesn't have year var defined in it. 

```

## Regular Functions vs. Arrow Functions
```js
const andy = {
  firstName: 'Andy',
  year: 2005,
  calcAge: function() {
    console.log(this); 
    console.log(2050 - this.year);
  },
  // the arrow function doesn't get its own this keyword
  // it will use the firstName of the Window object, which is not defined
  greet: () => console.log(`Hey ${this.firstName}`),
};

andy.greet(); // Hey undefined
```
This behavior can become quite dangerous. If we use var to declare variables, it actually create properties on the global object, which may get printed out in that window function, if the name matches. 

Best practice: Never ever use an arrow function as a method. 

```js
const andy = {
  firstName: 'Andy',
  year: 2005,
  calcAge: function() {
    console.log(this); 
    console.log(2050 - this.year);

    const isMillennial = function() {
      console.log(this); // undefined, because it is a regular function call
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillennial();
  },
};

andy.calcAge();
```

The pre-ES6 solution, is to preserve the this in a const variable:
```js
const andy = {
  firstName: 'Andy',
  year: 2005,
  calcAge: function() {
    console.log(this); 
    console.log(2050 - this.year);

    const self = this; // can preserve the this keyword to use in the below regular function
    const isMillennial = function() {
      console.log(self); // andy
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillennial();
  },
};

andy.calcAge();
```

The post-ES6 solution, is to use the arrow function, so it can use its parent's scope:
```js
const andy = {
  firstName: 'Andy',
  year: 2005,
  calcAge: function() {
    console.log(this); 
    console.log(2050 - this.year);

    isMillennial = () => {
      console.log(this); // andy
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillennial();
  },
};

andy.calcAge();
```

The legacy `arguments` keyword. Only need to know it exists. Modern JS has a better way to deal with multiple parameters now. 
```js
const addTwo = function (a, b) {
  console.log(arguments);
  return a + b;
};
addTwo(2, 5); // see an array of these 2 input elements
addTwo(2, 5, 8, 12); // see an array of these 4 input elements. Can use them in this regular function

var addArrow = (a, b) => {
  console.log(arguments); // Error: arguments is not defined
  return a + b;
}; // the arrow function doesn't have this arguments keyword
addArrow(2, 5, 8);
```

## Primitives vs. Objects (Primitive vs. Reference Types)
The difference between the way primitive types, and objects, are stored in memory. 

Many people confuse:
```js
let age = 20;
let prvAge = age;
age = 21;
console.log(age);     // 21
console.log(prvAge);  // 19

const Andy = {
  name: 'Andy',
  age: 10,
};

const Jane = Andy; 
Jane.age = 11;

console.log(Andy); // they all point to the Andy object
console.log(Jane); // they all point to the Andy object
```

In java, there are 7 primitive types: Number, String, Boolean, Undefined, Null, Symbol, BigInt. Primitive types are stored in the call stack, in the execution contexts in which they are declared. 

Everything else are objects, such as Object literal, Arrays, Functions, etc. They are all reference types. All reference types are stored in the memory heap. 

For example a primitive values named age is stored in an address in the memory, who holds the value 10. Then if another value named prvAge is declared to be same value as age. So prvAge points to the same exact memory address, with the value 10. Next, when the age is changed to 11, a new space in memory was allocated, to store the value of 11, and the age variable points to this new address. 

But with objects, because they live on the heap, when a new object is created, it is created on a heap, and has a heap address. The object identifier that lives in the call stack, doesn't point directly to the heap, instead, it points to a new piece of memory created on the stack, which then points to the heap. So a constant object can change its elements, but cannot change the address value in the call stack. 

Objects are stored in this way, because they might be too large to be stored in the stack, while heap is like an almost unlimited memory pool. 

The Andy object here is constant, we can modify it because we are not changing its address in the call stack, we are only changing the value in where this address points to, in the heap. 

This implies that, whenever you copy an object, you are just creating a new variable that points to the exact same object. 

There are 3 more topics on how JS works behind the scenes, including prototypal inheritance, event loop, and how the DOM works, which will be covered in later chapters. 

## Primitives vs. Objects in Practice
Shallow copy: 
```js
const apple = {
  color: 'green',
  weight: 1,
  seeds: [1, 2, 3],
};

const appleCopy = Object.assign({}, apple); // this merges an empty object with apple object, returning a new object. 
appleCopy.color = 'red';
appleCopy.seeds.push[4];

// the color value is different in these 2 objects, 
// but the seeds array size is now 4 in both. 
console.log(apple); 
console.log(appleCopy); 
```

Note that appleCopy is a real copy of the original, not just a different reference name pointing to the one single object. 

However, this `Object.assign()` only works on the first level, which means, if you have an inner object inside the object, then this inner object will still be the same, and point to the same place in memory. Which means, this only creates a "shallow copy", not a "deep clone". 

A deep clone is not easy to achieve, usually we do this using an external library, such as Lo-Dash. 
