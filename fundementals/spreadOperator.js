// Definition 

// The Spread Operator in JavaScript is ... (three dots) and it is used to:

// Expand an array or object into individual elements
// Merge arrays or objects
// Copy arrays or objects without mutation


// 

// const arr1 = [1, 2, 3]; 
// const arr2 = [...arr1]; 

// console.log(arr2);


// 

// const arr1 = [2, 3, 4, 5]; 
// const arr2 = [9, 0, 10];

// const marged = [...arr1, ...arr2]; 
// console.log(marged);


// 

// Spread with Objects

// const obj1 = {a: 1, b: 2}; 
// const obj2 = {...obj1}; 

// console.log(obj2); 

// 

// Spread with Objects

// function sum(x, y, z) {
//     return x + y + z;
// }

// const numbers = [1, 2, 3]; 
// console.log(sum(...numbers));


// 
// Spread operator ... works on iterable objects (like arrays, strings)
// Numbers are not iterable, so mul(...result) fails


// function mul(a, b) {
//     return a * b; 
// }

// // const result = (10, 5); // that should be error 
// const result = [10, 5];  // that should be works
// console.log(mul(...result));


// 

// const array = [1, 2, 3]; 
// const obj = { ...array }; 

// console.log(typeof obj);

// 




