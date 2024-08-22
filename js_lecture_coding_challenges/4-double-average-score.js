/*

Coding Challenge #1

Steven wants to build a very simple calculator for whenever he goes eating in a restaurant.  In his country, it's usual to tip 15% if the bill is between 50 and 300.  If the value is different, the tip is 20%.

Your tasks:

1. Calculate the tip, depending on the bill value.  Create a variable called tip for this.  It's not allowed to use an if/else statement.

2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip).  Example : "The bill was 275, the tip was 41.25, and the total value 316.25"

Test Data:
Data 1: Test for bill values 275, 40, 430

To calculate 20% of a value, simply multiply it by 20/100 = 0.2.
*/

const prompt = require("prompt-sync")();

const billAmount = Number(prompt("Enter the bill amount: "));

const bill = billAmount; // Prompt returns bill amount for testing
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; 
// 15% tip if between 50 and 300, otherwise 20%
const total = bill + tip;

console.log(
  `The bill was ${bill}, the tip was ${tip.toFixed(
    2
  )}, and the total value ${total.toFixed(2)}`
);
