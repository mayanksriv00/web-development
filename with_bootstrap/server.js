const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
//Importing class
//const Foo = require("./baclogin.js");
import Credential from "./baclogin.js";
const cred=new Foo();
console.log(cred);

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/login",function(req,res){
  console.log(req.body);
  cred.addDetails(res.email,res.loginpass);
  cred.getDetails();
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
