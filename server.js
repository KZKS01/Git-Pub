const express = require('express');
const app = express();
const port = 3000;
const drinks = require('./models/drinks');

app.get('/', function(req, res){
    res.send('Welcome to the Gitpub App!');
});

app.get('/drinks', function(req, res){
    res.render('index.ejs');
});

app.get('/drinks/:id', function(req, res){
    res.send(req.params.id);
})
app.listen(port, function(){
    console.log(`Express is listening on port ${port}`);
});