const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


app.get('/', (req,res) => {
    res.render('home.ejs');
});

app.get('/services', (req,res) => {
    res.render('services.ejs');
});

app.get('/locations', (req,res) => {
    res.render('locations.ejs');
});

app.get('/news', (req,res) => {
    const date = Math.floor(Math.random() * 11) + 5;
    res.render('news.ejs', {date: date});
});



app.listen(port, () =>{
    console.log(`LISTENING ON PORT ${port}`);
});