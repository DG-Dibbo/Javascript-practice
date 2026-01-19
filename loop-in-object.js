// const colleges = {
//     grp: {
//         science: {
//             dept: ['physics', 'chemistry', 'maths'],
//             location: 'Building A',
//         },
//         arts: {
//             dept: ['history', 'literature', 'philosophy'],
//         },
//         commerce: {
//             dept: ['economics', 'accounting', 'business'],
//         },
//     },
//     gpa : 5.0,

// };

// console.log(colleges['grp']['science']['dept'][0]); // Output: physics
// console.log(colleges.grp.arts);

// for of : array, string
// for in : object
// Looping through the colleges object
// for (const faculty in colleges.grp){
//     console.log(faculty); // Output: science, arts, commerce
//     const departments = colleges.grp[faculty].dept;
//     for(const dept of departments){
//         console.log(" - " + dept); // Output: - physics, - chemistry, - maths, etc.
//     }
// }