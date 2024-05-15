// Coding Challenge #1

/* 
Mark and John are trying to compare their BMI, which is calculated using this Formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

Your tasks:
1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMI's using the formula (you can even implement both versions).
3. Create a Boolean variable 'markHigherBmi' containing information about whether mark has a higher BMI than John.
*/

// Original Version
// let markMassData1 = 78;
// let markHeightData1 = 1.69;

// let johnMassData1 = 92;
// let johnHeightData1 = 1.95;

// const calculateBmi = (mass, height) => {
//   let bmi = mass / (height * height);
//   return bmi;
// };

// const markHigherBMI = (markBmi, johnBmi) => {
//   if (markBmi > johnBmi) {
//     return `Mark has a higher BMI`;
//   } else {
//     return `John has a higher BMI`;
//   }
// };

// let markBmi = calculateBmi(markMassData1, markHeightData1);
// console.log(`Mark's BMI:`, markBmi.toFixed(2));

// let johnBmi = calculateBmi(johnMassData1, johnHeightData1);
// console.log(`John BMI:`, johnBmi.toFixed(2));

// let greaterBmi = markHigherBMI(markBmi, johnBmi)
// console.log(greaterBmi);

// Refactored Version
let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

const calculateBMI = (mass, height) => mass / (height * height);

const getBMIComparison = (markBmi, johnBmi) => {
  if (markBmi > johnBmi) {
    return `Mark has a higher BMI (${markBmi.toFixed(2)})`;
  } else if (johnBmi > markBmi) {
    return `John has a higher BMI (${johnBmi.toFixed(2)})`;
  } else {
    return `Mark and John have the same BMI (${markBmi.toFixed(2)})`;
  }
};

let markBmi = calculateBMI(markMass, markHeight);
let johnBmi = calculateBMI(johnMass, johnHeight);

console.log(`Marks BMI: ${markBmi.toFixed(2)}`);
console.log(`John's BMI: ${johnBmi.toFixed(2)}`);

let bmiComparison = getBMIComparison(markBmi, johnBmi);
console.log(bmiComparison);
