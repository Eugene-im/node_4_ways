const http = require("http");
const fs = require('fs');

http.createServer(function (req, res) {
    console.log(req.body)
    if (req.url.startsWith("/public/")) {

        var filePath = req.url.substr(1);
        fs.readFile(filePath, function (error, data) {

            if (error) {
                f404(res);
            } else {
                res.setHeader("Content-Type", "text/html");
                res.end(data);
            }
        })
    } else {
        f404(res);
    }
}).listen(3000);


// variant 2

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });    


//variant 3

// const express = require('express');
// const app = express();



// app.listen(3000)

// app.get('/*', function(req,res){
// 	console.log(req.body)
// 	if (req.url.startsWith("/public/")){

// 	var filePath = req.url.substr(1);
//         fs.readFile(filePath, function(error, data){

//             if(error){
//                      f404(res);
//             }   
//             else{
//                 res.setHeader("Content-Type", "text/html");
//                 res.end(data);
//             }
//         })
// 	}else{
//  		f404(res);
// 	}
// });


// variant 4

// const https = require('https');
// const http = require('http');

// var options = {
//   key: fs.readFileSync('key/client-key.pem'),
//   cert: fs.readFileSync('key/client-cert.pem')
// };

// http.createServer(app).listen(8080);
// https.createServer(options, app).listen(4443);



function f404(res) {
    res.statusCode = 404;
    res.end("Resourse not found!");
}