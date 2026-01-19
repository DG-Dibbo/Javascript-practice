// Task 1

// Count how many times a string has the letter a
// const text = "JavaScript is a versatile language.";
// let count = 0;
// for(let i = 0; i<text.length; i++){
//     if(text[i].toLowerCase() === 'a')
//     {
//         count++;
//     }
// }
// console.log(`The letter 'a' appears ${count} times in the sentence.`);

// Task 2

// Count how many times a string has the letter a or A
// const sentence = "JavaScript is a versatile language A.";
// let count = 0;
// for (let i = 0; i < sentence.length; i++) {
//     if (sentence[i] === 'a' || sentence[i] === 'A') {
//         count++;
//     }
// }
// console.log(count);

// Task 3

// Check whether a string contains all the vowels a, e, i, o, u
// const phrase = "Education is the key to success.";
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// let hasAllVowels = true;
// for(let check of vowels){
//     if(!phrase.toLowerCase().includes(check)){
//         hasAllVowels = false;
//         break;    
//     }
// }

// if(hasAllVowels){
//     console.log("The phrase contains all the vowels.");
// } else {
//     console.log("The phrase does not contain all the vowels.");
// }

// Task 4

// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

// const inputString = "Xenon and xylophone are examples of words with x and X.";
// let outputString = "";
// for (let char of inputString) {
//     if (char === 'x') {
//         outputString += 'y';
//     } else if (char === 'X') {
//         outputString += 'Y';
//     } else {
//         outputString += char;
//     }
// }

// console.log(outputString);
// Output: "Yenon and yylophone are examples of words with y and Y."

// Task 5

// Capitalize Every first Letter of each word in a String

const phrase = "hello world! welcome to javascript programming.";
let capitalizedPhrase = "";
let capitalizeNext = true;
for (let char of phrase) {
    if (char === ' ') {
        capitalizedPhrase += char;
        capitalizeNext = true;
    } else if (capitalizeNext) {
        capitalizedPhrase += char.toUpperCase();
        capitalizeNext = false;
    } else {
        capitalizedPhrase += char;
    }
}

console.log(capitalizedPhrase);
// Output: "Hello World! Welcome To Javascript Programming."