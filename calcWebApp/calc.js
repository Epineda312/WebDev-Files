//jshint esversion:6

//require express
const express = require("express");
const bodyParser = require("body-parser");

//setup express
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//Home Route
app.get("/", function(req, res /*request, response*/) {
  //res.send("Hello User");
  res.sendFile(__dirname + "/index.html");
  // console.log(__dirname);
});

app.post("/", function(req, res){

var num1 = Number(req.body.n1);
var num2 = Number(req.body.n2);

var result = num1 + num2;

  res.send("The result of the calculation is " + result);
});

app.listen(3000, function(){
  console.log("Server now listening on port 3000");
});
