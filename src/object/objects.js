// Objects 
// An Objects is a collection of key-value pairs, 

// 

// const person = {
//     name: "Ali", 
//     age: 23, 
//     isStudent: true
// }; 

// Here . name,age,isStudent -> Keys
// . Ali,23, true -> values 



//


// const user1 = {
//     name: "Ali khan", 
//     email: "ali@gmail.com", 
//     role: "admin", 
//     // If you don’t want to use this, then you must pass values as parameters:
//     greet(name, role) {
//         return "Hello " + name + " role " + role; 
//     }
// }

// console.log(user1.greet(user1.name, user1.role));



// 


// const user1 = {
//     name: "Ali khan", 
//     email: "ali@gmail.com", 
//     role: "admin", 
//     greet() {
//         return `Hi, I'm ${this.name} and my position is ${this.role}`; 
//     }
// }

// console.log(user1.greet());
// // console.log(user1.name); 

// const user2 = {
//     name: "Zain khan", 
//     email: "zain@gmail.com", 
//     role: "admin2", 
//     mobile: "02359840072", 
//     greet() {
//         return `Hi, I'm ${this.name} and my position is ${this.role}`; 
//     }
// }

// console.log(user2.greet());
// console.log(user2.mobile); 



// 

// Objects with Functions (Methods) 

// const user = {
//     name: "Naib", 
//     age: 23, 
//     greet: function() {
//         // return "Hello " + this.name + this.age; 
//         return `Hello My name is ${this.name} and I am ${this.age} year old`;
//     }
// }; 

// console.log(user.greet()); 


// 


// Nested Objects

// const student = {
//     name: "Naib", 
//     age: 23, 
//     address: {
//         city: "Hangu", 
//         zip: 43339
//     }
// }; 

// console.log(student.name); 
// console.log(student.address.city)
// console.log(student.name, student.address.city);



// 

// Factory Pattern

// function createUser(name, email, role) {
//     return{
//         name, 
//         email, 
//         role, 
//         department: "IT", 
//         greet() {
//             return `Hi I'm ${this.name} and my role is ${this.role} my email is ${this.email} ${this.department}`;
//         }
//     }
// }; 

// const user1 = createUser("Ali Khan", "Ali@gmail.com", "admin");
// const user2 = createUser("Zain Khan", "zain@gmail.com", "admin");
// const user3 = createUser("Asim Khan", "asim@gmail.com", "admin");

// console.log(user1.greet()); 
// console.log(user2.greet()); 
// console.log(user3.greet()); 



// 


// Create different types of users


// function createUser(type, name) {
//     if(type === "admin") {
//         return {
//             name: name, 
//             role: "admin", 
//             permissions: ["read", "write", "delete"]
//         }; 
//     } 
//     else if (type === "guest") {
//         return {
//             name: name, 
//             role: "guest", 
//             permissions: ["read"]
//         }; 
//     }
//     else {
//         return {
//             name: name, 
//             role: "user", 
//             permissions: ["read", "write"]
//         }; 
//     }
// }
// Usage 

// const user1 = createUser("guest", "Ali"); 
// const user2 = createUser("user", "Sara"); 

// console.log(user1); 
// console.log(user2);



// 

// constructor function 

// function User(userName, email, role) {
//       this.name = userName; 
//       this.email = email; 
//       this.role = role; 
// }

// const user1 = new User("Ali Khan", "Ali@gmail.com", "admin");
// console.log(user1);
// const user2 = new User("Zain Khan", "zain@gmail.com", "admin");
// console.log(user2);


// 

// What is a Constructor Function?
// A constructor function is just a regular function with a convention:

// function Person(name, age) {
//     this.name = name; 
//     this.age = age; 
// }
// const p1 = new Person("Ali", 10); 
// const p2 = new Person("Zain", 12); 
// console.log(p1.name); 



// 

// Adding Methods
// You can add methods inside the constructor:

// function Car(brand){
//     this.brand = brand; 
//     this.start = function() {
//         return this.brand + "started"; 
//     }; 
// }
// const myCar = new Car("Toyota "); 
// console.log(myCar.start()); 



// 

// function Car(brand) {
//     this.brand = brand; 
// }

// Car.prototype.start = function() {
//     return this.brand + " started"; 
// }

// const a = new Car("My car to working now"); 
// console.log(a); 



////

// Latest version  ES6 Classes 

// class User {
//     constructor(userName, email, role) {
//         this.name = userName; 
//         this.email = email; 
//         this.role = role;
//     }

//     greet() {
//         return `Hi, I'm ${this.name} ${this.role}, my email is ${this.email}`; 
//     }

//     greet1() {
//         return `Hi, I'm ${this.name} ${this.role}, my email is ${this.email}`;
//     }
// }
// const user1 = new User("Ali Khan", "ail@09.com", "admin"); 
// console.log(user1); 
// console.log("-----------"); 
// const user2 = new User("Zain", "Zain@00.com", "admin"); 
// console.log(user2);



//////




































