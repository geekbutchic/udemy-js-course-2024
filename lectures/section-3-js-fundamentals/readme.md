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
const greet = name => console.log(`Hello, ${name}!`);
greet('David');  // Output: Hello, David!
```

### Parameters and Arguments

* Parameters are placeholders listed in the function definition, and they represent the inputs a function expects.