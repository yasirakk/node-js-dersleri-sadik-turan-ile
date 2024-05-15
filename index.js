const express = require('express');
const app = express();
const userRoutes = require('./routes/user');

app.set('view engine', 'ejs'); // view engine olarak ejs kullanacağız
app.use(express.static('public')); // public klasöründeki dosyaları kullanima acmak icin
app.use(express.static('node_modules')); // buradan Bootstrap icerisinden bir css dosyasina ulastik

app.use(userRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});


// sayfamızın linki: http://127.0.0.1:3000/