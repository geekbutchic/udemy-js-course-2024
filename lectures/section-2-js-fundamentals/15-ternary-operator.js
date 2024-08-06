/* 

Ternary Operator = 3 parts 
* condition
* if part 
* else part

*/

// Conditional Operator using one line

const age = 15;

const drink = age >= 18 ? `wine 🍷` : `water 💧`;
console.log(drink);


console.log(`I like to drink ${age >= 18 ? `wine 🍷` : `water 💧`}`);
// Expressions in Template Literals: Template literals support embedding any valid JavaScript expression inside ${}. This includes variables, function calls, and even complex expressions like ternary operators.