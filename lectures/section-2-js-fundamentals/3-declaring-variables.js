// Declaring Variables using let and const

// Using LET
let age = 30;

// Technical terms this is known as reassigning a variable or mutating.
age = 31;

console.log(age);


// Using CONST
const PI = 3.14159; // <--- const needs to be changed to let
const user = { name: "John", age: 30 };
console.log(user);

// This will throw an error because you cannot reassign a const variable
// PI = 3.14;
// console.log(PI); // <--- throws err...

// However, you can modify the properties of a const object
user.name = 'Sonny';
user.age = '39';
console.log(user); // Output: { name: "John", age: 31 }

