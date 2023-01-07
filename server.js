const express = require('express');
const app = express();
const port = 3000;
const drinks = require('./models/drinks');

app.get('/', function(req, res){
    res.send('Welcome to the Gitpub App!');
});

app.get('/drinks', function(req, res){
    res.render('index.ejs', {drinks: drinks});
});

app.get('/drinks/:id', function(req, res){
    const drink = drinks[req.params.id];
    res.render('show.ejs', {drink: drink});
})

app.listen(port, function(){
    console.log(`Express is listening on port ${port}`);
});