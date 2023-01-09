const express = require('express');
const app = express();
const port = 3000;
const drinks = require('./models/drinks');
const foods = require('./models/food');
const food = require('./models/food');

//main page
app.get('/', function(req, res){
    res.send('Welcome to the Gitpub App!');
});

//drinks menu
app.get('/drinks', function(req, res){
    res.render('drinks_index.ejs', {drinks: drinks});
});

//food menu
app.get('/foods', function(req, res){
    res.render('foods_index.ejs', {foods: food});//2nd food is somewhat related to food.js's name
})

//individual drink
app.get('/drinks/:id', function(req, res){
    const drink = drinks[req.params.id];
    // console.log(foods[req.params.id]);
    res.render('drinks_show.ejs', {drink: drink});
})

//individual food
app.get('/foods/:id', function(req, res){
    const food = foods[req.params.id];
    console.log(food[req.params.id]);
    res.render('foods_show.ejs', {foods: food});
})

app.listen(port, function(){
    console.log(`Express is listening on port ${port}`);
});