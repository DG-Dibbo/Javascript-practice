// let numbers = [10,20,30,40,50]
//    index --> 0  1  2  3  4
// console.log(numbers)
// console.log(numbers[1])
// console.log(numbers[2])
// console.log(numbers[3])

// // ser or update number in array of index
// let abc = 60;
// numbers[5] = abc
// console.log(numbers)
// remove

// const numbers_array = [10,20,30,40,50];
// console.log(numbers_array.length)

// include --> find the element

// const nums = [10, 20, 30, 40, 50];
// // console.log(nums.includes(20));
// // console.log(nums.indexOf(30)); output --> 2
// console.log(nums.indexOf(60)); // output --> -1
// if(nums.includes(30)){
//     console.log(true);
// }
// else
// {
//     console.log(false);
// }

// kono akta array kinah seta check korte Array.isArray use kora lage

// const numbers = [10,20,4,5,6];
// const age = 15;
// console.log(Array.isArray(numbers)) //output --> true
// console.log(Array.isArray(age)) //output --> true

// array concat --> duita array ke aksathe kore akta array baniye dibe
// let array1 = [10,20,30,40];
// let array2 = [50,60,70,80,90,100]

// let concatinate = [];

// concatinate = array1.concat(array2);
// console.log(concatinate)

// slice(start,end) ---> mne kto theke suru korbe ar ses hbe tar ager step a.exp-> 1,3 --> output--> 1,2 
// let array1 = [10,20,30,40];

// let array2 = array1.slice(1,3);
// console.log(array2)

// sorting array

// const unsorted_array = [5,3,8,1,2,17];

// const sorted_array_asc = [...unsorted_array].sort(function(a,b) {return a-b});
// const sorted_array_desc = [...unsorted_array].sort(function(a,b) {return b-a});

// console.log("Unsorted array:", unsorted_array);
// console.log("Sorted array in ascending order:", sorted_array_asc);
// console.log("Sorted array in descending order:", sorted_array_desc);