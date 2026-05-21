// What is an Object in JavaScript?
// An Object is just a container that stores related data and behavior. 


// const Person = {
//     name: "Ali", 
//     age: 18, 
//     greet: function() {
//         console.log("I am working right now!");
//     }
// }
// // Accessing Values 
// console.log(Person.name);
// Person.greet(); 

// Imagine you need 100 users:
// const user1 = { name: "Ali", age: 18 };
// const user2 = { name: "Ahmed", age: 20 };
// const user3 = { name: "Sara", age: 17 };

// This gets repetitive.
// We need a template → that's where classes come in.

// 

// What is a Class?
// A class is like a blueprint for creating objects.

// What is Constructor
// The constructor is a special function inside a class.

// class Person{ 
//     constructor(name, age) {
//         this.name = name; 
//         this.age =  age; 
//     }
//     greet() {
//         console.log("Hello, my name is " + this.name);
//     }
//     greet1() {
//         console.log("Hi, my name is " + this.name);
//     }
// }

// const man = new Person("Zain", 22);
// console.log(man);
// const man2 = new Person("Ali", 21); 
// console.log(man2);



// 

// Function binding vs wrapper function (closure)

// const user = {
//     name: "Ali", 
//     greet() {
//         return `Hi I'm ${this.name}`;
//     }
// }; 

// // console.log(user.greet());    

// const greetBond = user.greet.bind(user);
// console.log(greetBond()); 

// // Arrow function wrapper
// const greetArrow = () => user.greet(); 
// console.log(greetArrow());



// 

// Implicit Binding

// const user = {
//     name: "Ali", 
//     age: 23,
//     greet() {
//         return `Hi I'm ${this.name} my age is ${this.age}`;
//     }
// }; 

// console.log(user.greet());


// 

// Explicit Binding (call, apply, bind)

// const user = {name: "Ali"}; 

// function greet() {
//     return `Hi I'm ${this.name}`; 
// }

// console.log(greet.call(user));


// 

// new Binding

// function User(name) {
//     this.name = name; 
// }

// const u1 = new User("Ali");
// console.log(u1); 

// 

// Arrow Function Binding

// const user = {
//     name: "Ali", 
//     greet: () => `Hi I'm ${this.name}`
// };

// console.log(user.greet());


// 

// ES6 Classes 

// class User {
//     constructor(name) {
//         this.name = name; 
//     }
//     greet() {
//         return `Hi I'm ${this.name}`;
//     }
// }

// const res = new User("Zain");
// console.log(res); 


//

// Inheritance (extends)

// class Animal {
//     speak() {
//         return "Animal makes sound"; 
//     }
// }

// class Dog extends Animal {
//     break() {
//         return "Woof!"; 
//     }
// }

// class Cat extends Animal {
//     sound() {
//         return "Meaawo";
//     }
// }

// const d = new Dog(); 
// const c = new Cat();
// console.log(d.speak()); 
// console.log(d.break());
// console.log(c.sound());



// 












