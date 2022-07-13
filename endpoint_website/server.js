const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const User = require("./User.js");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json());


app.post('/register', (req, res) => {
  console.log(req.body.phone);

  //Storing details to the User object
  let UserObj = new User(req.body.name, req.body.email, req.body.pass, req.body.phone);
  console.log(UserObj.name);
  console.log(UserObj.email);
  console.log(UserObj.pass);
  console.log(UserObj.phone);


  res.send("<h4>Data received</h4>")
});


//Server has started
app.listen(3000, () => {
  console.log("Server started ...");
});