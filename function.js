function sayHello() {
  console.log("Hello World!");
}

sayHello(); // function call
// This function prints "Hello World!" to the console when called.

function greet(name) {
  console.log("Hello " + name);
}

greet("Dibbo");
greet("Bangladesh");
// The greet function takes a name as an argument and prints a personalized greeting.

function isEven(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(isEven(10)); // Even
console.log(isEven(7));  // Odd
// The isEven function checks if a number is even or odd and returns the result.

// function expression
const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(5, 4)); // 20
console.log(multiply(3, 7)); // 21
// The multiply function takes two numbers as arguments and returns their product.

// Capitalize First Letter (Real Life Example)
// function capitalize(word) {
//   return word.charAt(0).toUpperCase() + word.slice(1);
// }

// console.log(capitalize("javascript")); // Javascript

// Array Loop with Function
// function printNumbers(arr) {
//   for (let num of arr) {
//     console.log(num);
//   }
// }

// printNumbers([1, 2, 3, 4, 5]);
// The printNumbers function takes an array of numbers and prints each number to the console.

// Note: The last two functions are commented out as they are examples of real-life applications of functions.

// Function inside Function
// function outer() {
//   function inner() {
//     console.log("I am inner function");
//   }
//   inner();
// }

// outer();
// This demonstrates a nested function where the inner function is defined and called within the outer function.
