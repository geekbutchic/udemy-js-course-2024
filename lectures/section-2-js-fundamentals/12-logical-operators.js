"use strict";

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision); // true
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense); // true

if (hasDriversLicense && hasGoodVision) {
  console.log(`Sarah is able to drive!`);
} else {
  console.log(`Someone else should drive...`);
}

const isTired = false;

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive!`);
} else {
  console.log(`Someone else should drive`);
}



/*
1. Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 50 million people, and is not an island.

2. Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria.
*/

const prompt = require("prompt-sync")();

// Get inputs from the user
const population = Number(prompt("What is the population of your country? "));
const officialLanguage = prompt("What is the official language of your country? ");
const isIsland = prompt("Is your country an island (yes/no)? ").toLowerCase() === "yes";

// Check if the country meets Sarah's criteria
if (population < 50 && officialLanguage.toLowerCase() === "english" && !isIsland) {
  console.log("Your country meets Sarah's criteria!");
} else {
  console.log("Your country does not meet Sarah's criteria.");
}

