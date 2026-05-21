// let x = 10; 
// x = 20; 
// console.log(x);


// 

// Dynamic vs Static 


// let age = 20; 
// age = "Twenty"; 
// age = true; 
// console.log(age);


// 


// 

// Data Types 
// The 7 Primiteve data types 
// string, number, boolean, null, undefined, symbol 


// let city = "lahore"; 
// let marks = 90; 
// let block = true; 
// let x; 
// let y = null; 
// let z = Symbol(7); 

// console.log(z);

// 


// const a = 20; 
// const b = 10; 

// if (a == b) 
//     console.log("Equal");
// else  
//     console.log("Not Equal"); 


// 

// Data types 

// let city = "lahore"; 
// let marks = 88; 
// let block = true; 
// marks = "88"; 

// console.log(marks); 
// console.log(typeof marks);



// 

// number to string concept

// const total = 199.00;
// let s1 = String(total); 
// console.log(typeof s1);

// let s2 = `${total}`; 
// console.log(s2);


// 

// const input = prompt("Enter price:"); 

// const price = Number(input); 
// const price2 = +input; 
// const price3 = parseInt(input);
// const price4 = parseFloat(input); 


// console.log(5 + 3);


// 

// let x = "abc "; 
// let y = 2; 
// console.log(x + y); 


// 

// The Famouse bug; 

// let user = null; 
// console.log(typeof user); 

// if (user === null)  {
//     console.log("user null!");
// }



// Logical operators 


// let x = 100; 
// let y = 5; 
// console.log(x / y);

// This only works for numeric operations.

// let x = "100"; 
// let y = 5;
// console.log(x / y); 


// let x = "abc";
// let y = 10; 
// console.log(x / y); 


// 

// console.log(name); 
// var name = "rana"; // undefined;

// Key idea: && returns the first falsy OR the last truthy value

// let x = "lahore" && "Karachi"; // && return the last ture value
// console.log(x);

// let x = "Lahore" && 0;  // first condition is false 
// console.log(x);


// let x = 0 || "Karachi";
// console.log(x);


// let x = 10 < 100 && "Hello"; 
// console.log(x);


// let x = !(10 < 100); 
// console.log(x);  // false


// let x = !0; 
// console.log(x); // true 


// Hello is truthy and && operator move to right How are you is also correct so the output is ("How are you");

// "Hello" && console.log("How are you");

// let x = 10; 
// let y = 20; 
// let max; 

// let x = console.log("How are you") && "Hello";
// console.log(x);


// Here console.log is a function every function ruturn something here they return How are you and undefined

// let x = console.log("How are you"); 
// console.log(x);


// let x = 10 > 100 && console.log("How are you"); 
// console.log(x);


// 

// Ternary operator 

// let x = 10; 
// let y = 20; 
// let max; 

// if (x > y) 
//     max = x; 
// else 
//     max = y; 
// console.log(max);


// 

// let x = 10; 
// let y = 20; 
// let max = x > y ? x : y; 
// console.log(max)


// short cercut-concept 



// let z =  "Hello" && console.log("How are you");
// console.log(z);


// let q = console.log("How are you!") && "Hello"; 
// console.log(q);



// 

// Primitive and object

// Primitive

// Primitives → Copied by Value

// Primitive types:

// string
// number
// boolean
// null
// undefined
// symbol
// bigint

// When you assign them, a new copy is created.


// let a = 10; 
// let b = a; 

// b = 20; 
// console.log(b);


// 

// Objects 

// Objects → Copied by Reference

// Objects include:

// object
// array
// function

// When assigned, the reference (memory address) is copied, not the object.


// let obj1 = {name: "ali"};
// let obj2 = obj1; 
// obj2.name = "Ahmed"; 
// console.log(obj2.name); 








