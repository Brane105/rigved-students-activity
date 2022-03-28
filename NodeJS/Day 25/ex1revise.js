let express = require("express");
let app = express();
let PORT = 3001;
app.listen(PORT, () => {console.log(`Express server running at ${PORT}`)});

app.get('/employee', (req, res) => {
    
    res.json({"id":100, "name":"Raj"});
    
});