
// simple function 

// function sum(a, b) {
//     return a + b; 
// }

// let add = sum(10, 11); 
// console.log(add); 

// other way we write 

// function sum(a, b) {
//     let ans = a + b; 
//     console.log(ans);
// }

// sum(10, 22); 

// function sum(a, b) {
//     return a + b; 
// }

// let ans = sum(10, 10, 10); 
// console.log(ans); 
 

// 

// function sum(x, y) {
//     return x + y; 
// }

// let ans = sum(sum(10, 20), 30); 
// console.log(ans); 


// 

// hosited properties 

// let ans = sum(20, 20);
// console.log(ans);


// function sum(x, y) {
//     return x + y; 
// }


// 

// function sum(x, y) {
//     console.log(x + y);
// }

// sum(sum(10, 21), 30); 


// 
// name less function 

// let sum = function(x, y) {
//     return x + y; 
// }

// console.log(typeof sum); // typeof sum is function but this sum is variable 



// 

// let sum = function(x, y) {
//     return x + y; 
// }

// let mul = function(x, y) {
//     return x * y; 
// }

// let div = function(x, y) {
//     return x / y; 
// }

// function calculator(x, y, f) {
//     return f(x, y);
// }
 
// console.log(calculator(20, 10, div)); 


// 

// Arrow function 

// In Arrow function for singel expression we don't need  function name and {} curle braces 

// let sum = (x, y) => x + y; 
// let ans = sum(11, 11); 
// console.log(ans); 


// 

// let mul = (a, b) => {
//     return a * b; 
// }
// console.log(mul(10, 5)); 


// 

// if we write return then we must add {} curle braces

// let sum = (x, y) =>  x + y; 
// let ans = sum(40, 20); 
// console.log(ans); 



//

////////// Higher-Order (HOF) function   //////////////

// function define Standerd function 

// function sum(x, y) {
//     let ans = x + y; 
//     console.log("sum =", ans);
//     // doesn't use return returns undefined;
// }

// let z = sum(99, 1); 
// console.log(z);


// 

// scop local variable and global 

// let x = 10; // global variable
// let y = 40 // this 40 is not print because this is global local variable y is a value 20 that's why 

// function display() {
//     let y = 20; // local variable
//     console.log(x);
//     console.log(y);    
// }

// function display1() {
//     let y = 50
//     console.log(x);
//     console.log(y); // y is not define here because it is local variable
// }

// console.log(display());
// console.log("-------------");
// console.log(display1());


// 

// Arrow function (ES6)

// (x, y) => x + y; // that set 

// let sum = (x, y) => x + y; 

// let ans = sum(10, 20); 
// console.log(ans); // 30

// 

// for multiple line of code must add braces 

// let f = (x, y) => {
//     x++; 
//     if(x > y) 
//         return x + y; 
//     else 
//         return x - y; 
// }

// let ans = f(20, 3); 
// console.log(ans);


// peranthises just for grouping not block so it run; 

// let f = (x, y) => (x + y);
// let ans = f(20, 3);
// console.log(ans)

// 

// let f = (x) => x + 1; 
// let ans = f(10); 
// console.log(ans)
// // same output different styel
// function sum(x) {
//     return x + 1; 
// }

// console.log(sum(10));


// 

// let mathes = (x, y) => {
//     // return (x + y, x - y, x * y, x / y);  // its return only the last value
//     return [x + y, x - y, x * y, x / y];  // that's return an array of all value; 
// }
// console.log(mathes(20, 10));


// 

// objects 

// let products = () => {
//     return {id: 1, title: "LED TV", price: 5000 };
// }

// console.log(products());


// so we use () braces for single line an object other wise they give me error 

// let products = () => ({id: 1, title: "LED TV", price: 5000 });

// console.log(products);


// No parameter 

// let i = () => console.log("Hello"); 
// i();

// 

// let i = _ => console.log("Hello"); 
// i();

// 

// function sum(x = 0, y = 0){
//     return x + y; 
// }
// let ans = sum(20, 7);
// console.log(ans);


// Function Declaration — hoisted, named in stack traces
// function formatEmployeeName(firstName, lastName) {
//     return `${firstName} ${lastName}`;
// }

// function names(firstName, lastName) {
//     return `${firstName}: ${lastName}`;
// }

// console.log(names("Muhammad", "Naib"));



// // Function Expression — NOT hoisted
// const calculateSalary = function(basePay, hoursWorked) {
//     return basePay * hoursWorked;
// };

// const calculatePrice = function(basePay, hoursWorked) {
//     return basePay + hoursWorked; 
// }

// let totall = calculatePrice(500, 500); 
// console.log(totall);



// // Arrow Function — concise, implicit return for single expressions
// const getFullTitle = (name, department) => `${name} — ${department}`;

// // Arrow with body (multiple lines → curly braces + explicit return)
// const generateEmployeeId = (department, index) => {
//     const prefix = department.substring(0, 15).toLowerCase();
//     const paddedIndex = String(index).padStart(4, "0");
//     return `${prefix}-${paddedIndex}`;
// }

// let resutlt = generateEmployeeId("computerScience", 15);
// console.log(resutlt);


// 


//////////// Parameters - Defaults & rest /////////////

// Syntax 

// function greet(name = "Gues") {
//     return "Hello " + name;
// }
// // if name is provided use it 
// // if name is undefined or missing -> use "Guest";
// console.log(greet("Naib"));
// console.log(greet());

// 

// Multiple Default 

// function sum(a = 0, b = 0) {
//     return a + b;
// }

// console.log(sum(5, 2)); // 7
// console.log(sum(5)); // 5
// console.log(sum()); // 0

// 

// Default depends on another parameter 

// function multiply(a, b = a * 2) {
//     return b; 
// }

// console.log(multiply(5));

// 

// Important Notes : Default values only apply when argument is undefined

// function test(x = 10) {
//     console.log(x);
// }
// test(null); // null (not 10);


// 


// Rest Parameters (...)
// The rest parameter collects multiple arguments into a single array.

// Syntax

// function func(...args) {
//     // args is an array
// }


// 

// Example 1: Collect all arguments

// function numbers(...nums) {
//     console.log(nums);
// }
// numbers(1, 2, 3); // [ 1, 2, 3 ]

// 

// Sum using rest

// function sum(...nums) {
//     return nums.reduce((total, n) => total + n, 0);
// }
// console.log(sum(2, 3, 5)); // 10


// 

// Mixing normal + rest

// function introduce(firstName, ...hobbies) {
//     console.log(firstName); 
//     console.log(hobbies);
// }
// introduce("Zain", "Cricket", "Gaming", "Coding"); 
// // output /  Zain [ 'Cricket', 'Gaming', 'Coding' ]


// 

// function products(fname, ...favorate) {
//     console.log(fname); 
//     console.log(favorate); 
// }

// products("Pc", "Screen", "Mechanical Keyboard", "Lighting Mouse"); 

// 

// // Default Parameters — eliminate manual undefined checks

// const createProfile = (name, role = "Junior Developer", department = "Unassigned") => {
//     return {name, role, department}; // return object
//     // return [name, role, department]; // return array 
// }
// console.log(createProfile("Naib"));

// 

// Rest Parameters — collect remaining arguments into an array

// const logActivity = (employeeName, ...activities) => {
//     console.log(`${employeeName}'s activities:`);
//     for(const activity of activities){
//         console.log(` - ${activity}`); 
//     }
// }; 
// logActivity("Sara", "Code Review", "Sprint Planning", "Deployment");

// 

// const activity = (personName, ...activities) =>  {
//     console.log(`${personName}: DealyActivities`); 
//     for(const activity of activities) {
//         console.log(`--> ${activity}`);
//     }
// }; 
// activity("M.Naib", "Coding", "Music", "Exercise", "Reading Books", "sometimes movies"); 


// 

//////////// Scope //////////////////

// Types of Scope in JavaScript
// A variable declared outside any function or block is global. 

// Global Scope
 
// let name = "Zubir";  // public declaration 

// function greet() {
//     console.log(name);   // accessible 
// }
// greet(); 
// console.log(name); /// accessible everywhere 


// Function Scope

// function test() {
//     let message = "Hello"; 
//     console.log(message);
// }
// test(); 
// console.log(message); //  ReferenceError // run time error 

// 

// let message = "Hello";

// function test(name, age) {
//     console.log(message);
//     return {name, age};
// }
// console.log(test("Haris", 22));

// 

// Block Scope {} 
// Variables declared with let and const inside {} only exist inside that block

// 

// Lexical Scope (Important Concept)

// function outer() {
//     let outerVar = "I am outer"; 

//     function inner() {
//         console.log(outerVar) // can access parent scope 
//     }
//     inner();
// }
// outer(); 

// 

// Shadowing (Same Variable Name)


// let x = 10; 

// function test() {
//     let x = 20; 
//     console.log(x); // inner show outer; 
// }
// test(); 
// console.log(x);


// 

// let x = 10; 

// function test() {
//     let x = 20; 
//     return x;   
// }
// console.log(test(x));
// console.log(x);



// 

// Scope Chain

// let a = 1; 

// function outer() {
//     let b = 2; 
    
//     function inner() {
//         let c = 3; 
//         return {a, b, c}; // 1, 2 ,3;
//     }
//     return inner(); 
// }
// console.log(outer()); 

// 

// let a = 10; 

// function outer() {
//     let outerVar = "I am outer"; 

//     function inner() {
//         console.log(outerVar) 
//         return {a}
//     }
//      return inner();
// }
// console.log(outer());


// 

// Practical Example

// let user =  "Global User"; 

// function login() {
//     let user = "Local User"; 

//     if(true) {
//         let status = "Logged In"; 
//         console.log(user); // local user
//         console.log(status); // logged in
//     }
//     console.log(status) //  error
// }
// login(); 

// 

// Scope — Where Variables Live

// const companyName = "NexesBurry"; //Global scop visible everywhere 

// function createDepartmentReport(deptName) {
//     const reportTitle = `${deptName} Report` // function scope - this function only 

//     if(deptName === "Engineering") {
//         const bonus = 15; // Block scope - this if block only
//         console.log(`${reportTitle} - Bonus: ${bonus}%`); 
//     }
//     else {
//         const bonus = 0; 
//         console.log(`- Sorry Bonus is ${bonus} Because you choose the wrong field`);
//     }

//     // console.log(bonus) // ReferenceError — bonus is block-scoped
//     // console.log(companyName); // Global scope (scope chain lookup)
// }
// createDepartmentReport("Engineering"); // 


// 

////////////// Closures — Functions That Remember///////////// 

// def: A function that remembers where it was created; 

// Basic Example

// function outer() {
//     let count = 0; 

//     function inner() {
//         count++; 
//         console.log(count);
//     }
//     return inner; // normaly outer() shoul be gone; but inner keeps access to count 
// }
// const counter = outer(); 
// counter();
// counter();
// counter();

// 

// Function + outer variables it remembers = Closure

// function makeFunc() {
//     const name = "Mozilla"; 

//     function displayName() {
//         console.log(name);
//     }
//     return displayName; 
// }

// const myFunc = makeFunc();
// myFunc();


// 

////////////// Pure Functions — Predictable & Testable /////////////

// Example of a Pure Function


// function square(x) {
//     return x * x; 
// }
// console.log(square(4));


// 

// PURE — same input → same output, no side effects

// function calculateAnnualSalary(monthlySalary) {
//     return monthlySalary * 12; 
// }

// function formatCurrency(amount) {
//     return `Rs. ${amount.toLocaleString()}`;
// }

// // IMPURE depends on external state 

// let exchangeRate = 278; 
// function convertToUSD(pakrAmout) {
//     return pakrAmout / exchangeRate; 
// }
// // Fixed - pass rate as parameter 
// function convertCurrency(amount, rate) {
//     return amount / rate; 
// }
// console.log(calculateAnnualSalary(12000));
// console.log(convertToUSD(5000));
// console.log(convertCurrency(10000, 278));


// 

///////////////////  Higher-Order Array Methods //////////////////////
// Main Higher-Order Array Methods
//  forEach() / just looping no return 

// Only used for side effects (like logging, UI updates)

// const nums = [1, 2, 3]; 

// nums.forEach((nums) => {
//     console.log(nums);
// })

// 

// map() → Transform array
// Returns a NEW array

// const nums = [1, 2, 3]; 

// const result = nums.map((nums) => {
//     return nums * 2; 
// }); 
// console.log(result);

// 

// filter() → Select items

// const nums = [1, 2, 3, 4, 5]; 

// const even = nums.filter((nums) => {
//     return nums % 2 === 0; 
// })
// console.log(even)

// 

// reduce() → Convert array into single value

// const nums = [1, 2, 3, 4]; 

// const sum = nums.reduce((acc, curr) => {
//     return acc + curr; 
// }, 0); 
// console.log(sum);

// 

// find() → First match
// Returns the first element that matches condition

// const nums = [10, 20, 30, 40]; 
// const found = nums.find((num) => {
//     return num > 25; 
// }); 
// console.log(found);

// 

// let nums = [10, 20, 30, 40, 50]; 

// let ans = nums.filter((nums) => {
    
//     if (nums > 25){
//         console.log(`yor finding greater than 25 value: ${nums}` );
//     } 
// })

// 

// some() → At least one match

// const nums = [1, 2, 3, 4]; 

// const hasEven = nums.some((nums) => {
//     if(nums % 2 === 0)
//     console.log(`print only hasEven number: ${nums}`);
// })

// 

// const num = [1, 2, 3, 4]; 

// const hasEven = num.some((num) => num % 2 === 0); 
// console.log(hasEven); // true

// 

// Every() All must match 

// const nums = [2, 4, 6]; 
// const allEven = nums.every((nums) => nums % 2 === 0); 
// console.log(allEven);


// 

// Real-life Example (Very Important)

// const users = [
//     {name: "Ali", age: 20}, 
//     {name: "Zain", age: 17}, 
//     {name: "Sara", age: 22}, 
// ]; 
// Gets names of adults 
// const adults = users.filter((user) => {
//     return user.age >= 18; 
// }); 

// users.map((user) => {
//     return user.name;
// });
// console.log(adults);

// esay way output 

// const adults = users 
//     .filter(user => user.age >= 18)
//     .map(user => user.name); 

// console.log(adults);


// //

// Hight-order Array methods 

//  Iterate (Side Effects Only)

// employees.forEach((employee, index) => {
//     console.log(`${index + 1}. ${employee}`);
// })


// // 

/////////// Method Chaining — Data Pipelines ///////////////

// Method chaining means calling multiple methods one after another on the same value, forming a clean, readable “pipeline” of operations

// Basic idea 
// instead of doing this: 

// let arr  = [1, 2, 3, 4]; 

// let double = arr.map(x => x * 2); 
// let filterd = double.filter(x => x > 4); 
// let result = filterd.reduce((sum, x)  => sum + x, 0);

// console.log(result);

// you can chain it 

// let result = [1, 2, 3, 4]
// .map(x => x * 2)
// .filter(x => x > 4)
// .reduce((sum, x) => sum + x, 0); 
// console.log(result);

// 

     










// 

// Example 2: Private Variables

// function createBankAccount(balance) {

//     return {
//         deposit(amount) {
//             balance += amount;
//             console.log("Balane: ", balance);
//         }, 
//         withdraw(amount) {
//             balance -= amount; 
//             console.log("Balance: ", balance);
//         }
//     };
// }

// const account = createBankAccount(100); 
// account.deposit(50); 
// account.withdraw(30);

// 

// Closure + Separate Functions

// function createBankAccount(balance) {

//     function deposit(amount) {
//         balance += amount; 
//         console.log("Balance: ", balance);
//     }
    
//     function withdraw(amount) {
//         balance -= amount; 
//         console.log("Balance: ", balance);
//     }
//     return {deposit, withdraw};
// }

// let account = createBankAccount(100); 

// account.deposit(50);
// account.withdraw(30);


// 

// Function Factory

// function multiplier(x) {
//     return function(y) {
//         return x * y; 
//     };
// }

// const double = multiplier(2); 
// const triple = multiplier(3); 

// console.log(double(5)); // 10
// console.log(triple(5)); // 15

// 


// function createIdGenerator(prefix) {
//     let nextId = 1; 

//     return function(name) {
//         const id = `${prefix} - ${String(nextId).padStart(4, "0")}`; 
//         nextId ++;
//         return (id, name);
//     };
// }

// const generateEnginnerId = createIdGenerator("ENG"); 
// console.log(generateEnginnerId("Sara Ahmed"));
// console.log(generateEnginnerId("Hanaya Amir"));


// 

// backticks `` 
// 1. Takes another Function as an argument, OR 2. Return a function 


//  Function as Argument

// function greet(name) {
//     return `Hello ${name}`; 
// }

// function processUserInput(callback) {
//     console.log(callback("Zain")); 
// }

// processUserInput(greet); 


// 

// Function Returning Another Function


// function multiplier(factor) {
//     return function(num) {
//         return num * factor; 
//     }
// }

// const double = multiplier(2); 
// console.log(double(4)); 



// forEach

// Built-in Higher-Order Functions

// [1, 2, 3].forEach(num => console.log(num));


// Map 

// const nums = [1, 2, 3]; 
// const result = nums.map(n => n * 2); 
// console.log(result); 

// 

// const nums = [2, 4, 3]; 

// const result = nums.map((n) => {
//     return n * n; 
// })

// console.log(result);


// filter 

// const nums = [5, 10, 15, 20]; 

// const  big = nums.filter((n) => {
//     return n > 10; 
// }); 
// console.log(big); 


// 

// function applyDiscount(price) {
//     return price * 1.0; 
// }

// function calculatePrice(price, discountFn) {
//     return discountFn(price);
// }
// console.log(calculatePrice(100, applyDiscount)); 


// 





 










