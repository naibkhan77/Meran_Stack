// Regular Expressions - Creating & Testing 

// const fun = (name) => {
//     console.log(`Hello ${name}`);
// }
// fun(); 
// // this is function overloading in js not allowed it 
// fun(2); 
// fun("Naib");//

// 

// Default parameter / Default argument

// const fun = (name = "Guest") => {
//     console.log(`Hello ${name}`);
// }
// fun("Naib"); 


// 

// Regular Expressions 

// const str = "Mansur"; 

// const f = str.search("Mansoor"); 
// console.log(f); 

// Pattern modifier
// i -> Case-insensitive 
// g -> Golbal 
// m -> Multiple Lines   

// const f = str.search(/mansoor/i); 
// console.log(f); output is (0) working

// const f = str.search(/Mans(oo|u)r/i); 
// console.log(f); // output is (0) working

// const f = str.search(/[a-z]/i);  
// console.log(f); 

// const f = str.search(/[a-zA-Z]\w[a-zA-Z]/i);  
// console.log(f); // output (0)



///////////////


// const str = "Mansoor"; 

// const f = str.search(/[a-z]?/i); 
// console.log(f);

// const f = str.search(/M*/i); 
// console.log(f);

// const f = str.search(/M*/i); 
// console.log(f);


// ////


// const str = "17301-5185272-6"; 

// const f = str.search(/^[0-9]{5}\-[0-9]{7}\-[0-9]{1}$/i); 
// console.log(f); 






