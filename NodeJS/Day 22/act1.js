let read=require('readline-sync');
let fs=require('fs');
let id=read.questionInt('Enter your id: ');
let name=read.question('Enter your name: ');
let salary=read.questionInt('Enter your salary: ');
let employee={id:id,name:name,salary:salary};
let jsonString=JSON.stringify(employee);
let data=fs.readFileSync('act1.json').toString();
if(data.endsWith('}]')==true){
    let d1=data.slice(0,(data.length-1))
    let d2=`${d1},\n${jsonString}]`
    fs.writeFileSync('act1.json',d2);
    console.log('successful...')
}else{
    let d2=`[${jsonString}]`
    fs.writeFileSync('act1.json',d2);
    console.log('successful...')
}