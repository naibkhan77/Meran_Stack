// synchronous 

// const { reject } = require("async");

// console.log("A");
// console.log("B");
// console.log("C"); 


// 

// Asynchronous -non-block 

// console.log("A");
// setTimeout(() => {
//     console.log("B");
// }, 3000); 
// console.log("C"); // Runs immediately / output  A, C, B - no blocking 


// 


// console.log("A");
// const f = () => console.log("B"); 
// setTimeout(f, 3000); 
// console.log("C");

// 


// console.log("A");

// const f = () => {
//     console.log("B"); 
    
//     setTimeout(f, 3000); 
// }
// console.log("C");
// f();


// 

// const id = setTimeout(() => {
//     console.log("Runs after 2s");
// }, 2000); 
// // clearTimeout(id); // Cancle 


//

// const id = setInterval(() => {
//     console.log(("Runs after every 2s"));
// }, 2000);   // run this code none stop 


// 

//  How to Stop setInterval

// let intervalId = setInterval(() => {
//     console.log("Running..");
// }, 1000); 

// // stop after 5 seconds 

// setTimeout(() => {
//     clearInterval(intervalId); 
// }, 5000); 


// 

// setInterval --  run repeatedly 

// let count = 0; 
// const intId = setInterval(() => {
//     count++; 
//     console.log(count);
//     if(count >= 5) clearInterval(intId);
// }, 1000); 


// 

/////////////////  Callbacks & Callbacks Hell; //////////////////

// function fetchData(callback) {
//     setTimeout(() => {
//         const data = {name: "Zain"};
//         callback(data); // calling the callback 
//     },  2000);
// }
// // passing a function as callback 
// fetchData((result) => console.log(result.name)); 
// console.log("Done");

// we confused by the syntax 
// let result = fetchData(); 
// console.log(result.name);


//////////// parameter and function concept ///////////// 

// I am confused with callback (function and parameter)
// What is a parameter normally?

// function greet(name) {
//     console.log("Hello " + name);
// }
// // name is a parameter 
// greet("Qasim");


// 

// Now replace value with a function

// function doSomething(callback) {
//     callback(); //calling it
// }
// Here: callback is still a parameter
// but we expect it to be a function 

// Passing a function 

// doSomething(() => {
//     console.log("I am a function"); 
// }); 
// Now the arrow function is passed into callback 


///////

// /////////////// Callback Hell ////////////

// getUser(id, (user) => {
//     getOrder(user.id, (order) => {
//         getDetails(order[0].id, (d) => {
//             console.log(d);
//             // 2 levels deep 
//         });
//     });
// });


// 

//////////////// Promises ///////////////////// 

// promise have three 3 state 
// 1. Pending 2. Fulfilled 3. Rejected 


// async 

// function getWeather(city) {
//     return ({city, temp: 33});
// }

// let result = getWeather("Lahore"); 
// console.log(result);


// 

// function getWeather(city) {
//     return new Promise((resolve, reject) => {
//         if(city === "") 
//             reject(new Error("Error in getting Weather")); 
//         else
//             resolve({city, temp: 23});
//     }); 
// }

// getWeather("Lahore")
// .then(data => console.log("data: ", data))
// .catch(error => console.log(error.message))
// .finally(() => console.log("Done"));



///

// Creating a Promise 

// let myPromise = new Promise((resolve, reject) => {
//     let success = true; 

//     if(success) {
//         resolve("Operation successful!");
//     } else {
//         reject ("Operation failed!"); 
//     }
// }); 

// myPromise
//     .then(result => {
//         console.log(result); // operaton successfull
//     })
//     .catch(error => {
//         console.log(error);
//     })
//     .finally(final => {
//         console.log("Done");
//     })


// 

// Simulating Async Task

// const fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Data received!"); 
//     }, 2000); 
// });

// fetchData.then(data => console.log(data));



// 

// Handling Errors

// const getUser = new Promise((resolve, reject) => {
//     let userFound = false; 

//     if(userFound) {
//         resolve("User Found"); 
//     } else 
//         reject("User not founc!");
// }); 

// getUser
//     .then(res => console.log(res))
//     .catch(err => console.log(err)); 



//


// Promise Chaining
// you can chanin multiple .then() calls: 

// const numPromise = new Promise((resolve) => {
//     resolve(2);
// }); 

// numPromise 
//     .then(num => num * 2)
//     .then(num => num * 3)
//     .then(result => console.log(result)); 



// 

// Promise with async/await

// function getData() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Hello!"), 2000);
//     }); 
// }

// async function fetchData() {
//     const result = await getData(); 
//     console.log(result);
//  }

//  fetchData();


// 


// const promise = new Promise((resolve, reject) => {
//     const res = false; 
//     // an Asynchronous operation. 
//     if(res) {
//         resolve("Resolved!"); 
//     } else {
//         reject("Error"); 
//     }
// }); 

// promise
//     .then((res) => console.log(res)),(err) => alert(err); 


// 

// The .catch() method for handling rejection

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(Error("Promise Rejected Unconditionally. But Not now")); 
//     }, 2000); 
// }); 

// promise
//     .then((res) => console.log(res))

// promise
//     .catch((err) => console.log(err.message));



//

// JavaScript Promise.all()

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(3);
//   }, 300);
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2);
//   }, 200);
// });

// Promise.all([promise1, promise2]).then((res) => {
//   console.log(res[0]);
//   console.log(res[1]);
// });



// 















/////////// Async / Await //////////// 






























