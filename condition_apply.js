// if else condition

// var apple = 300;

// var money = 100;

// if (money >= apple) {
//     console.log("I can buy 1kg Apple")
// }
// else {
//     console.log("I can't buy it")
// }

// let number = 5;

// if (number > 0) {
//     console.log(number + " is positive");
// } else if (number < 0) {
//     console.log(number + " is negative");
// } else {
//     console.log(number + " is zero");
// }


//Nested if else and else if (Multiple) condition 

// let num = -4;

// if (num >= 0) {
//     if (num % 2 === 0) {
//         console.log(num + " is positive and even");
//     } else {
//         console.log(num + " is positive and odd");
//     }
// } else {
//     if (num % 2 === 0) {
//         console.log(num + " is negative and even");
//     } else {
//         console.log(num + " is negative and odd");
//     }
// }

// Else-If Ladder Problem

// Problem: Student mark input (0–100) niye grade assign koro.

// let marks = 78;
// let grade;

// if (marks >= 80) {
//     grade = "A+";
// } else if (marks >= 70) {
//     grade = "A";
// } else if (marks >= 60) {
//     grade = "B";
// } else if (marks >= 50) {
//     grade = "C";
// } else if (marks >= 33) {
//     grade = "D";
// } else {
//     grade = "F";
// }

// console.log("Marks: " + marks + ", Grade: " + grade);

// Complex Nested If-Else Problem

// Problem: User input diye age ar salary check kore job level assign koro।

// Rules:

// Age < 25 & Salary < 30000 → "Junior Trainee"

// Age < 25 & Salary >= 30000 → "Trainee"

// Age 25–40 & Salary < 50000 → "Mid-Level"

// Age 25–40 & Salary >= 50000 → "Senior-Level"

// Age > 40 → "Manager"

// let age = 28;
// let salary = 55000;
// let jobLevel;

// if (age < 25) {
//     if (salary < 30000) {
//         jobLevel = "Junior Trainee";
//     } else {
//         jobLevel = "Trainee";
//     }
// } else if (age <= 40) {
//     if (salary < 50000) {
//         jobLevel = "Mid-Level";
//     } else {
//         jobLevel = "Senior-Level";
//     }
// } else {
//     jobLevel = "Manager";
// }

// console.log("Age: " + age + ", Salary: " + salary + ", Job Level: " + jobLevel);
