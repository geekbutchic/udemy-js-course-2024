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
