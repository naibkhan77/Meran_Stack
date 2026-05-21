// if statement 

// if-else, nested if, multiple if-else

// let marks = 9; 
// console.log(marks);
// if(marks >= 50) 
//     console.log("Pass"); 
// else
//     console.log("Fail");


// 

// for multiple condition we use  {this bracket}

// let marks = 90; 

// if(marks >= 50) {
//     console.log("pass"); 
//     console.log("congratulation"); 
// } 
// else {
//     console.log("Fail"); 
// }

// console.log("Try again");  // un-conditional statement


// 
// this is un-conditional statement

// let marks = 99; 
// console.log(marks); 

// if(marks >= 50) 
//     console.log("Pass"); 
// else (marks < 49); 
//     console.log("Fail");


// 

// Levels 10% 15% 20%  

// let amount = 11000; 

// if(amount >= 20000)
//     console.log("Discount 20%= ", amount * 0.2); 
// else if(amount >= 15000) 
//     console.log("Discount 15%= ", amount * 0.15); 
// else if(amount >= 10000) 
//     console.log("Discount 10%= ", amount * 0.10); 
// else 
//     console.log("Opps No Discount"); 



// 


// let amount = 11000; 

// if(amount >= 10000 && amount < 15000)
//     console.log("Discount 10% = ", amount * 0.10); 
// else if(amount >= 15000 && amount < 20000) 
//     console.log("Discount 15% = ", amount * 0.15); 
// else if(amount >= 20000) 
//     console.log("Discount 12% = ", amount * 0.10); 
// else 
//     console.log("Opps No Discount"); 


// 

// let a = 10; 

// if(a === 10) 
//     console.log("True 1"); 
// else if (a === 10) 
//     console.log("True 2"); 
// else if(a === 10) 
//     console.log("True 3"); 

// console.log("Done");



// 

// if else condition one condition is true the other will not cheack 

// let a = 10; 
// let b = 20; 

// if(a === 10) 
//     console.log("True 1"); 
// else if (b === 20) 
//     console.log("True 2"); 
// else if(a === 10) 
//     console.log("True 3"); 

// console.log("Done");



// 

// let marks = 99; 
// console.log(marks); 

// if(marks >= 50 && marks <= 60) 
//     console.log("Pass Grade C"); 
// else if (marks >= 60 && marks <=70)
//     console.log("Pass Grade B");
// else if (marks >= 80 && marks <= 99)
//     console.log("Pass Grade A");
// else 
//     console.log("Fail");



// 

// Nested if else 


// let amount = 22000; 
// let member = true; 

// if(amount >= 20000){
//     if (member === true) 
//         console.log("Discount 20% = ", amount * 0.25)
//     else
//         console.log("Discount 20%= ", amount * 0.2); 
// }
// else if(amount >= 15000) 
//     console.log("Discount 15%= ", amount * 0.15); 
// else if(amount >= 10000) 
//     console.log("Discount 10%= ", amount * 0.10); 
// else 
//     console.log("Opps No Discount"); 


// 

// const age = 2; 
// const hasID = false; 

// if(age >= 18) {
//     console.log("Age verified");
// }
// else if(hasID) {
//     console.log("ID verified");
// }
// else 
//     console.log("Your age and Id is not Verified");



// 


/////////// Switch //////////// 

// switch → best for exact matches
// if...else → best for complex conditions


// const department = "Computer Science";

// switch (department) {
//     case "Computer Science": 
//             console.log("CS - Building 4");
//             break; 
//     case "Management Science": 
//             console.log("Ma - Building 5");
//             break;
//         default: 
//             console.log("Unknow department");
// }


// 

// days examples 

// let days = 1; 

// switch (days) {
//     case 1: 
//         console.log("Mondy");
//         break; 
//     case 2: 
//         console.log("Tuesday");
//         break; 
//     case 3: 
//         console.log("Wednesday");
//         break; 
//     default: 
//         console.log("Invalid day");
// }



// 

// const seats = 0; 
// if(seats === 0) 
//     console.log("No Data")
// else 
//     console.log(seats);



// 

// By-default in js this is flasy value

// 0
// ""        
// null
// undefined
// false
// NaN

// && returns the first falsy OR the last truthy value

// const seats = 0; 
// console.log(seats && "No Data");


// 

// Nullesh

// const seat = 0; 
// console.log(seat ?? "No Data");


// let x = undefined; 
// const seats = x ?? "Not a Variable"; 

// console.log(seats);



// 

// ?. show message undefined (safe)


// let student = {
//     permanent_address: {
//         city: "Lahore",
//         location: "Pakistan" 
//     }
// }

// const city = student.address.city; 
// console.log(city);

// this is the logic behind we print proper message for error 
// const city = student.address?.city ?? "City not Available";
// console.log(city);



// 






















