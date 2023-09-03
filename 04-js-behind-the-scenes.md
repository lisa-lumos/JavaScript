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








## Execution Contexts and The Call Stack

## Scope and The Scope Chain

## Scoping in Practice

## Variable Environment: Hoisting and The TDZ

## Hoisting and TDZ in Practice

## The this Keyword

## The this Keyword in Practice

## Regular Functions vs. Arrow Functions

## Primitives vs. Objects (Primitive vs. Reference Types)

## Primitives vs. Objects in Practice







































