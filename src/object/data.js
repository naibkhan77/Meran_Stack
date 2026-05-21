// deep copy, shallow copy, value type/ref type, spread, rest, dest; 

// 

// copy (primitive type: number, string boolean) - value types

// let x = "js"; 
// let y = x; 
// y = "Python";

// console.log(x); 
// console.log(y);


// 

// none-primitive copy (array, object) - copy - ref types 

// shallow copy 

// let array1 = [10, 20, 30]; 
// let array2 = array1; // shallow copy
// array2[0] = 99; 
// console.log(array1);
// console.log(array2);

// 

// deep copy (hard code)

// let array1 = [10, 20, 30]; 
// let array2 = [10, 20, 30]; 
// array2[0] = 99; 
// console.log(array1); 
// console.log(array2); 



// 

// deep copy (spread operator ...) 

// let array1 = [10, 20, 30]; 
// let array2 = [...array1]; 
// array2[0] = 99; 
// console.log(array1); 
// console.log(array2); 


// 

// spread operator 

// let array1 = [10, 20, 30, 40, 50]; 
// let array2 = [...array1]; 
// console.log(array2);


// 

// spread operator object 

// let product = {
//     id: 101, 
//     title: "Mobile phone", 
//     price: 5000, 
//     stock: true
// }; 

// let copyProduct = {...product}; 
// console.log(copyProduct);

// overide 

// let product = {
//     id: 101, 
//     title: "Mobile phone", 
//     price: 5000, 
//     stock: true
// }; 

// let p = {...product, id: 102, discount: 0.10}; 

// let p = {...product, id: 102, title: "Iphone", price: 12000, discount: 1.10,}; 
// console.log(p);
// console.log(product);


// console.log(product); 
// console.log(p);


// 


// nested properties 

// let product = {
//     id: 101, 
//     title: "Mobile phone",
//     price: 490000, 
//     colors: ["White", "Black"]
// }; 

// let cp = {...product, id: 102}; 
// cp.colors = [...product.colors];

// cp.price = 909999; 

// cp.colors[0] = "Red"; 
// console.log(product);
// console.log(cp);


// 


// let product = {
//     id: 101, 
//     title: "Mobile phone",
//     price: 490000, 
//     colors: ["White", "Black"]
// }; 

// let p1 = {...product};

// p1.price = 8900; 
// p1.colors[0] = "green"; 
// console.log(p1);


// 


// let product = {
//     id: 101, 
//     title: "Mobile Phone",
//     colors: [
//         {name: "White", price: 55000}, 
//         {name: "Black", price: 50000} // 52000
//     ]
// }; 

// let cp = {...product, id: 102};

// cp.colors[1].price = 52000;
// cp.title = "New Phone";

// console.log(product); 
// console.log(cp);

// 

// using map 

// let product = {
//     id: 101, 
//     title: "Mobile Phone",
//     colors: [
//         {name: "White", price: 55000}, 
//         {name: "Black", price: 50000} // 52000
//     ]
// }; 

// let cp = {
//     ...product, id: 102, 
//     colors: product.colors.map(c => ({...c}))
// };

// cp.colors[1].price = 52000;
// cp.title = "New Phone";

// console.log(product); 
// console.log(cp);  // now the price is change 



// and this is the JSON  method to change the specific value price change

// let product = {
//     id: 101, 
//     title: "Mobile Phone",
//     colors: [
//         {name: "White", price: 55000}, 
//         {name: "Black", price: 50000}
//     ]
// }; 

// let cp = JSON.parse(JSON.stringify(product));
// cp.colors[1].price = 52000; 

// console.log(product);
// console.log(cp);



// 

// dest & rest operator (extract/delete/select) 

// let product = {
//     id: 101, 
//     title: "Mobile shop", 
//     price: 50000, 
//     stock: true 
// }; 

// let {id, price, ...rest} = product; 
// rest.title = "ABC"; 

// console.log(product);
// console.log(id);
// console.log(rest);
// console.log(product);


// 

let product = {
    id: 101, 
    title: "Mobile Phone", 
    stock: true, 
    price: {name: "Red", value: 50000}
}; 

// let {price: {value}, ...rest} = product; 
// console.log(value, rest, product);

// let {id, title, stock} = product;
// console.log(id, title, stock); 

// let {id, price: {name}, ...rest} = product;
// console.log(id, name, rest); 


// 

// function calc(x, y) {
//     let ans = {
//         sum: x + y, 
//         mul: x * y, 
//         div: x / y, 
//         avg: (x + y) / 2 
//     }

//     return ans; 
// }

// let ans = calc(10, 20); 
// console.log(ans);   
// print just avg 
// let {avg: average} = calc(10, 20); 
// console.log(average);


