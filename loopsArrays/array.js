// Array literal notation 

// const fruit = ["Apple", "Banana"];
// console.log(fruit.length); // 2


//

// Array constructor with multiple parameters

// const fruit = new Array("Apple", "Banana");
// console.log(fruit.length);
// console.log(fruit[1]);



// 
// Instance methods 
// Array prototype at() 
// AT Returns the item located at the specified index.

// const array = [5, 12, 8, 130, 44]; 

// let index = 4; 

// console.log(`An index of ${index} returns ${array.at(index)}`); 

// let index = -2; 

// console.log(`An index of ${index} returns ${array.at(index)}`);



// 
// concat methods 

// const array1 = ["a", "b", "c"]; 
// const array2 = ["d", "e", "f"]; 
// const array3 = array1.concat(array2); 

// console.log(array3); 


// 

// Concatenating two arrays

// const letters = ["a", "b", "c"];
// const numbers = [1, 2, 3]; 

// const alphaNumeric = letters.concat(numbers);
// console.log(alphaNumeric);


// 

// Concatenating three arrays

// const num1 = [1, 2, 3]; 
// const num2 = [4, 5, 6]; 
// const num3 = [7, 8, 9]; 
// const numbers = num1.concat(num2, num3);

// console.log(numbers);


// 

// const letters = ["a", "b", "c"]; 
// const alphaNumeric = letters.concat(1, [2, 3]);

// console.log(alphaNumeric);


// 

// Concatenating nested arrays

// const num1 = [[1]];
// const num2 = [2, [3]];
// const numbers = num1.concat(num2); 

// console.log(numbers); 

// modify the first element fo num1 

// num1[0].push(4); 

// console.log(numbers);

// console.log([1, , 3].concat([4, 5]));



// 

// CopyWithin 
// copyWithin(target, start)
// copyWithin(target, start, end)


// const array = ["a", "b", "c", "d", "e"]; 
// console.log(array.copyWithin(0, 2, 3));


// console.log([1, 2, 3, 4, 5].copyWithin(2));



// 

// Entries 

// const array = ["a", "b", "c"];
// const iterator = array.entries();

// console.log(iterator.next().value);
// console.log(iterator.next().value);


// 



// 
// Every 

// const isBelowTreshold = (currentValue) => 
//     currentValue < 40; 
// const array1 = [1, 30, 49, 29, 10, 13];

// console.log(array1.every(isBelowTreshold));



//
// fill() 

// const array = [1, 2, 3, 4]; 
// console.log(array.fill(0, 2, 4));
// console.log(array.fill(5, 1));
// console.log(array.fill(6));


// 

// console.log([1, 2, 3].fill(4));
// console.log([1, 2, 3].fill(4, 1)); 
// console.log([1, 2, 3].fill(4, 1, 2)); 
// console.log([1, 2, 3].fill(4, 3, 3));
// console.log([1, 2, 3].fill(4, -3, -2));
// console.log([1, 2, 3].fill(4, NaN, NaN));

// const arr = Array(3).fill({}); 
// console.log(arr);

// arr[0].hi = "hi";
// console.log(arr);

// 

// Using fill() to create a matrix of all 1

// const arr = new Array(3); 

// for(let i = 0; i < arr.length; i++) {
//     arr[i] = new Array(4).fill(1); 
// }
// arr[0][0] = 10; 
// console.log(arr[0][0]);



// 
// Filter() 


// const words = ["spray", "elite", "exuberant", "destruction", "present"]; 

// const result = words.filter((word) => word.length < 6); 

// console.log(result);


// 

// function isBigEnough(value) {
//     return value >= 10; 
// }
// const filtered = [12, 5, 8, 111, 88].filter(isBigEnough);

// console.log(filtered);



// 
// find() 

// const array = [5, 8, 120, 44]; 

// const found = array.find((element) => element > 10); 

// console.log(found);



//
// findIndex

// const array = [5, 12, 8, 130, 44];

// const isLargerNumber = (element) => element > 13; 
// console.log(array.findIndex(isLargerNumber)); // 3


// findLast(); 

// const array = [5, 12, 50, 130, 44];
// const found = array.findLast((element) => element > 45);
// console.log(found); // 130  


// 

// findLastIndex() 

// const array = [5, 12, 50, 130, 44];

// const isLargerNumber = (element) => element > 45; 
// console.log(array.findLastIndex(isLargerNumber)); // 3



// 
// flat(); 

// const arr1 = [0, 1, 2, [3, 4]]; 
// console.log(arr1.flat());  // [ 0, 1, 2, 3, 4 ]

// const arr2 = [0, 1, [2, [3, [4, 5]]]]; 
// console.log(arr2.flat()); 
// console.log(arr2.flat(2));
// console.log(arr2.flat(Infinity));  // [ 0, 1, 2, 3, 4, 5 ]



// 

// forEach(); 

// const fruits = ["Apple", "Banana", "Mango"];

// fruits.forEach((fruit, arr) => {
//     console.log(`${fruit} from index positon: ${arr}`);
// })


// 

// const array = ["a", "b", "c"];

// array.forEach((a, b) => {
//     console.log(`${a} index is position: ${b}`); 
// })


// 

// const ratings = [5, 4, 5]; 
// let sum = 0; 

// const sumFunction = async (a, b) => a + b; 

// ratings.forEach(async (rating) => {
//     sum = await sumFunction(sum, rating);
// }); 

// console.log(sum); // output is 14 but now this is not working I din't installed node here 


// 


// const items = ["item1", "item2", "item3"];
// let copyItems = []; 

 
// for(let i = 0; i < items.length; i++) {
//     copyItems.push(items[i]); 
// }

// items.forEach((item) => {
//     // copyItems.push(item);
//     console.log(copyItems.push(item));
// })

// console.log(copyItems);


// 

// includes() 

// const array = [1, 2, 3];

// console.log(array.includes(2));

// const arr1 = ["Cat", "Bat", "Ball"]; 
// console.log(arr1.includes("Cat")); // true
// console.log(arr1.includes("Banana")); // flase



//

// indexOf(); 

// const beasts = ["ant", "bison", "camel", "duck", "bison"];

// console.log(beasts.indexOf("duck"));  // 3
// console.log(beasts.indexOf("giraffe"));  // -1

// console.log(beasts.indexOf("bison", 2)); 



// 
// key(); 

// const array = ["after", "banana", "camel"]; 

// const iterator = array.keys();

// for(const key of iterator) {
//     console.log(key); // 0, 1, 2
// }

// for(const key of array) {
//     console.log(key); // after, banana, camel 
// }


// 

// for .keys(), .values(), and .entries() so it’s easy to remember

// const array = ["apple", "banana", "cherry"];

// for(const k of array.keys())
    // console.log(k);  // 0. 1. 2

// for(const k in array) 
//     console.log(k); // same output; 

// for(const k of array.values()) 
//     console.log(k);


// for(const [i, v] of array.entries()) 
//     console.log(i, v); 
// output:  0 apple, 1 banana,  2 cherry




//

//  map() // map have a call back funciton;  

// const array = [1, 4, 9, 16];

// const mepped = array.map((x) => x * 2); 
// console.log(mepped);

// 

// const numbers = [1, 4, 9]; 
// const roots = numbers.map((num) => Math.sqrt(num)); 
// console.log(roots); // square root is 1, 2, 3



// 
// pop() // remove the last element form the array 

// const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

// console.log(plants.pop()); 
// console.log(plants);



// 
// push() 


// const animals = ["pigs", "goats", "sheep"];

// const count = animals.push("crows"); 
// console.log(count);  // 4
// console.log(animals); 


// const sports = ["soccer", "baseball"];

// const total = sports.push("football", "swimming"); 

// console.log(sports);


// 

// Merging two arrys 

// const vegetables = ["parsnip", "potato"]; 
// const moreVegs = ["celery", "beetroot"]; 

// vegetables.push(...moreVegs); 
// console.log(vegetables); 



// 

// slice(); 

// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.slice(2)); // [ 'camel', 'duck', 'elephant' ]
// console.log(animals.slice(2, 4)); // [ 'camel', 'duck' ]



// 
// sort() 

// const months = ["March", "Jan", "Feb", "Dec"];

// months.sort(); 
// console.log(months);


// const array = [1, 30, 4, 21, 100000];

// array.sort(); 
// console.log(array); 


// 

// toString  

// const array = [1, 2, "a", "1a"];

// console.log(array.toString()); 


const matrix = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9],
]; 

console.log(matrix.toString()); 


















