// Loops Iteration Patterns & Array Fundamentals 

// Array is collection of  value 


// baisc counting Templates strings 

// for(let shelf = 1; shelf <=5; shelf++) {
//     console.log(`Shelf ${shelf}: checked`);
// }

// let suppose we use this for smart and easy way 

// let x = 10; 
// console.log("the x value is  = " + x); 
// console.log(`the x value is = ${x ** 2}`);



// 

// Accumulater pattern 

// 1 + 2 + 3 + ... + 50; 

// let sum = 0; 
// for(let i = 0; i <= 50; i++) {
//     sum += i; 
// }
// console.log(`Sum = ${sum}`);


// 


// let totalValue = 0; 
// for(let i = 1; i <= 5; i++) {
//     const price = i * 100; 
//     totalValue += price; 
// }
// console.log(`Total: Rs. ${totalValue}`); 

// 100
// 200 
// 300 
// 400 
// 500 
// which  is 1500 total ans 


// 

//  Iterating arrays 

// const products = ["Laptop", "Mouse", "Keyboard"]; 

// for(let i = 0; i < products.length; i++){
// console.log(`${i + 1}. ${products[i]}`); 
// }



// 

// white search untail found 

// const target = "Moniter"; 
// let searchIndex = 0; 
// const warehouse = ["Laptop", "Mouse", "Keyboard", "Moniter", "Webcom"]; 

// while(searchIndex < warehouse.length) {
//     if (warehouse[searchIndex] === target) {
//         console.log(`Found "${target}" at position ${searchIndex}`);
//         break; 
//     }
//     searchIndex++; 
// }



// 

// let serachIndex = 0; 

// const target = "Keyboard";
// const warehouse = ["Laptop", "Mouse", "Keyboard", "Moniter", "Webcom"]; 

// for(let i = 0; i < warehouse.length; i++) {
//     if(warehouse[i] === target) {
//         console.log(`Found "${target}" at position ${i}`);
//     }
// }


// 

// stock depletion simulation 

// let stock = 25; 
// let day = 1; 

// while (stock > 0) {
//     const sold = Math.floor(Math.random() * 8) + 1; 
//     stock = Math.max(0, stock - sold);
//     console.log(`Day ${day}: sold Sold ${sold} -> ${stock} remaining`);
//     day++; 
// }


// 

// continue skip current iteration keep going;  

// const inventory = [
//     {name: "Laptop", stock: 12}, 
//     {name: "Mouse", stock: 0}, 
//     {name: "Keyboard", stock: 23}
// ]; 

// for(let i = 0; i < inventory.length; i++) {
//     if(inventory[i].stock === 0) {
//         continue;
//     }
//     console.log(`${inventory[i].name}: ${inventory[i].stock} units`);
// }


// 

// how this continue is working 

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     if(i === 5)
//         break; 
//     // continue; // this is how break and continue is working
// }



// 

// cross-checking  two list 

// const warehouseItems = ["Laptop", "Mouse", "Keyboard", "Moniter"]; 
// const orderItems = ["Mouse", "Tablet", "Keyboard"]; 

// for(let o = 0; o < orderItems.length; o++) {
//     let found = false; 
//     for(let w = 0; w < warehouseItems.length; w++) {
//         if(orderItems[o] === warehouseItems[w]) {
//             found = true; 
//             break; 
//         }
//     }
//     // if(found) {
//     //     console.log(orderItems[o] + " - Available");
//     // } else 
//     //     console.log(orderItems[o] + " - Not Available");

//     console.log(`"${orderItems[o]}" - ${found ? "Available" : "Not in warehouse"}`);
// }


// 

// const warehouseItems = ["Laptop", "Mouse", "Keyboard", "Moniter"]; 
// const orderItems = ["Mouse", "Tablet", "Keyboard"]; 

// const commonItems = []; 

// for(let i = 0; i < warehouseItems.length; i++) {
//         for(let j = 0; j < orderItems.length; j++){
//             if(warehouseItems[i] === orderItems[j]) {
//                 commonItems.push(warehouseItems[i]);
//             }
//         }
// }
// console.log(commonItems);



// 
// for of and for in 

//  Difference 

// for..of -> value; 
// for..in -> index/key; 

// const items = ["Laptop", "Mouse", "Keyboard"]; 

// for(let item of items) {
//     console.log(item);
// }

// they both are same working 

// for(let i = 0; i < items.length; i++) {
//     console.log(items[i]);
// }


// 

// const items = ["Laptop", "Mouse", "Keyboard"]; 

// for(let i in items) {
//     console.log(i, items[i]); 
// }

// the different

// for(let i in items) {
//     console.log(items); 
// }


// 
                     //  key:  "value"
// const productDetails = {name: "Laptop", price: 89999, stock: 14}; 

// // console.log(productDetails.length); // output shoud be ( undefined )

// for(const key in productDetails) {
//     console.log(`${key}: ${productDetails[key]}`);
// }


// 

// when you need just value;

// const items = ["Laptop", "Mouse", "Keyboard"]; 

// for(const item of items) {
//     console.log(item); 
// }


// 

// Array - Creating & Accessing; 

// const products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Webcam"]; 

// console.log(products[0]); 
// console.log(products[products.length -1]); // output:  Webcam    
// console.log(products.at(-1));  // same output; 
// console.log(products[99]); // undefined; 


// 


// array important methods 
// array methods - Mutating changes original    

// const products = ["Laptop", "Mouse", "Keyboard"]; 

// products.push("Headphones"); 
// console.log(products); 

// remove from end; 
// products.pop(); 
// console.log(products); 

// unshift - add to start 
// products.unshift("Rounter"); 
// console.log(products); 

// shift - remove from start; 
// products.shift(); 
// console.log(products);

// splice - Insert Remove, or Replace at any position; 
// products.splice(2, 1); // remove it index 2 ;
// console.log(products); 

// products.splice(1, 0, "Tablet"); // insert at index 1
// console.log(products); 

// splice - replace at index 1
// products.splice(1, 1, "Wireless Mouse"); 
// console.log(products); 



//

// Array Methods - Non-Mutating (Original unchanged); 

// const products = ["Laptop", "Mouse", "Keyboard", "Moniter", "Webcam"]; 

// concat - merge array (returns new array); 
// const accessories = ["USB Cable", "Mouse Pad"]; 
// const fullCatalog = products.concat(accessories); 
// console.log(fullCatalog); 

// slice - extract portion (start inclusive, end exclusive) 
// const topThree = products.slice(0, 3);
// console.log(topThree); 

// const lastTwo = products.slice(-2); 
// console.log(lastTwo);

// indexOf - find position (-1 if not found) 
// const position =  products.indexOf("Moniter"); 
// console.log(position);  // 3

// includes - check existence (returns boolean)
// const i =  products.includes("Laptop");
// console.log(i);  // true 

// const a = products.includes("Naib"); 
// console.log(a); // false; 


// 

// Array Destructuring Preview; 




 











