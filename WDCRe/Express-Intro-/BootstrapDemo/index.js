const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get('/cats', (req,res) => {
    const cats = [
        'Blue', 'Blick', 'Monty', 'Bruce'
    ]
    res.render('cats', { cats })
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
     if (data){
        res.render('subreddit', { ...data });
     
     } else{
        res.render('notfound', { subreddit})
     }
});

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { rand: num });
})
app.listen(port, () => {
    console.log(`Listening on Port: "${port}"`);
});