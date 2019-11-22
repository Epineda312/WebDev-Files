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
