//importing modules
const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));


//creating a get response
app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});

app.post('/result',function(req,res){
  console.log(req.body);
  var sum = Number(req.body.input1) + Number(req.body.input2);

  res.send("Calculating result : "+ sum);
});

//Creating the server
app.listen(3000,function(){
  console.log("Server started");
});
