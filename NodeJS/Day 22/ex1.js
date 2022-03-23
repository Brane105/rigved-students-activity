console.log("Hello World!");
let firstname = "Alex"
console.log(`Hello ${firstname}`)

//this second examples

let x = 20;
let y = 30;
let z = x+y;
console.log(`z : ${z}`);
setTimeout(() =>{
    console.log('inside callback');
},0); //timeout is 0 sec 
console.log('end of program')