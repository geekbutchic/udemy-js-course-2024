// Basic Operators

/*  
What is an operator?

* In JavaScript, operators are symbols or keywords that perform operations on one or more operands (values or variables) to produce a result. JavaScript supports various types of operators for different purposes, including arithmetic, assignment, comparison, logical, bitwise, and more. 
*/

const now = 2024;

const ageSonny = now - 1984;
const ageKelsey = now - 1998;
console.log(ageSonny, ageKelsey); // 40

/*  
Arithmetic Operators 

Addition ( + ) 
Subtraction ( - )
Multiplication ( * )
Division ( / )
Modulus ( % )
Increment ( ++ ) value = value + 1
Decrement ( -- ) value = value - 1
*/

let addition = 5 + 5;
console.log(addition); // 10

let subtraction = 10 - 2;
console.log(subtraction); // 8

let multiplication = 10 * 10;
console.log(multiplication); // 100

let division = 120 / 2;
console.log(division); // 60

let modulus = 17 % 5;
console.log(modulus); // 2

let x = 5; // Assign 5 to x
let y = x++; // Assign the value of x to y, then increment x by 1
console.log(y); // Output: 5 (y holds the original value of x)
console.log(x); // Output: 6 (x has been incremented)

let z = 5;
let w = z--;
console.log(w); // 5
console.log(z); // 4

/* 
If used postfix, with operator after operand (for example, x++ ), the increment operator increments and returns the value before incrementing. If used prefix, with operator before operand (for example, ++x ), the increment operator increments and returns the value after incrementing.
*/

/* 
Simple assignment ( = )
Addition assignment ( +=) 
Subtraction assignment ( -=)
Multiplication assignment (*=)
Division assignment (/=)
*/

/* 
* Right-to-Left Evaluation: The value on the right-hand side of the = operator is evaluated first, and then it is assigned to the variable on the left-hand side.
* Variable Declaration and Assignment: In JavaScript, the = operator can be used both to declare and assign values to variables in a single step.
* Single Equal Sign: It's important to note that the = operator is used for assignment, not equality comparison. In JavaScript, equality comparison is performed using == or === operators.
*/

// Addition assignment
let a = 5;
a += 3;
console.log(a); // 8

// Subtraction assignment
let b = 5;
b -= 3;
console.log(b); // 2

// Multiplication assignment
let c = 5;
c *= 25;
console.log(c); // 125

// Division assignment
let d = 100;
d /= 10;
console.log(d);

// Comparison Operators

/* 

Equal to ==
Strict equal ===
Not equal !=
Strict not equal to !==
Greater than >
Greater than >=
Less than <
Less than <=

*/ 
