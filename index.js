const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // view engine olarak ejs kullanacağız
app.use(express.static('public')); // public klasöründeki dosyaları kullanima acmak icin
app.use(express.static('node_modules')); 

const urunTablosu = [
    {
        id: 1,
        isim: 'Telefon',
        fiyat: 1000,
        isActive: true,
        imageUrl: 'telefon-foto.jpg',
    },
    {
        id: 2,
        isim: 'Kamera',
        fiyat: 2000,
        isActive: true,
        imageUrl: 'kamera-foto.jpg',

    },
    {
        id: 3,
        isim: 'Klavye',
        fiyat: 3000,
        isActive: true,
        imageUrl: 'klavye-foto.jpg',
    }
];

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/urunler/:id', (req, res) => {
    const urun = urunTablosu.find(item => item.id === parseInt(req.params.id));
    res.render('urundetay', urun);
});

app.get('/urunler', (req, res) => {
    res.render('urunler', { urunler: urunTablosu });
});

// 404 için en sona bir middleware ekleyin
app.use((req, res) => {
    res.render('404');
});
app.listen(3000, () => {
    console.log('Server running on port 3000');
});