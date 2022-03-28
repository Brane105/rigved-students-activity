let express=require('express');
let app=express();
let fs=require('fs');
let bodyParser=require('body-parser');
let port=8080;
app.listen(port,()=>console.log(`Server is running at ${port}`));
//using CRUD Create Read Update Delete 
//body parser
app.use(bodyParser.json());
//day 22 activity using if else and fs module we read the external json file and write it in the exress server using 
//POST Create the values in express server 
app.post('/user',(request,response)=>{
    let data=fs.readFileSync('activity.json');
    let dataString=data.toString();
    if(dataString.length<1 || dataString ==""){
        jsArray=[];
    }else {
        jsArray=JSON.parse(dataString);
    }
    let content=request.body;
    jsArray.push(content);
    let jsObj=JSON.stringify(jsArray);
    fs.writeFileSync('activity.json',jsObj);
    response.send('values from the External json files are Added.')
});
//using GET we can Read the Values in USER 
app.get('/user',(request,response)=>{
    let data=fs.readFileSync('activity.json');
    let datastring=data.toString();
    let jsonObj=JSON.parse(datastring);
    response.json(jsonObj);
});
//using Get using ID we can show the PARTICULAR idividual DATA 
app.get('/user/:id',(request,response)=>{
    let id1=request.params.id;
    let data=fs.readFileSync('activity.json');
    let datastring=data.toString();
    let jsonObj=JSON.parse(datastring);
    for(let i=0;i<jsonObj.length;i++){
        if(jsonObj[i].userId==id1){
            let content={userId: jsonObj[i].userId, name: jsonObj[i].name, age: jsonObj[i].age};
            response.json(content);
        }
    }
});
//Using PUT we can Update the data in the express server as well as in the local json file 
app.put('/user/:id/:name/:age',(request,response)=>{
    let id1=request.params.id;
    let name1=request.params.name;
    let age1=request.params.age;
    let data=fs.readFileSync('activity.json');
    let dataString = data.toString();
    let jsArray = undefined;
    if (dataString.length < 1 || dataString == ""){
        jsArray = [];
    }
    else{
        jsArray = JSON.parse(dataString)
    }
    let emp = {userId:id1,name:name1,age:age1};
    jsArray.push(emp);
    let jsonArray = JSON.stringify(jsArray);
    fs.writeFileSync("activity.json",jsonArray);
    response.json(jsonArray);

});
//using the Delete we can delete the particular object from the json file and express server using only id 
app.delete('/user/:id',(request,response)=>{
    let id1=request.params.id;
    let data=fs.readFileSync('activity.json');
    let datastring=data.toString();
    let jsonObj=JSON.parse(datastring);
    for(let i=0;i<jsonObj.length;i++){
        if(jsonObj[i].userId==id1){
            jsonObj.splice(i,1);
            let jsObj=JSON.stringify(jsonObj);
            fs.writeFileSync('activity.json',jsObj);
            response.json(jsonObj);
        }
    }
});
//bhal-aka-LUCI