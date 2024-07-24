"use strict";

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

1. Calculate the average score for each team, using the test data below.

2. Compare the team's average scores to determine the winner of the competition, and print it to the console.  Don't forget that there can be a draw, so test for that as well.

Data 1: Dolphins score 96, 108, and 89.  Koalas score 89, 91, 110.
*/

const dolphinsScore = (96 + 108 + 89) / 3;
const koalasScore = (88 + 91 + 110) / 3;

const dolphinsScoreFixed = dolphinsScore.toFixed(2);
const koalasScoreFixed = koalasScore.toFixed(2);

console.log(`Dolphins average score: ${dolphinsScoreFixed}`);
console.log(`Koalas average score: ${koalasScoreFixed}`);

if (dolphinsScore > koalasScore) {
  console.log(`Dolphins have a higher average score.`);
} else if (dolphinsScore < koalasScore) {
  console.log(`Koalas have a higher average score.`);
} else if (dolphinsScore === koalasScore) {
  console.log(`Both teams have the same average score.`);
}
