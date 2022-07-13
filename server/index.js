//jhint esversion:6


//Importingi installed NPM packages
const superheroes = require('superheroes');
const express = require('express');
const app = express();

//Creating get respose for browser
app.get('/',function(request,response){
  var hero="<h1>"+superheroes.random()+"</h1>";
  response.send(hero);
});

app.get('/contact',function(req,res){
  res.send("My email is mayanksriv00@gmail.com");
});



//Creating the server
app.listen(3000,function(){
  console.log("Server started");
});
