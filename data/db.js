const mysql = require('mysql2');
const config = require('../config'); // burada Myskl db veditabani bilgilerim var.

let connection = mysql.createConnection(config.db);
connection.connect(function(err) {
    if (err) {
        console.log(err);
    }
    console.log('mySkl balantsi yapildi');
    
});

module.exports = connection.promise();

// db modulu uzerinden balantiyi disari acip kullanabiliyoruz