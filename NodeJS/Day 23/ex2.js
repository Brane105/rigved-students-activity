let fs = require("fs"); // imports fs module
let read = require("readline-sync");

// firstly you need to assume there's is already an array in file
let data = fs.readFileSync('emp.json');
let dataString = data.toString(); // converts the byte stream to string
let jsArray = undefined;
if(dataString.length < 1 || dataString == "") {
    jsArray = []; // creating javascript array
} else {
    jsArray = JSON.parse(dataString); // json array will be converted to javascript array
}

let n = read.question('Enter name: ');
let a = read.questionInt('Enter age: ');
let emp = {name : n, age : a};
jsArray.push(emp); // pushes javascript object to javascript array
let jsonArray = JSON.stringify(jsArray); // converts javascript array to json array
// write jsonArray to the file
fs.writeFileSync("emp.json", jsonArray);
