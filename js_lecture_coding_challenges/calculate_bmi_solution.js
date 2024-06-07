// Step 1 : Store Marks and John mass and height in variables.

// Test Data 2
const markWeight = 95;
const markHeight = 1.88;

const johnWeight = 85;
const johnHeight = 1.76;

// Step 2 : Calculate BMI using formula.

const calculateBMI = (w, h) => {
  return w / (h * h);
};

const markBMI = calculateBMI(markWeight, markHeight);
console.log(`Mark's BMI: ${markBMI.toFixed(2)}`); // 27.31

const johnBMI = calculateBMI(johnWeight, johnHeight);
console.log(`John's BMI: ${johnBMI.toFixed(2)}`); // 24.19

// Step 3 : Create a function to determine who has a higher BMI.

const markHigherBmi = (x, y) => {
  if (x > y) {
    return `Mark has a higher BMI than John.`;
  } else {
    return `John has a higher BMI than Mark.`;
  }
};

let greaterBMI = markHigherBmi(markBMI, johnBMI);
console.log(greaterBMI);
