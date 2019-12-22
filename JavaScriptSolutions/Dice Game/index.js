//------------------------First Image-----------------------//

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomImageSource = "images/dice" + randomNumber1 + ".png"; // images/dice1.png - images/dice6.png

image1.document.querySelectorAll("img")[0].setAttribute("src", randomImageSource); //


//------------------------Second Image-----------------------//

var randomNumber2 = Math.floor(Math.random() * 6) + 1 //1-6

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //Scrolls through 6 dice images

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//------------------------Logic-----------------------//
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else {
  document.querySelector("h1").innerHTML = "It's a Draw!";
}
