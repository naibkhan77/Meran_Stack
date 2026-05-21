// String Processing pattern Matching & Defensive Error Handling

// String Fundamentals — Immutability & Character Access


// const title = "Smart Content Analyzer";
// // length
// console.log(title.length); // 22

// // Character access (zero-base, like arrays)
// console.log(title.charAt(0)); // S
// console.log(title[6]); // C
// console.log(title.at(-1)); // r (negative from end)
// console.log(title[title.length -1]); // r (old way) 


// 

// 2. Searching String 

// const article = "JavaScript is versatile. JavaScript powers the web.";

// console.log(article.indexOf("is")); // 11
// console.log(article.indexOf("web"));//47
// console.log(article.lastIndexOf("JavaScript")); // 25

// // includes return boolean 
// console.log(article.includes("versatile")); // true 

// // startWith / endsWith - return boolean 
// console.log(article.startsWith("JavaScript")); // true 
// console.log(article.endsWith("web.")); // true 


// 

// Extracting Substrings — slice

// const url = "https://www.nexusberry.com/courses/react";

// console.log(url.slice(0, 40)); // start, end 
// console.log(url.length); // 40 
// console.log(url.slice(-7)); // negative form end 
// console.log(url.substring(8, 27)); // same but no negative support output www.nexusberry.com/


// 


// Transforming Strings


// const userInput = "   John DOE   ";

// // trimming whitespace
// console.log(userInput.trim());
// console.log(userInput.trimStart()); 
// console.log(userInput.trimEnd()); 

// // case conversion
// let strings = "Hello Naib"; 
// console.log(strings.toLowerCase());
// console.log(strings.toUpperCase());

// // Replacing content 
// console.log("I love cats".replace("cats", "dogs"));
// console.log("dogs dogs dogs".replaceAll("cats", "doges"));


// 


// Split & Join — String ↔ Array Bridge

// split - string to array 

// a is already an array no a string / Arrays don’t have a split method,
//  .split() is a string method, meaning it only works on strings.

// const a = ["Laptop", "Mouse", "Keyboard"]; 
// console.log(a.split(","));  /// is not working 

// console.log("Laptop, Mouse, Keyboard".split(","));

// let products = {
//     name: "Laptop", 
//     price: 89999, 
//     gurannty: "yes"
// }
// // split() works only on strings.
// console.log(products.name.split(""), products.price, products.gurannty); 



// 

// join - array to string 

// console.log(["Laptop", "Mouse"].join(" | ")); 

// console.log(["laptop", "mouse", "keyboard", "moniter"].join(" - "));


// parse and rebuild; 


// const csv = "a, b, c"; 
// const items = csv.split(""); 
// console.log(items);


// 


// Template Literals

// const product ={name: "Laptop", price: 89999, stock: 15}; 

// Expression interpolation 
// console.log(`${product.name}: RS. ${product.price.toLocaleString()}`);

// Multiline Strings 

// const report = `Name: ${product.name} Price: RS.${product.price.toLocaleString()}
//             Status: ${product.stock > 16 ? "In stock" : "Out of stock"}`;
//               console.log(report); 


// 

// const items = ["HTML", 'CSS', 'JS'];    
// console.log(`Skills: ${items.map(s => `[${s}]`).join(" ")}`); 


// 


// Padding & Repeating

// padStart — pad from the left (great for numbers)
// console.log("5".padStart(3, "0"));
// console.log("55".padStart(3, "0"));  

// padEnd - pad from the right 
// console.log("Hi".padEnd(10, "."));

// repeat - repeat a string N times 
// console.log("-".repeat(30));

// real world: invoice numbers 

// const invoiceNum = String(42).padStart(6, "0"); 
// console.log(`INV-${invoiceNum}`);

// let str = "hello   ";
// str.trim(); 
// console.log(str);


//   


////// String Fundamentals — Immutability & Character Access /////////

















