'use strict';
// // strict equal
// const age = 100;
// if (age === 100) console.log('You are 100 yrs old. ')
// console.log(100 === 100) // true
// console.log(100 === 101) // false
// console.log('100' === 100) // false

// // loose equal
// console.log('100' == 100) // true

// const answer = prompt("What is your favorite color? "); // create a prompt for user input
// console.log(answer); // note that it answer is always a string
// console.log(typeof answer); // string

// const answer = Number(prompt("What is your favorite number? ")); // create a prompt for user input, prompt returns a string
// console.log(answer); 
// console.log(typeof answer); // number

// if (answer === 20) {
//   console.log('20 is a great number! ')
// } else if (answer === 7) {
//   console.log('7 is a great number! ')
// } else {
//   console.log('Number is not 20 or 7')
// }

// if (answer !== 23) console.log('Why not 20?') // strict not equal


// const hasDriversLicense = true; 
// const hasGoodVision = true; 

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const isTired = false; 
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

// const day = 'friday';
// switch (day) {
//   case 'monday': // day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend :D');
//     break;
//   default:
//     console.log('Not a valid day!');
// }


// const knight = {
//   name: 'Link',
//   location: 'Hyrule',
//   enemy: 'Ganon',
//   attackPower: 10, 
//   friends: ['Zelda', 'Rauru']
// }; // object literal

// console.log(knight);
// console.log(knight.name); // using the dot notation
// console.log(knight['name']); // similar to above, using the bracket notation
// const myStr = 'Power';
// console.log(knight['attack' + myStr]); // you can use expression with bracket notation, but you cannot do this with the dot notation
// console.log(knight.friends[0]);

// const interestedIn = prompt('What do you want to know about the knight? Choose between name, location, enemy, attackPower, and friends. ');
// if (knight[interestedIn]) { // if the value exists
//   console.log(knight[interestedIn]);
// } else {
//   console.log('Wrong request! Choose between name, location, enemy, attackPower, and friends. ');
// }

// knight.headWear = "Majora's Mask"; // add new properties
// knight['defensePower'] = 20; // add new properties


// const knight = {
//   name: 'Link',
//   location: 'Hyrule',
//   enemy: 'Ganon',
//   attackPower: 10, 
//   friends: ['Zelda', 'Rauru'], 
//   calcNumOfFriends: function() { // requires a function expression, not a function declaration
//     return this.friends.length;
//   }
// }; 

// console.log(knight.calcNumOfFriends());
// console.log(knight['calcNumOfFriends']());

// const knight = {
//   name: 'Link',
//   location: 'Hyrule',
//   enemy: 'Ganon',
//   attackPower: 10, 
//   friends: ['Zelda', 'Rauru'],
//   calcNumOfFriends: function() { // if this is a complex calculation
//     this.numOfFriends = this.friends.length; // creates a new property in cur object
//     return this.numOfFriends;
//   }
// }; 

// console.log(knight.calcNumOfFriends()); // calculate once
// console.log(knight.numOfFriends); // used multiple times
// console.log(knight.numOfFriends);
// console.log(knight.numOfFriends);

// for (let i = 1; i <= 10; i++) {
//   console.log(`loop number: ${i}`); 
// }

// for (let i = 1; ; i++) {
//   if (i == 5) continue;
//   console.log(`loop number: ${i}`); 
//   if (i == 10) break;
// }

// let i = 1;
// while (i < 10) {
//   console.log(`loop number: ${i}`); 
//   i++;
// }





