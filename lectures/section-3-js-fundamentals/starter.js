// "use strict";

function showThis() {
  console.log(this); // logs the global object (window in browsers)
}

showThis(); // In non-strict mode, `this` refers to the global object
