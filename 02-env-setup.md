# 2. Environment setup
You can choose to use the "Prettier" extension for VS Code. It is an opinionated code formatter. This makes your code to be consistent with other people's code. You can also configure its rules, such as change default double quotes to single quotes, use parenthesis for arrow functions, etc. 

You can create user snippets, such as use "cl" to let VS code auto-complet for you. Code -> Preferences -> User Snippets -> New Global Snippets file...

"Liver server" VS code extension can automatically reload the page for you, when you save your code changes. 

You can also install Node.js and use npm to install the "Live Server" package. Node.js allows you to run js scripts out of the browser. `sudo npm install live-server -g` to install the package globally. To use it, navigate to the folder where the website resides, and run `live-server`. 

## Debugger
When debugging, `console.table(object_name)` can display key-val pairs in a table in the Chrome console. 

To use the Chrome debugger, go to Sources tab -> your js file name -> to set a breakpoint, click the empty space before a line number.

Then when we reload the page, and click the execute button, the execution will stop at the breakpoint, and show all the variables by far. 

You can also add `debugger;` to the code as a breakpoint. 

