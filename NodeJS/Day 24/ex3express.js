let express = require('express');
let app = express();
app.listen(3003,()=>{
    console.log("Server is running on 3003")
});
app.get('/',(request,response)=>{
    response.send("Hello world this is what is get frm .get ! ");
});
app.get('/employee',(request,response)=>{
    let emp = {id:100,
               name: 'Lucifer',
               Salaray:39000
    };
    response.json(emp);// converts js object to json and returns that as a response
});
app.get('/employees',(request,response)=>{
    let employeeArray = [
        {id:100,
            name: 'Lucifer',
            Salaray:39000
        },
        {id:110,
            name: 'Asmodeous',
            Salaray:40000
        },
        {id:120,
            name: 'Bilial',
            Salaray:35600
        }
    ]
    response.json(employeeArray);
});