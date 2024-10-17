"use strict";

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

//Lecture: Functions Calling other Functions

/*
1. Create a function called 'describePopulation'.  Use the function type you like the most.  This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world'.
2. To calculate the percentage 'describePopulation' call the 'percentageOfWorld' you created earlier.
3. Call 'describePopulation' with data for 3 countries of your choice.
*/

function percentageOfWorld(population, worldPopulation = 8200000000) {
  const result = population * 1000000 / worldPopulation * 100;
  return result;
}

function describePopulation(country, population) {
  const percentage = percentageOfWorld(population);
  return `${country} has ${population.toFixed(
    2
  )} million people, which is about ${percentage.toFixed(2)}% of the world.`;
}

const result = describePopulation("USA", 335.893238);
console.log(result);

//Refactored Version
function percentageOfWorld(populationInMillions, worldPopulation = 8200) {
  return populationInMillions / worldPopulation * 100;
}

function describePopulation(country, populationInMillions) {
  const percentage = percentageOfWorld(populationInMillions);
  return `${country} has ${populationInMillions.toFixed(
    2
  )} million people, which is about ${percentage.toFixed(2)}% of the world.`;
}

const result2 = describePopulation("SPAIN", 47.910526);
console.log(result2);
