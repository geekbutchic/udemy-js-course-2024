const age = 15;

// Called if else controlled structure...
if (age >= 18) {
  console.log(`Sara can start driving 🥳`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sara is too young.  Wait another ${yearsLeft} years!`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

/* 
Scope: By declaring century outside the if statement, it is accessible both inside and outside the if and else blocks. Assigning a value inside the blocks changes the value of this outer century variable.
*/