const http = require('http');
const fs = require('fs');
const url = require('url');
const express = require('express');

const app = express();

const router = require('./app/router');

const port = 6969;

app.get('/', function(req, res) {
    fs.readFile('./get.html', (err, data) => {
        if(err) {
                res.writeHead(404);
                res.write('File not found');
            } else {
                res.write(data);
                let reqObj = {
                    "status": "OK",
                    "data": [1, 2, 3]
                }
                console.log(reqObj);
            }
            res.end();
        }
        )
    }) 

app.get('/update', function(req, res) {
    fs.readFile('./update.html', (err, data) => {
        if(err) {
                res.writeHead(404);
                res.write('File not found');
            } else {
                res.write(data);
                let reqObj = {
                    "status": "OK",
                    "data": req.body
                }
                
            }
            console.log(express);
            res.end();
        }
        )
    }) 



app.listen(port, () => {
    console.log('Example app listening at http://localhost:' + port);
})