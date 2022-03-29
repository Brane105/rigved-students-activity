const express = require("express");
const cors = require("cors");
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

//step 2 
let app = express();
//step 3 database url 
let dbURL = "mongodb://localhost:27017";
//step 4 express server port
let PORT = 8080;
//start the express server:
app.listen(PORT,() =>{
    console.log(`Server is running on ........${PORT} PORT`)
})
//middware to parse request & enable cors:
app.use(bodyParser.json());
app.use(cors());
// step 5 code for fecthing the data using |GET| Employees objects
app.get("/employee",(req,res)=>{
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client) =>{
        if(error)
        throw error;
        let db = client.db("mydb");
        let cursor = db.collection("crud").find();
        let employee = [];
        //cursor for each done by bhal aka LUCI
        cursor.forEach((doc,err) => {
            if(err)
                throw err;
            employee.push(doc);
        },() =>{
            res.json(employee);
            client.close();
        });
    });
    
});
//above code is fetching all the data from mongodb 
//step 6 Storing the doc (inserting) in the mongodb 
app.post("/employee",(req,response) =>{
    let empDoc = req.body
    //connect url, parser, callbacks 
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client) =>{
        if(error)
            throw error;
            //connect to the mydb instance
            let db = client.db("mydb");
            //user the collection "crud" to insert the document 
            db.collection("crud").insertOne(empDoc,(err,res) =>{
                if(err){
                res.status(409).json(`employee with an id ${empDoc._id} doenst exist !`)
                }
                response.status(201).json(res);
                client.close();
            })
    })
})
//{_id:15,"name": "Felix","salary":75000,"address": {"state":"KA","city":"BK","pin":400015}}
// Step 7 deleting using DELETE
app.delete("/employee/:id",(req,response) =>{
    let id = parseInt(req.params.id);
    //connect url, parser, callbacks 
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client) =>{
        if(error)
            throw error;
            //connect to the mydb instance
            let db = client.db("mydb");
            //user the collection "crud" to find and delete the document 
            db.collection("crud").deleteOne({_id:id})
            .then((doc) => {
                response.json(doc);
                client.close();
            })
           
    })
})
//Step 8 finding the particular data Using ID 
app.get("/employee/:id",(req,response) =>{
    let id = parseInt(req.params.id);
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error, client)=>{
        if(error)
        throw error;
        //use mydb instance
        let db = client.db("mydb");
        //use the collection "crud"
        db.collection("crud").findOne({_id:id})
        .then((doc) => {
            if(doc != null){
                response.json(doc);
            }else{
                response.status(404).json({"message":`Sorry ${id} doenst exist !`});
            }
            client.close();
        })
    })
})
app.post("/employee",(req,response) =>{
    let empDoc = req.body
    //connect url, parser, callbacks 
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client) =>{
        if(error)
            throw error;
            //connect to the mydb instance
            let db = client.db("mydb");
            //user the collection "crud" to insert the document 
            db.collection("crud").insertOne(empDoc,(err,res) =>{
                if(err){
                res.status(409).json(`employee with an id ${empDoc._id} doenst exist !`)
                }
                response.status(201).json(res);
                client.close();
            })
    })
})
// Step 9 updating the data using PUT request
app.put("/employee/:id/:salary",(req,res)=>{
    let id = parseInt(req.params.id);
    let salary = parseInt(req.params.salary);
    mongoClient.connect(dbURL,{useNewUrlParser:true},(error,client)=>{
        if(error)
            throw error;
        let db = client.db("mydb");
        //use the collection "user" and update
        db.collection("crud").updateOne({_id:id},{$set:{salary:salary}})
        .then((doc)=>{
            res.json(doc);
            client.close();
        })
    })
})
//the above act1js is activity no. 2 using NODEJS and MONGODB and EXPRESS exceuted CRUD operations 