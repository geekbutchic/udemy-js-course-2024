# Lesson 31/32

> "use strict"

The **"use strict"** directive in JS enables **strict mode**, which is a way to make your code more secure and less error-prone by enforcing stricter parsing and error handling. When you add **"use strict"** at the beginning of your .js file or a specific function, it helps by:

1.  **Catching common doing mistakes**: it prevents the use of undeclared variables, which can reduce bugs. For example, without strict mode, x = 5; would create a global variable, but in strict mode, this would throw an error unless x is declared using let, const, or var.

2.  **Avoiding accidental globals**: In strict mode, variables must be declared explicitly, so there are fewer chances of creating unintended global variables.

3.  **Preventing use of certain keywords**: Some keywords in JavaScript are reserved for future versions of the language, and strict mode prevents you from using them as variable names (e.g., implements, interface, package).

4.  **Ensuring safer this behavior**: In non-strict mode, if you call a function without an object context (e.g., this is undefined), JavaScript defaults this to the global object (window in browsers). In strict mode, this remains undefined, helping you avoid bugs.

### Insight : Object Context

In JS, object context refers to the value of **this** within a function or method. This context determines which object a function is referring to when it is called. Depending on how a function is invoked, the value of **this** changes, and that specific object is known as the context of the function.

### Understanding **this** in JS

- **this** is a special keyword in JS that dynamically refers to the object from which a function is called.
- The object that **this** points to is often called the **object context** or **execution context** of the function.

The value of **this** is determined by how a function is invoked, not where it is declared.

### Types of Object Context in Function Calls

1. **Global Context** (Default Context) If a function is called in the global scope (outside of any object), in non-strict mode, this refers to the global object (window in browsers). In strict mode, this will be undefined.

Example : (default context)

```js
function showThis() {
  console.log(this);
}

showThis(); // Logs the global object (window in browsers)
```

Example : (strict mode)

```js
"use strict";
function showThis() {
  console.log(this);
}

showThis(); // Logs undefined in strict mode
```

2. **Method Context** : When a function is called as method of an object, **this** refers to the object that owns the method. The object on which the method is called becomes the context.

```js
const person = {
  name: "Sarah",
  greet() {
    console.log(this.name);
  }
};

person.greet(); // Logs 'Sarah' because `this` refers to the `person` object
```

Here, **this** points to the **person** object because the **greet** function is called as a method of person.

3. **Constructor Function Context** : When a function is used as a constructor (i.e., it is called with the **new** keyword), **this** refers to the new object that is created.

```js
function Person(name) {
  this.name = name;
}

const person = new Person("John");
console.log(person.name); // Logs 'John' because `this` refers to the new `Person` instance
```

In this example, **this** refers to the newly created object when the **Person** constructor is invoked using **new**.

4. **Explicit Binding** (call, apply, bind) JavaScript provides methods like call(), apply(), and bind() to explicitly set the context of **this** when calling a function. This allows you to manually assign the context you want.

```js
const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

function greet() {
  console.log(`Hello, ${this.name}`);
}

greet.call(person1); // Logs 'Hello, Alice'
greet.call(person2); // Logs 'Hello, Bob'
```

5. **Arrow Function Context** Arrow functions behave differently from regular functions when it comes to **this**. They do not have their own **this** value; instead, they inherit the **this** value from their enclosing scope.

```js
const person = {
  name: "John",
  greet: () => {
    console.log(this.name);
  }
};

person.greet(); // Logs `undefined` because `this` refers to the outer (global) context, not the `person` object.
```

### Summary of Object Context

- Object context determines what this refers to in a function. The context can be different depending on how a function is called (globally, as a method, with new, etc.).

- Methods (call(), apply(), bind()) allow you to explicitly control the context.

- Arrow functions don't bind their own this and instead inherit it from their surrounding context.

# Lesson 33 : Functions

In JS, a function is a usable block of code that performs a specific task. They take in put (parameters), process it, and may return an output (a result).

### Key Concepts of Functions in JS.

1. **Functions Declaration** (Named Function) A function can be declared using the **function** keyword, followed by the function name, a list of parameters in parentheses, and a block of code inside curly braces {}.

```js
function greet(name) {
  console.log(`Hello, ${name}`);
}

greet(`Tom`);
```

In this example: **greet** is the function name, **name** is the parameter.

2. **Function Expression** (Anonymous Function). A function can also be created as an expression and assigned to a variable. This is known as a function expression. The function in this case can be unnamed (anonymous).

```js
const greet = function (name) {
  console.log(`Hello, ${name}!`);
};

greet("Bob"); // Output: Hello, Bob!
```

Here, the function is assigned to the variable **greet**, and it can be invoked using that variable.

### Arrow Function (ES6)

Arrow functions are a shorthand introduced in ES6. They offer a more concise syntax and automatically bind the **this** keyword based on the surrounding context.

```js
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

greet("Charlie"); // Output: Hello, Charlie!
```

If the function has only one parameter and one expression, you can omit the parentheses around the parameter and the curly braces {}.

Example:

```js
const greet = (name) => console.log(`Hello, ${name}!`);
greet("David"); // Output: Hello, David!
```

### Parameters and Arguments

- **Parameters** are placeholders listed in the function definition, and they represent the inputs a function expects.
- **Arguments** are the actual values you pass to a function when calling it.

Example:

```js
function add(a, b) {
  return a + b;
}

const result = add(3, 5); // Arguments: 3 and 5
console.log(result); // Output: 8
```

### Return Statement Function

Can return a value using the **return** keyword. When a function returns a value, that value can be used by the code that calls the function.

Example:

```js
function multiply(a, b) {
  return a * b;
}

const product = multiply(4, 5);
console.log(product); // Output: 20
```

### Default Parameters in JS

You can provide default values for parameters, which will be used if no argument is passed for that parameter.

Example:

```js
function greet(name = "Stranger") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Stranger!
```

### Higher-Order Functions

A higher-order function is a function that takes another function as an argument or returns a function as a result.

Example:

```js
function greet(callback) {
  callback();
}

function sayHello() {
  console.log("Hello!");
}

greet(sayHello); // Output: Hello!
```

### Function Scope Functions

Functions in JS have their own scope. Variables declared inside a function are local to that function and cannot be accessed form outside.

Example

```js
function greet() {
  const message = "Hello, World!";
  console.log(message);
}

greet(); // Output: Hello, World!
console.log(message); // Error: message is not defined
```

- Local Scope : Variables declared inside a function.
- Global Scope: Variables declared outside all functions.

### Anonymous Functions

Anonymous functions are functions without a name. They are typically used where functions are needed as arguments or when they are immediately executed.

```js
function greet(callback) {
  callback();
}

greet(function () {
  console.log("Hello, this is an anonymous function!");
});
```

### Anonymous Functions

Breakdown:

- Instead of passing a named function like **sayHello**, we pass an **anonymous** functions directly to **greet**.
- This anonymous function is executed inside **greet**, and it prints "Hello, this is an anonymous function!" to the console.

### Common Use Cases for Anonymous Functions:

1. Event Handlers:

```js
document.querySelector("button").addEventListener("click", function () {
  console.log("Button clicked!");
});
```

2. Array Methods

```js
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(function (number) {
  return number * 2;
});

console.log(doubled); // [2, 4, 6, 8, 10]
```

Anonymous functions are great for situations where you only need the function for a short period of time and don't need to reference it elsewhere in your code.

# Lesson 34

## Function Declaration vs Function Expression

### Function Declaration

- A function declaration defines a function with the **function** keyword, followed by the function name, parameter, and body.
- Hoisting: Function declaration are hoisted to the top of their scope. This means you can call the function before its declaration in the code.

```js
//Can call prior before defining it
const result = calcAge1(1984);
console.log(`Function Declaration: `, result); // 40

//Function Declaration
function calcAge1(birthYear) {
  const age = 2024 - birthYear;
  return age;
}
```

### Function Expression

- A function expression involved assigning a function to a variable. The function can be anonymous (no name) or named.
- Not Hoisted: Function expressions are not hoisted. You cannot call the function before it is defined.

```js
//Function Expression
const calcAge2 = function (birthYear) {
  const age = 2024 - birthYear;
  return age;
};

const result2 = calcAge2(1984);
console.log(`Function Expression: `, result2);
```

### Key Differences:

![](/images/image-1.jpeg)

Another Example:

```js
// Function Declaration
function add(a, b) {
  return a + b;
}

// Function Expression
const subtract = function (a, b) {
  return a - b;
};

console.log(add(3, 4)); // Output: 7
console.log(subtract(10, 4)); // Output: 6
```

### In short:

- Function declarations are hoisted and can be called before they are defined.

- Function expressions are not hoisted, so they can only be called after they are assigned to a variable.

### General Best Practice:

- Modularize your code: Whether using declarations or expressions, always aim to break your code into small, reusable functions.

- Use **const** for function expressions: This ensures that the function reference can't be reassigned, preventing accidental changes.

In most modern JavaScript development, arrow functions and function expressions are widely used because of their concise syntax, particularly in frameworks like React. However, for clarity and traditional reusable functions, function declarations are still perfectly valid.

# Lesson 35 Arrow Functions

- Arrow functions in JS offer a more concise syntax compared to traditional function expressions and come with a few key differences.

### 1. Syntax and Conciseness

- Arrow functions provide a shorter syntax, especially useful for small functions.
- When the function body has a single expression, you can omit the curly braces adn the (return) statement (implicit return).

```js
const sum = (a, b) => a + b; // Implicit return
```

If you have multiple lines ore more complex login, you would use curly braces and need to explicitly return the value.

```js
const sum = (a, b) => {
  const total = a + b;
  return total; // Explicit return
};
```

### 2. Lexical this binding.

- Arrow functions do not bind their own this. Instead, they inherit this from the surrounding (lexical) context.
- This makes arrow functions particularly useful when working with methods in objects or callbacks, where the regular **function** keyword would result in this being re-bound.

Example:

```js
const person = {
  name: "Sonny",
  greet: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.name}`); // `this` refers to the person object
    }, 1000);
  }
};
person.greet(); // Output: Hello, Sonny
```

If a regular function was used inside **setTimeout**, **this** would refer to the global object (for undefined in strict mode).

### 3. No Arguments Object

- Arrow functions do not have their own **arguments** object. If you need access to the arguments, you must either use the rest parameter (...args) or use a traditional function.

```js
const sum = (...args) => args.reduce((acc, cur) => acc + cur, 0);
console.log(sum(1, 2, 3)); // Output: 6
```

Example with a traditional function:

```js
function sum() {
  return Array.from(arguments).reduce((acc, cur) => acc + cur, 0);
}
```

### 4. Cannot be used as Constructors

- Arrow functions cannot be used as constructors, meaning you cannot use the **new** keyword with them. Traditional functions can be used to create new instances of objects, but arrow functions lack the internal [[Construct]] method necessary for this.

```js
const Person = (name) => {
  this.name = name;
};
const me = new Person("Sonny"); // TypeError: Person is not a constructor
```

A traditional function would work for object construction:

```js
function Person(name) {
  this.name = name;
}
const me = new Person("Sonny"); // Works fine
```

### 5. Arrow Functions as Methods

- Arrow functions should not be used as methods in objects because they don not have their own **this** context. Instead, they inherit **this** from the enclosing context, which may not behave as expected.

### 5. Arrow Functions as Methods

- **Arrow Functions** should not be used as methods in objects because they do not have their own **this** context. Instead, they inherit **this** from the enclosing context, which may not behave as expected.

Example:

```js
const person = {
  name: "Sonny",
  greet: () => {
    console.log(`Hello, ${this.name}`); // Incorrect: `this` is not bound to person
  }
};
person.greet(); // Output: Hello, undefined
```

A regular function should be used for object method:

```js
const person = {
  name: "Sonny",
  greet() {
    console.log(`Hello, ${this.name}`); // Correct: `this` refers to the person object
  }
};
person.greet(); // Output: Hello, Sonny
```

### 6. Cannot have a Prototype

- Arrow functions do not have **prototype** property, meaning they cannot be used to define prototype methods for classes or objects.

When to Use Arrow Functions

- Callbacks: Arrow functions are great for callbacks, like in array methods (map, filter, etc), or in setTimeout.
- Anonymous Functions: They are perfect for short, anonymous functions that don't need their own **this** or **arguments**.
- Event Handlers: Useful when yo need the lexical **this**.

In summary, arrow functions are a concise, modern way to define functions in JavaScript, especially when you need to preserve this from the surrounding context. However, they should be avoided when a function needs its own this, arguments, or will be used as a constructor.

# Lesson 36 Callback Functions

Example on Functions calling Functions:

1. Create a function called **'describePopulation'**. Use the function type you like the most. This function takes in two arguments: **'country'** and **'population'**, and returns a string like this: **'China has 1441 million people, which is about 18.2% of the world'**.

2. To calculate the percentage **'describePopulation'** call the **'percentageOfWorld'** you created earlier.

3. Call **'describePopulation'** with data for 3 countries of your choice.

### Breakdown:

## 1. Function Declaration:

You have two functions:

- percentageOfWorld(population, worldPopulation)
- describePopulation(country, population)

```js
function percentageOfWorld(population, worldPopulation = 8200000000) {
  const populationPercentage = ((population * 1000000) / worldPopulation) * 100;
  return populationPercentage;
}
```

- Takes two arguments: **population** (population in millions) and **worldPopulation** (defaulted to 8.2 billion).
- It calculates the percentage of the world's population that a given country represents and returns that result.

```js
function describePopulation(country, population) {
  const percentage = percentageOfWorld(population);
  return `${country} has ${population.toFixed(
    2
  )} million people, which is about ${percentage.toFixed(2)}% of the world.`;
}
```

- Takes two arguments: **country** (the name of the country) and **population** (the population of that country in millions).
- It calls percentageOfWorld(population) to get the percentage of the world population.
- It formats and returns a string describing the population and the percentage of the world's population for the country.

## 2. How Data is Passed and Processed:

a. Calling the function

```js
const result = describePopulation("USA", 335.893238);
```

- You're calling **describePopulation** with two arguments:
- **country = "USA"**
- **population = 335.893238 (million)**

b. Inside **describePopulation**:

```js
const percentage = percentageOfWorld(population);
```

- The value of **population** passed is **335.893238** (USA's population in millions).
- This value is now passed as an argument to the **percentageOfWorld** function.

c. Inside **percentageOfWorld**:

```js
const result = ((population * 1000000) / worldPopulation) * 100;
```

- **population** here is **335.893238**, passed from the **describePopulation** function.
- **worldPopulation** is the default value of **8.2 billion**.
- The calculation converts the population to individuals **(population \* 1000000)** and then calculates the percentage of the world population by dividing by **worldPopulation \* 100**.

For example:

```js
result = 335.893238 * 1000000 / 8200000000 * 100;
result ≈ 4.09;
```

This percentage **(4.09%)** is returned to the **describePopulation** function.

d. Back in **describePopulation**:

Now, the **percentage** variable has the value **4.09**.

The **return** statement in **describePopulation** is:

```js
return `${country} has ${population.toFixed(
  2
)} million people, which is about ${percentage.toFixed(2)}% of the world.`;
```
* country is "USA".
* population.toFixed(2) gives 335.89 (rounded to 2 decimal places).
* percentage.toFixed(2) gives 4.09 (rounded to 2 decimal places).

Final Solution:
```js
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
```