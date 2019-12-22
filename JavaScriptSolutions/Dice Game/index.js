//------------------------First Image-----------------------//

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0]; //

image1.setAttribute("src", randomImageSource); //


//------------------------Second Image-----------------------//

var randomNumber2 = Math.floor(Math.random) * 6) + 1 //1-6

var randomImageSource2 = "images/dice" + randomNumber2; //Scrolls through 6 dice images

var image2 = document.querySelectorAll("img")[1]; //

image2.setAttribute("src", randomImageSource); //
