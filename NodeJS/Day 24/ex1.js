let http = require("http");
let url = require("url");

let PORT_NO = 3003;
http.createServer((requrest,response) => {
    if(requrest.url != '/favicon.ico'){
        let urlObject = url.parse(requrest.url,true);
        let queryParameters = urlObject.query;
        response.writeHead(200,{'content-type':'text/html'});
        response.write(`<h2>Name : ${queryParameters.name}</h2>`);
        response.end();
    }
}).listen(PORT_NO,()=>{
    console.log(`Server is running in ${PORT_NO}`);
});