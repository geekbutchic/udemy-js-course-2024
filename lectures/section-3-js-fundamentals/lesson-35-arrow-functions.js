"use strict";

//Function Expression
const calcAge2 = function(birthYear) {
  return 2024 - birthYear;
};

//Arrow Function
const calcAge3 = birthYear => 2024 - birthYear;

/* 
* Still a function expression
* Return is implicit
* In JavaScript, you can omit the return statement in an arrow function when the function body contains a single expression. In this case, the expression is implicitly returned. This is called an implicit return.
*/

const result1 = calcAge2(1984);
console.log(`Calculate Age Res 2: `, result1);

const result2 = calcAge3(1960);
console.log(`Calculate Age Res 3: `, result2);

//Arrow function
const yearsUntilRetirement = birthYear => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

/* 
* Can only omit return statement if it's a single expression. 
* Must have Return statement and curly braces.
*/

console.log(`Years from retirement:`, yearsUntilRetirement(1984));

/* 
* Use case for more than 1 parameter
*/

const yearsUntilRetirement2 = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

const result3 = yearsUntilRetirement2(1984, "Sonny");
console.log(`With Two Params:`,result3);

