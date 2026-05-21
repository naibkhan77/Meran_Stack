// Callback function, passed as a parameter in the higher order function

// function callbackFunction() {
//     console.log("I am a callback function"); 
    
// }

// function higherOrderFunction(func){
//     console.log("I am a Higher order function");
//     func()
// }
// // callbackFunction -> passed as value 
// // func -> receives it
// // func() -> run it
// higherOrderFunction(callbackFunction);


// 

// const users = [
//     {firstName: 'John', lastName: 'Doe', age: 25},
//     {firstName: 'Jane', lastName: 'Doe', age: 30},
//     {firstName: 'Jack', lastName: 'Doe', age: 35},
//     {firstName: 'Jill', lastName: 'Doe', age: 40},
//     {firstName: 'Joe', lastName: 'Doe', age: 45},
// ]

// const result = users.map((users) => users.firstName + ' ' + users.lastName + ' ' + users.age); 
// console.log(result);

// using Backticks ``  

// const result = users.map((users) => {
//     return `${users.firstName}: ${users.lastName}: ${users.age}`; 
// })

// console.log(result);

 

// filter

// const arr = [1, 2, 3, 4, 5];

// const result = arr.filter((num) => {
//     return num % 2;
// })
// console.log(arr);
// console.log(result); 


// 


// const users = [
//     {firstName: 'John', lastName: 'Doe', age: 25},
//     {firstName: 'Jane', lastName: 'Doe', age: 30},
//     {firstName: 'Jack', lastName: 'Doe', age: 35},
//     {firstName: 'Jill', lastName: 'Doe', age: 40},
//     {firstName: 'Joe', lastName: 'Doe', age: 45},
// ]

// this is called Distructuring {age} or {firstName} 

// const output = users.filter(({age}) => age > 30)
// console.log(output);

// const result = users.filter((users) => users.age > 30) 
// console.log(result);


// 

// reduce() 


// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((total, currentValue) => {
//     return total + currentValue;
// }, 0); 

// console.log(sum);


// 

// let numbers = [5, 20, 100, 60, 1];

// const maxValue = numbers.reduce((max, curr) => {
//     if(curr > max) max = curr; 
//     return max; 
// }); 

// console.log(maxValue); 


// 

// let numbers = [5, 20, 100, 60, 1];

// const mimValue = numbers.reduce((min, max) => {
//     if(max < min) min = max; 
//     return min;  
// })

// console.log(mimValue);


// 


// const shoppingCart = [
//     {name: 'Apple', price: 1.99, quantity: 3},
//     {name: 'Apple', price: 1.99, quantity: 3},
//     {name: 'Xiomi', price: 2.99, quantity: 2},
//     {name: 'Samsung', price: 3.99, quantity: 1},
//     {name: 'Tesla', price: 3.99, quantity: 1},
//     {name: 'Tesla', price: 4.99, quantity: 4},
//     {name: 'Nokia', price: 4.99, quantity: 4},
// ]

// const result = shoppingCart.filter((product) => {
//     return product.price > 2.99; 
// })
// console.log(result); 


// const products = shoppingCart.reduce((productGroup, product) => {
//     const name = product.name;
//     if(productGroup[name] == null) {
//         productGroup[name] = [];
//     }
//     productGroup[name].push(product);

//     return productGroup;
// }, {});

// console.log(products);


// 


// let y = 5;

// function scop() {
//     let x = 10; 
//     console.log(x);
//     console.log(y);
//     console.log(z);
// }
// console.log(x);
// scop(); 


// 

// let y = 30;

// function scop() {
//     let x = 10; 
//     {
//         let y; 
//         if(x > 5) {
//             let y = 20; 
//             console.log(y);
//         }
//         console.log(y);
//     }
//     console.log(y);
// }
// scop();
// scop(); 
// scop(); 


























