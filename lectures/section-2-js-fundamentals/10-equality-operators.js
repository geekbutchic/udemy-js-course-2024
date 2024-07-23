// Equality Operators

// Returns a boolean value true or false
const age = 17;

if (age === 18) {
  console.log(`You just became an adult! (strict)`);
}

// === strict operations does not support type coercion
// == loose equality operators does type coercion

if (age == 18) {
  console.log(`You just became an adult! (loose)`);
}

// As a general rule avoid using loose equality operator.

// Not equal operator strict version
if (age !== 18) {
  console.log(`You are not an adult yet!`);
}

//================ Lecture Challenge ====================

const prompt = require("prompt-sync")();

// Example
// const name = prompt("What is your name? ");
// console.log(`Hello, ${name}!`);

/*
Lecture : Equality Operators : == vs ===
*/

const numNeighbors = Number(
  prompt("How many neighbor countries does your country have? ")
);

if (numNeighbors === 1) {
  console.log(`Only 1 border!`); // if 1
} else if (numNeighbors > 1) {
  console.log(`More than 1 border!`); // if 2
} else {
  console.log(`No borders!`); // if 0
}
