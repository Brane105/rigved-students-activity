//importing express and body-parser 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
// parse the application - json 
app.use(bodyParser.json());
//server
app.listen(8080,() =>{
    console.log('Server started on port 8080...');
});
//database collections :
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root', //MySQL User 
    password: 'root', //MySQL Password 
    database: 'employeedb' // MySQL Database 
  });
//MySQL connect
conn.connect((err) =>{
    if(err) throw err;
    console.log('Mysql Connected with App...');
  });
     
// fetching the data from mySQl 
app.get('/employee',(req, res) => {
let sqlQuery = "SELECT * FROM t1";

let query = conn.query(sqlQuery, (err, results) => {
    if(err) 
    throw err;
    res.send((results));
});
});

//get Single item using particular id done by bhal aka LUCI
app.get('/employee/:id',(req, res) => {
    let sqlQuery = "SELECT * FROM t1 WHERE id=" + req.params.id;
      
    let query = conn.query(sqlQuery, (err, results) => {
      if(err) throw err;
      res.send((results));
    });
});
//creating new data in the table 
app.post('/employee',(req, res) => {
    let data = {id: req.body.id,name: req.body.name, salary: req.body.salary};
    
    let sqlQuery = "INSERT INTO t1 SET ?";
    
    let query = conn.query(sqlQuery, data,(err, results) => {
      if(err) throw err;
      res.send((results));
    });
});
//updating the pre saved data
app.put('/employee/:id',(req, res) => {
    let sqlQuery = "UPDATE t1 SET salary='"+req.body.salary+"', name='"+req.body.name+"' WHERE id="+req.params.id;
    
    let query = conn.query(sqlQuery, (err, results) => {
      if(err) throw err;
      res.send((results));
    });
  });
//Delete the data using delete method 
app.delete('/employee/:id',(req, res) => {
    let sqlQuery = "DELETE FROM t1 WHERE id="+req.params.id+"";
      
    let query = conn.query(sqlQuery, (err, results) => {
      if(err) throw err;
        res.send((results));
    });
  });
//using CRUD operations we done with activities by bhal aka LUCI