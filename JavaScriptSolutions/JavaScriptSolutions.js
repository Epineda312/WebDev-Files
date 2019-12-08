//------------------------------Start Problem 1-------------------------------------//
//Tells you how many characters are in your tweet as well as how many remaining.
var tweet = prompt("compose your tweet");
var tweetCount = tweet.length;
alert("You have written " + tweetCount + " characters, you have " + (140 - tweetCount) + " characters remaining");
//------------------------------End Problem 1-------------------------------------//


//------------------------------Start Problem 2-------------------------------------//
//Slices extra characters from tweet after 140 characters
var tweet = prompt("Compose Your Tweet");
var tweetUnder140 = tweet.slice(0,140);
alert(tweetUnder140);
//------------------------------End Problem 2-------------------------------------//


//------------------------------Start Problem 3-------------------------------------//
//1 Create a var that stores the name that user enters via prompt
var name = prompt("What is your name?");

//2 capitalize the first letter of their name

//a isolate the first char
var firstChar = name.slice(0,1);

//b turn the first char to upper case
var upperCaseFirstChar = firstChar.toUpperCase();

//c isolate the rest of the name
var restOfName = name.slice(1,name.length);

//d change the rest of the name to lower case
restOfName = restOfName.toLowerCase();

//e concactenate the first char with the rest of the char
var capitalizedName = upperCaseFirstChar + restOfName;

//3 We use the capitalized version of their name to greet them using an alert
alert("Hello " + capitalizedName);
//------------------------------End Problem 3-------------------------------------//

//------------------------------Start Problem 4-------------------------------------//
//Convert a dogs age to a humans age
var dogAge = prompt("How old is your dog?");
var humanAge = (dogAge - 2) * 4 + 21;
alert("You dogAge converted to human years is " + humanAge);
//------------------------------End Problem 4-------------------------------------//

//------------------------------Start Problem 5-------------------------------------//
//Create your function below this line.
function bmiCalculator(weight, height){
  var bmi = weight/math.pow(height, 2);
  return bmi;
}
//Alt solution
function bmiCalculator(weight, height){
  var bmi = weight / (height * height);
  return Math.round(bmi);
}
/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
var bmi = bmiCalculator(65, 1.8);
bmi should equal around 20 in this case.*/
var bmi = bmiCalculator(65, 1.8);
console.log(bmi);
//------------------------------End Problem 5-------------------------------------//

//------------------------------Start Problem 6-------------------------------------//
//Create a randomized "love" calculator that also asks the user for 2 names
prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
alert("Your loveScore is " + loveScore);
//------------------------------End Problem 6-------------------------------------//