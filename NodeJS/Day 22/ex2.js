let read = require("readline-sync");
let id = read.questionInt("Enter your ID : ");
let name = read.question("Enter your name : ");
let salary = read.questionInt("Enter your Salary : ");
console.log(`id : ${id}, name : ${name}, salary : ${salary}`);
