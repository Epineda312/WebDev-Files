//jshint eversion:6

const express = require("express");

const app = express();

app.get("/", function(request, response/*req, res*/){
  response.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, red){
    res.send("Contact me at: Eric@gmail.com");
});

app.listen(3000, function(){
  console.log("server started on port 3000");
});
