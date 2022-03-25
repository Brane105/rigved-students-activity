//importing express module 
let express = require("express");
// this refers to top level functions from which you can access get , post , put delete 
let app = express();
//start the server
let PORT = 3002
app.listen(PORT,() =>{
    console.log(`Express is running at ${PORT}`)
});
//Create webservices by configuring URL and using http methods 
app.get('/',(request,response)=>{
    response.send('Requesting GET');//returns text data to the consumer
});
//Implementing POST 
app.post('/',(request,response)=>{
    response.send('Requesting POST');//Returns text data to the consumer
});
app.put('/',(request,response)=>{
    response.send('Requesting PUT');//Returns text data to the cunsumer
});
app.delete('/',(request,response)=>{
    response.send('Requesting DELETE');// returns text data to the consumer
});