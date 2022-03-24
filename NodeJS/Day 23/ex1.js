let fs=require('fs');
let emp = fs.readFileSync('ex1.json');
let jsonString=emp.toString();
let jsobj=JSON.parse(jsonString);
for(let i=0;i<jsobj.length;i++){
    let{id,name}=jsobj[i];
    console.log(`id: ${id}, name: ${name}`)
}