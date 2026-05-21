// const list = [1, 2, 3, 4, 5]; 
// const list2 = [22, 44, 55, 66]; 

// const list3 = list.concat(list2); 
// console.log(list3);

// but we make this in spread operator and more amazing way 

// const list = [1, 2, 3, 4, 5]; 
// const list2 = [22, 44, 55, ...list, 66]; 

// console.log(list2);


// 

// const obj1 = {
//     name: "Zain", 
//     age: 23, 
//     marks: 88
// }

// const obj2 = {
//     ...obj1,
//     gpa: 3.1, 
//     semester: 6
// }

// let obj3 = obj2; 
// console.log(obj3);


// 

// const sum = (a, b) => {
//     console.log(a + b);
// }

// const values = [10, 2]; 

// sum(...values);
// sum(values[0], values[1]);


// 


// const count = (a, b, ...c) => {
//     console.log(a + b); 
//     const s = c.reduce((a, b) => {
//         return a + b; 
//     }, 0)
//     console.log(s);
// }
// // we use this Array methods because ...spread is used to expand elements of an iterable (like an array or string)
// count(11, 9, 1, 2, 3, 4);  // (10, 20) output



// 

// const myName ="Muhammad Naib";
// const t = [...myName];
// console.log(...myName);


// 


// const fname = "Ali"; 
// const lname = "khan"; 
// const age = 23;
// const gender = "Male"; 
// const city = "Peshawar"; 
// const village = "Kohat";
// const houseNO = 39; 


// const data = {
//     fname, 
//     lname, 
//     age, 
//     gender, 
//     address: {
//         city, 
//         village, 
//         houseNO,
//     }
// }

// console.log(data);


// 

// Regular Expressions — Creating & Testing


// const literal = /hello/i; 
// const dynamic = new RegExp("hello", "i"); 

// console.log(dynamic)

// 

// const text = "I hava a cat and dog";

// console.log(text.match(/cat|dog)/g)); 
















