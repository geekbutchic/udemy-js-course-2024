// Conversion vs Coercion

/*
Explicit type conversion, or type casting, is performed manually by the developer using built-in functions to convert values from one type to another.

Examples : Manually converted
*/

// Input value from forms usually comes in as a string.
const inputYear = "1991";
console.log(inputYear + 18); // 199118
console.log(Number(inputYear) + 18); // 2009
// This would concatenate a string a number
// Original value is not converted

console.log(Number("sonny")); // NaN
console.log(typeof NaN); // prints number but technically is an invalid number

// String to number
console.log(String(40), 40);

/*
Type coercion : Implicit type coercion in JavaScript refers to the automatic conversion of values from one type to another by the JavaScript engine. 

Implicit - "Implicit" is an adjective that describes something that is implied or understood without being directly stated. 
*/

// Type coercion 
console.log("I am " + 23 + " years old.");
// Subtraction triggers numbers not strings like addition, same for division, same for multiplication.
console.log("23" - "10" - 3);

// Guess output ? Now knowing what you know 
let n = "1" + 1;
n = n - 1;
console.log(n);

/* Best practice is explicit type conversion. */
