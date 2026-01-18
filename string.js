// const capital = 'Dhaka';
// const district = "Bhola";
// const country = `Bangladesh`;

// console.log(typeof capital); // Output: string
// console.log(typeof district); // Output: string // Output: string
// console.log(typeof country); // Output: string

// Strings are immutable
// This means that once a string is created, it cannot be changed or modified.
// let nam = "John";
// Trying to change the first character of the string
// nam[0] = "M"; 
// console.log(nam); // Output: John

// arrays are mutable
// This means that the elements of an array can be changed or modified.
// let array = [20, 30, 40, 50];
// array[1] = 100;
// console.log(array); // Output: [20, 100, 40, 50]

// toLowerCase() and toUpperCase() methods
// The toLowerCase() method converts a string to lowercase letters.
// The toUpperCase() method converts a string to uppercase letters.
// const greeting = "Hello World!";
// const message = 'hello World!';

// if (greeting.toLocaleLowerCase() === message.toLocaleLowerCase()) {
//     console.log("They are equal");
// } else {
//     console.log("They are not equal");
// }

// trim() method
// The trim() method removes whitespace from both ends of a string.
// const drink = 'water';
// const pani = 'water ';

// if (drink.trim() === pani.trim()) {
//     console.log("They are equal");
// } else {
//     console.log("They are not equal");
// }

// split() method
// The split() method splits a string into an array of substrings based on a specified separator.
// const fruits = "apple, banana, orange, mango";
// const fruitArray = fruits.split(", ");
// console.log(fruitArray); // Output: ['apple', 'banana', 'orange', 'mango']

// join() method
// The join() method joins the elements of an array into a single string, with a specified separator.
// const colors = ['red', 'green', 'blue', 'yellow'];
// const colorString = colors.join(" - ");
// console.log(colorString); // Output: 'red - green - blue - yellow'

// includes() method 
// The includes() method checks if a string contains a specified substring and returns true or false.

// const phrase = "The quick brown fox jumps over the lazy dog";
// const word1 = "fox";
// const word2 = "cat";
// console.log(phrase.includes(word1)); // Output: true
// console.log(phrase.includes(word2)); // Output: false

// indexOf() method
// The indexOf() method returns the index of the first occurrence of a specified substring in a string. If the substring is not found, it returns -1.

const sentence = "JavaScript is a versatile language.";
const searchWord1 = "versatile";
const searchWord2 = "Python";
console.log(sentence.indexOf(searchWord1)); // Output: 16
console.log(sentence.indexOf(searchWord2)); // Output: -1
