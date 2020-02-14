//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const options = {
  url: "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD",
  headers: {
    "X-testing": "testing"
  }
};
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

  var crypto = req.body.crypto;
  var fiat = req.body.fiat;
  console.log(crypto);
  console.log(fiat);

request({
  url: "https://apiv2.bitcoinaverage.com/indices/global/ticker/" + crypto + fiat,
  headers: {
    'x-ba-key': 'Y2NiZWNiYWE3OTY3NDMyNzk2ODY5YzVmZDczNWY1NGU'
  }
},
function(error, response, body) {
  if (!error && response.statusCode == 200) {
    var data = JSON.parse(body);
    var price = data.last;
    console.log(data.last);

    var currentDate = data.display_timestamp;

    res.write("<p>The current date is " + currentDate + "</p>");
    res.write("<h1>The current price of " + crypto + " is " + price + fiat + "</h1>");
    res.send();
  } else {
    console.log(error);
    res.send(error);
  }
  });
});

app.listen(3000, function() {
  console.log("Server is running on port 3000.")
});
