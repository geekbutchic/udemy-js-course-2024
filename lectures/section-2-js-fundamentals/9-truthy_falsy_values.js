// Truthy vs Falsey

/*
5 falsy values : 0, '', undefined, null, NAN
*/

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(NaN));

// JS will try to coerce into a Boolean
const money = 0;
if (money) {
  console.log(`Don't spend it all!!!`);
} else {
  console.log(`You should get a job...`);
}

let values = [false, 0, "", null, undefined, NaN, true, 1, "hello", {}, []];

values.forEach(value => {
  console.log(`${value}: ${Boolean(value)}`);
});

/*
false: false
0: false
: false
null: false
undefined: false
NaN: false
true: true
1: true
hello: true
[object Object]: true
: true
*/

let height; // Falsy value height is not defined

if (height) {
  console.log(`Yay! height is defined`);
} else {
  console.log(`Height is UNDEFINED`);
}
