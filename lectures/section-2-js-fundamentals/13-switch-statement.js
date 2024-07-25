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
