"use strict";

//Can call prior you define it
const result = calcAge1(1984);
console.log(`Function Declaration: `, result); // 40

//Function Declaration
function calcAge1(birthYear) {
  const age = 2024 - birthYear;
  return age;
}

//Function Expression
const calcAge2 = function(birthYear) {
  const age = 2024 - birthYear;
  return age;
};

const result2 = calcAge2(1984);
console.log(`Function Expression: `, result2);


