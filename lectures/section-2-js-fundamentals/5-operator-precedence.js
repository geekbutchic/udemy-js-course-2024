// Operator Precedence

const now = 2024;
const ageSonny = now - 1984;
const ageMom = now - 1960;
console.log(ageSonny, ageMom); // 40 64

console.log(now - 1984 < now - 1960); // true

console.log(25 - 10 - 5); // 10

let x, y;
x = y = 25 - 10 -5;
console.log(x, y); // 10 10 

// Calculate Average Age
const averageAge = (ageSonny + ageMom) / 2;
// Parenthesis Needed
console.log(averageAge);