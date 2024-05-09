var http = require('http'); // node modullerinden biri\ onun ile birlikte geldi
var fs = require('fs'); // node modullerinden biri\ onun ile birlikte geldi/ dosya okuma ve yazma icin kullanilirstart



var server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            res.write(data)
            res.end();
        });

    } else if(req.url === '/urunler') {
        fs.readFile('urunler.html', (err, data) => {
            res.write(data)
            res.end();
        });
    } else{
        fs.readFile('404.html', (err, data) => {
            res.write(data)
            res.end();
        });    
    }
});

server.listen(3000, () => {
    console.log('node.js server at 3000 port');
});
