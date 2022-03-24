let fs=require('fs');
let emp = fs.readFileSync('act1.json');
let jsonString=emp.toString();
let jsobj=JSON.parse(jsonString);
for(let i=0;i<jsobj.length;i++){
    let{id, name, salary}=jsobj[i];
    console.log(`Name: ${id}, Age: ${name}, Salary: ${salary}`)
}