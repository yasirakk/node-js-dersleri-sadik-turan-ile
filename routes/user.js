const express = require('express');
const router = express.Router();
const db = require("../data/db");


router.get('/', async function(req, res) {
    // esync - await
    try{
        const [urunler, ] = await db.execute("SELECT * FROM URUNLER where isHome=true and isActive=1");
        res.render('index', { urunler: urunler })
    }
    catch(err){
        console.log(err);
    }
});

router.get('/urunler/:id', async (req, res) => {
    try{
        const [urunler, ] = await db.execute("SELECT * FROM URUNLER where id=?", [req.params.id])
        res.render('urundetay', { urun: urunler[0] })
    }
    catch(err){
        console.log(err);
    }
});

router.get('/urunler', async (req, res) => {
    try{
        const [urunler, ] = await db.execute("SELECT * FROM URUNLER")
        res.render('urunler', { urunler: urunler })
    }
    catch(err){
        console.log(err);
    }
});

// 404 için en sona bir middleware ekleyin
router.use((req, res) => {
    res.render('404');
});

module.exports = router;