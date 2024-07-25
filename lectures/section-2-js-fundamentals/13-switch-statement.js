"use strict";

// A switch statement in JavaScript is used to execute one block of code among many based on the value of an expression. It provides a more readable and organized way to handle multiple conditions compared to using many if...else if...else statements.

/* 
switch (expression) {
  case value1:
    // code to be executed if expression === value1
    break;
  case value2:
    // code to be executed if expression === value2
    break;
  // ...
  default:
    // code to be executed if expression does not match any case
}

*/

// Example of switch statement
const day = new Date().getDay();
console.log(day);
let dayName;

switch (day) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4: // 4 === 4 .log 'Thursday'
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName);

// Second example of a Switch Statement with Boolean Expression: In this example, the switch statement uses the true boolean value. This allows the case conditions to be evaluated as expressions.

const score = 85;
let grade;

switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  case score >= 50:
    grade = "E";
    break;
  default:
    grade = "F";
}

console.log(`Your grade is ${grade}`);

// Lecture problem for practice
/* 
1. Use a switch statement to log the following string for the given'language': chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'
*/

const prompt = require("prompt-sync")();

const language = prompt(`What language do you speak? `).toLocaleLowerCase();

switch (language) {
  case "chinese":
  case "mandarin":
    console.log(`MOST number of native speakers!`);
    break;
  case "spanish":
    console.log(`2nd place in number of native speakers.`);
    break;
  case "english":
    console.log(`3rd place in number of native speakers.`);
    break;
  case "hindi":
    console.log(`4th place in number of native speakers.`);
    break;
  case "arabic":
    console.log(`5th place in number of native speakers.`);
    break;
  default:
    console.log(`Great language too 🫶🏻`);
}
