console.log("Dom testing");

function result(id) {
    let marks = [10, 20, 30]; 
    return marks; 
}

let res = result(1); 
let orignal = [...res];
res[0] = 90; 
console.log(orignal); // orignal [10, 20, 30];
console.log(res); // copy [90, 20, 30];   