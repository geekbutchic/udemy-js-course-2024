"use strict";

// /*
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// 1. Calculate the average score for each team, using the test data below.

// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console.  Don't forget that there can be a draw, so test for that as well.

// 3. Bonus 1: Include a requirement for a minimum score of 100.  With this rule, a score of at least 100 points.  Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks.

// 4. Bonus 2: Minimum score also applies to a draw!  So a draw only happens when both teams have the same score and both have a greater or equal to 100 points.  Otherwise no team wins.

// Data 1: Dolphins score 96, 108, and 89.  Koalas score 89, 91, 110.
// */

// const dolphinsScore = (96 + 108 + 89) / 3;
// const koalasScore = (88 + 91 + 110) / 3;

// const dolphinsScoreFixed = dolphinsScore.toFixed(2);
// const koalasScoreFixed = koalasScore.toFixed(2);

// console.log(`Dolphins average score: ${dolphinsScoreFixed}`);
// console.log(`Koalas average score: ${koalasScoreFixed}`);

// if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
//   console.log(`Dolphins win the trophy 🏆.`);
// } else if (dolphinsScore < koalasScore && koalasScore >= 100) {
//   console.log(`Koalas win the trophy 🏆.`);
// } else if (
//   dolphinsScore === koalasScore &&
//   koalasScore >= 100 &&
//   dolphinsScore >= 100
// ) {
//   console.log(`Both teams have the same average score.`);
// } else {
//   console.log(`No team wins the trophy.`);
// }

// =============== Refactored Version ====================

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

1. Calculate the average score for each team, using the test data below.

2. Compare the team's average scores to determine the winner of the competition, and print it to the console.  Don't forget that there can be a draw, so test for that as well.

3. Bonus 1: Include a requirement for a minimum score of 100.  With this rule, a score of at least 100 points.  Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks.

4. Bonus 2: Minimum score also applies to a draw!  So a draw only happens when both teams have the same score and both have a greater or equal to 100 points.  Otherwise no team wins.

Data 1: Dolphins score 96, 108, and 89.  Koalas score 89, 91, 110.
*/

// Function to calculate the average score
const calculateAverage = scores =>
  scores.reduce((a, b) => a + b) / scores.length;

// Scores data
const dolphinsScores = [96, 108, 89];
const koalasScores = [89, 91, 110];

// Calculate average scores
const dolphinsAvg = calculateAverage(dolphinsScores).toFixed(2);
const koalasAvg = calculateAverage(koalasScores).toFixed(2);

// Print average scores
console.log(`Dolphins' average score: ${dolphinsAvg}`);
console.log(`Koalas' average score: ${koalasAvg}`);

// Determine the winner with the minimum score condition
const checkWinner = (avg1, avg2, minScore) => {
  if (avg1 >= minScore && avg1 > avg2) {
    return "Dolphins win the trophy 🏆.";
  } else if (avg2 >= minScore && avg2 > avg1) {
    return "Koalas win the trophy 🏆.";
  } else if (avg1 >= minScore && avg2 >= minScore && avg1 === avg2) {
    return "Both teams have the same average score and win the trophy.";
  } else {
    return "No team wins the trophy.";
  }
};

// Minimum score required to win
const minScore = 100;

// Check and print the winner
console.log(checkWinner(dolphinsAvg, koalasAvg, minScore));
