// String Fundamentals — Immutability & Character Access

// Strings are immutable — every method returns a NEW string. The original is never modified

// const title = "Smart Content Analyzer";

// // length
// console.log(title.length) // 22 
// // Character access (zero-based like arrayas); 
// console.log(title.charAt(0));
// console.log(title[2]);
// console.log(title.at(-1)); // (negative from end);
// console.log(title[title.length -1]); // r old way

// Key fact: Always use string primitives ("hello"), never new String("hello").

//  Pro Tip: at(-1) is cleaner than str[str.length - 1] for accessing the last character. It was added in ES2022 and works on both strings and arrays.


// 

// Searching Strings

// const article = "JavaScript is versatile. JavaScript powers the web.";

// // indexOf / lastIndexOf — returns position (-1 if not found)
// console.log(article.indexOf("JavaScript")); // 0
// console.log(article.lastIndexOf("JavaScript")); // 25
// console.log(article.indexOf("Python")) // -1 (not found);

// // includes returns boolean  
// console.log(article.includes("versatile")) // true 

// // startsWith / endsWith — returns boolean
// console.log(article.startsWith("JavaScript")); // true
// console.log(article.startsWith("is")); // false
// console.log(article.endsWith("web.")) // true; 

//  Pro Tip: Use includes() for boolean checks — it's clearer than indexOf() !== -1.


// 

// Extracting Substrings — slice

// slice() supports negative values
// substring() does NOT

// const url = "https://www.nexusberry.com/courses/react";

// console.log(url.slice(8, 27)); // www.nexusberry.com/
// console.log(url.slice(-5)); // react
// console.log(url.substring(8, 27)); // www.nexusberry.com/


// 

// Transforming Strings

// const userInput = "   John DOE   ";

// Trimming whitespace
// console.log(userInput.trim());
// console.log(userInput.trimStart());
// console.log(userInput.trimEnd());

// Case conversion 
// "Hello".toLowerCase();   // "hello"
// "Hello".toUpperCase();   // "HELLO"

// Replacing content 
// console.log("I love cats".replace("cats", "dogs"));

// Pro Tip: Always trim() user input before processing. Invisible whitespace breaks comparisons, searches, and database lookups.


// 

// Split & Join — String ↔ Array Bridge

// split — string to array

// console.log("Laptop", "Mouse", "Keyboard".split(",")); 

// // Word count pattern
// const wordCount = text.split(/\s+/).length;
// console.log(wordCount);

// let products = ["Laptop", "Mouse", "Keyboard"]; 
// console.log(products.join("|")); 

// 

// Parse & rebuild

// const csv = "a,b,c"; 
// const items = csv.split(","); 
// console.log(items); // 
// // console.log(items.join(" - "));

// > Pro Tip: Use split(/\s+/) instead of split(" ") for word splitting — it handles multiple spaces, tabs, and newlines correctly.


// 


// Template Literals
// Basic Syntax

// const name = "Ali"; 
// const greeting = `Hello, ${name}!`; 
// console.log(greeting);

// 

// Using Expressions

// const a = 5; 
// const b = 10; 
// console.log(`The total number is: ${a + b}`); 


// 

// Multi-line Strings

// const message = `This is a line 1
// This is a line 2
// This is a line 3`; 
// console.log(message);

// Without Template Literals

// const message = "This is a line 1 " + "This is a line 2 " + "This is a line 3 ";
// console.log(message);


// 

// Using Functions inside

// function greet(name) {
//     return `Hello ${name.toUpperCase()}`; 
// }
// console.log(greet("Sara"));

// name = "Mr" is a default parameter 
// it only works when no value (or undefined ) is passed 

// function greet(name = "Mr") {
//     return `Hello ${name}`; 
// }
// console.log(greet());


//

// Real-life Example

// const products ="Laptop"; 
// const price = 1200; 

// const info = `The ${products} costs is final ${price}`;
// console.log(info);


// 

// const products = {name: "Laptop", price: 89999, stock: 9}; 

// Expressions interpolation 
// console.log(`${products.name} Rs. ${products.price.toLocaleString()}`); 

// Multiline strings 
// const report = ` 
//     Name: ${products.name}
//     Price: ${products.price}
//     Status: ${products.stock > 10 ? "Available" : "Not Available sorry"}`
// console.log(report);


// 

// Padding & Repeating

// padStart — pad from the left (great for numbers)


























