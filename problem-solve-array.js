// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']

// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// const reversedColors = [];
// for(let i = colors.length - 1; i >= 0; i--) {
//     reversedColors.push(colors[i]);
// }
// console.log(reversedColors);

// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:

// [12, 98, 76, 46]

// const numbers = [12, 98, 5, 41, 23, 78, 46];
// const evenNumbers = [];
// for(let even of numbers) {
//     if(even%2 === 0){
//         evenNumbers.push(even);
//     }
//     else {
//         continue;
//     }
// }
// console.log(evenNumbers);

// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

// const numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
// let concatenatedString = '';
// for(let name of numbers) {
//     concatenatedString += name;
// }
// console.log(concatenatedString);

// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

// const statement = 'I am a hard working person';

// const words = statement.split(' ');
// let reverseStatement = '';
// for(let i = words.length - 1; i >= 0; i--) {
//     reverseStatement += words[i] + ' ';
// }
// console.log(reverseStatement.trim());

// different approach

// const statement = 'I am a hard working person';
// const words = statement.split(' ');
// const reversedWords = words.reverse();
// console.log(reversedWords);
// const reverseStatement = reversedWords.join(' ');
// console.log(reverseStatement);

// Given a 2D array, update the value at second row first item to 99 and print the updated array.

// input:

// [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]
// Expected Array:

// [
//   [1, 2],
//   [99, 4],
//   [5, 6]
// ]

// const array2D = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ];
// array2D[1][0] = 99;
// console.log(array2D);

