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
  alert("Your love score is " + loveScore + "%");

//Greater than seventy
if(loveScore > 70){
  alert("Your love score is " + loveScore + "%" +
        " \nYou love each other like Kanye loves Kanye");
//Greater than 40, less than or equal to 70
}if(loveScore > 30 && loveScore <= 70){
  alert("Your love score is "+ loveScore +"%");
//Less than equal to thirty
}if(loveScore <=30){
  alert("Your love score is "+ loveScore + "%" +
        " \nSheesh, You go together like oil and water");
}
//------------------------------End Problem 6-------------------------------------//

//------------------------------Start Problem 7-------------------------------------//
//Create a BMI calculator complete with if statements that generate different outputs
//depending on the BMI
function bmiCalculator (weight, height) {
    var bmi = weight/(height * height);
    var interpretation = "";

    if(bmi < 18.5){
        interpretation = ("Your BMI is "+ bmi +", so you are underweight.");
    }
     if(bmi >= 18.5 && bmi <= 24.9){
        interpretation = ("Your BMI is "+ bmi +", so you have a normal weight.");
    }
     if(bmi > 24.9){
        interpretation = ("Your BMI is "+ bmi +", so you are overweight.");
    }
    return interpretation;
}
//------------------------------End Problem 7-------------------------------------//

//------------------------------Start Problem 8-------------------------------------//
//Create an array of guest names then prompt the user and ask for their name
//Check guest list to see if the users name is on the list
var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var guestName = prompt("What is your name?")
guestList.includes(guestName);

if(guestList.includes(guestName) == true){
  alert("Your name is on the guest List");
}else{
  alert("Your name is not on the guest list");
}
//------------------------------End Problem 8-------------------------------------//

//------------------------------Start Problem 9-------------------------------------//
/*Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz"
instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of
both three and five print "FizzBuzz"*/
var output = [];
var count = 1;

function fizzBuzz(){
//write code here
while(count <= 100){
  if(count % 3 === 0 && count % 5 === 0 ) {
    output.push("FizzBuzz");
  }
  else if(count % 3 === 0){
    output.push("Fizz");
  }
  else if(count % 5 === 0){
    output.push("Buzz");
  }
  else{
    output.push(count);
  }
  count++;
  }
  console.log(output)
}
//------------------------------End Problem 9-------------------------------------//

//------------------------------Start Problem 10-------------------------------------//
//Use a while loop to print out the 99 bottles of beer on the wall song
var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottles";
    if (numberOfBottles === 1) {
        bottleWord = "bottle";
    } else if(numberOfBottles === 0){
      bottleWord = "bottles"
    }
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
   numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}
//------------------------------End Problem 10-------------------------------------//

//------------------------------Start Problem 10-------------------------------------//
//FizzBuzz problem but as a For loop instead of a while loop

//Increment for loop
var output = [];
var count = 1;

function fizzBuzz(){
//write code here
for(count = 1; count < 101; count++;){
  if(count % 3 === 0 && count % 5 === 0 ) {
    output.push("FizzBuzz");
  }
  else if(count % 3 === 0){
    output.push("Fizz");
  }
  else if(count % 5 === 0){
    output.push("Buzz");
  }
  else{
    output.push(count);
  }
  count++;
  }
  console.log(output)
}

//Decrement for loop
var output = [];
var count = 1;

function fizzBuzz(){
//write code here
for(count = 100; count > 1; count--;) {
  if(count % 3 === 0 && count % 5 === 0 ) {
    output.push("FizzBuzz");
  }
  else if(count % 3 === 0){
    output.push("Fizz");
  }
  else if(count % 5 === 0){
    output.push("Buzz");
  }
  else{
    output.push(count);
  }
  count++;
  }
  console.log(output)
}
//------------------------------End Problem 11-------------------------------------//

//------------------------------Start Problem 12-------------------------------------//
//fibonacci Challenge
//Expected solution
function fibonacciGenerator(n){
   var a=[];

   if(n===1){
        a.push(0);
    }

   else if(n>=2){
        a.push(0);
        a.push(1);
    }

    for(var i=2;i<n;i++){
        a[i]=a[i-1]+a[i-2];
    }

  return a;
}

//Different solution
function fibonacci(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

//Different solution
function fibonacciGenerator (n) {
    //TODO
    array =[];
    for (i=1;i<=n;i++) {
        if ( array.length <= 1 ) {
            array.push(i-1);
        } else {
            array.push((array[i-3]+array[i-2]));
        }
        if ( i === n) {
            return array;
        }
    }
}
fibonacciGenerator(1)
//------------------------------End Problem 12-------------------------------------//
