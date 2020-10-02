//jshint eversion:6

const express = require("express");

const app = express();

app.get("/", function(request, response/*req, res*/){
  response.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, red){
    res.send("Contact me at: Epineda@gmail.com");
});

app.get("/about", function(req, res){
    res.send("My name is Eric Pineda, I love Music, coding, and video games");
});

app.get("/hobbies", function(req, res){
  res.send("<ul><li>Coffee</li><li>Code</li><li>Beer</li></ul>")
});

app.listen(3000, function(){
  console.log("server started on port 3000");
});
