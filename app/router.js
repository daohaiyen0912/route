const fs = require('fs');
const url = require('url');

function onRequest(req, res) {
    const path = url.parse(req.url).pathname;

    if(path == '/') {
        fs.readFile('./get.html', (err, data) => {
            if(err) {
                res.writeHead(404);
                res.write('File not found');
            } else {
                res.write(data);
            }
            res.end();
        }
        )
    } else if(path == '/update') {
        fs.readFile('./update.html', (err, data) => {
            if(err) {
                res.writeHead(404);
                res.write('File not found');
            } else {
                res.write(data);
            }
            res.end();
        }
        )
    }
}

module.exports.onRequest;