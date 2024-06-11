// 3 Most common Primitive Value Types

//Number
let age = 23;
console.log(typeof age, age);

//String
let firstName = "Sonny";
console.log(typeof firstName, firstName);

//Boolean
let javascriptIsFun = true;
console.log(typeof javascriptIsFun, javascriptIsFun);

//Changing a value in JS showing dynamic typing
javascriptIsFun = "true";
console.log(typeof javascriptIsFun, javascriptIsFun); //string true

//To Note: when re-assigning a new variable you do not have to use let or const.  let or const would be an indication of creating a new variable.

/*
Practice Assignment :

1: Declare variables called country, continent and population and assign their values according to your own country (population in millions).

2: Log their values to the console.
*/

//If you want to make the numbers more readable in your code, you can use underscores (_) as digit separators, which were introduced in ECMAScript 2021 (ES12). This does not affect the value of the number but makes it easier to read:

const country = "United States of America";
const continent = "North America";
const population = 341_710_247;

console.log(
  `I live in the ${country} within ${continent} with an estimated population of ${population.toLocaleString(
    "en-US"
  )}`
);
