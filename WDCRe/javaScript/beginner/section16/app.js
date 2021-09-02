// console.log("Hello from your first JS file!");
// let total = 1 + 3;
// console.log("Goodbye!");

//If Statements
// console.log("before conditional");
// let random = Math.random();

// if (random < 0.5) {
//     console.log("Your number is less than 0.5");
//     console.log(random);
// }

// if (random >= 0.5) {
//     console.log("Your number is greater than 0.5");
//     console.log(random);
// }

// console.log("after conditional");


//Else IF statements
// const dayOfWeek = prompt("Enter a day").toLowerCase();

// if (dayOfWeek === 'tuesday') {
//     console.log("Turnin Up on a Tuesday");
// } else if (dayOfWeek === 'saturday') {
//     console.log("We restin mane");
// } else if (dayOfWeek === "friday") {
//     console.log("Love me a good friday")
// } else if (dayOfWeek === "wednesday") {
//     console.log("Meh")
// } else {
//     console.log("Hella MEH");
// }

/*
0-5 Free
5-10 Child $10
10-65 Adult $20
65+ Senior $10
*/

// const age = 65;

// if (age < 5) {
//     console.log("You are a baby. You get in for free");
// } else if (age < 10) {
//     console.log("You are a child. You pay $10")
// } else if (age < 65) {
//     console.log("You are an adult. You pay $20");
// } else if (age <= 65) {
//     console.log("You are a Senior. You pay $10");
// }

// const password = prompt("Please enter a new password");

// //Password must be 6+ characters
// if (password.length >= 6) {
//     //Password cannot incluse space
//     if (password.indexOf(' ') === -1) {
//         console.log("Valid Password");
//     } else {
//         console.log("Invalid Password")
//     }
// }

//Truthy Falsy Values

// const userInput = prompt("Enter something");

// if (userInput) {
//     console.log("TRUTHY")
// } else {
//     console.log("FALSY")
// }
// if (NaN) {
//     console.log("Truthy")
// } else {
//     console.log("Falsy")
// }

//AND operator

// const password = prompt("Enter your password");

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("Valid Password")
// } else {
//     console.log("Incorrect format for password!")
// }

//OR Operator

/*
0-5 Free
5-10 Child $10
10-65 Adult $20
65+ Senior free
*/

// const age = -10;

// if ((age > 0 && age < 5) || age >= 65) {
//     console.log("FREE");
// } else if (age >= 5 && age < 10) {
//     console.log("$10");
// } else if (age >= 10 && age < 65) {
//     console.log("$20");
// } else {
//     console.log("Invalid Age");
// }


//NOT Operator

// const firstName = prompt("enter your first name");
// if (!firstName) {
//     firstName = prompt("TRY AGAIN!");
// }


// const age = 45;
// if (!(age > 0 && age < 5 || age >= 65)) {
//     console.log("YOU ARE NOT A BABY OR A SENIOR");
// }

//Switch statement

// const day = 2;
// switch (day) {
//     case 1:
//         console.log("MONDAY")
//         break;
//     case 2:
//         console.log("TUESDAY")
//         break;
//     case 3:
//         console.log("WEDNESDAY")
//         break;
//     case 4:
//         console.log("THURSDAY")
//         break;
//     case 5:
//         console.log("FRIDAY")
//         break;
//     case 6:
//         console.log("SATURDAY")
//         break;
//     case 7:
//         console.log("SUNDAY")
//         break;
// }

// if( day === 1){
//     console.log("MONDAY")
// }
// else if (day === 2){
//     console.log("TUESDAY")
// }
// else if (day === 3){
//     console.log("WEDNESDAY")
// }
// else if (day === 4){
//     console.log("THURSDAY")
// }
// else if (day === 5){
//     console.log("FRIDAY")
// }
// else if (day === 6){
//     console.log("SATURDAY")
// }
// else if (day === 7){
//     console.log("SUNDAY")
// }

//---------------------------------------------------------//

//Loops

// For Loops

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// for (let num = 1; num <= 10; num += 1) {
//     console.log(num);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 20; i += 2) {
//     console.log(i)
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }
// for (let i = 25; i >= 0; i -= 5) {
//     console.log(i);
// }

//Looping Over arrays
// const animals = [
//     'lions',
//     'tigers',
//     'bears'
// ];

// for (let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i]);
// }

// for (let i = animals.length - 1; i >= 0; i--) {
//     console.log(i, animals[i]);
// }


// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //

// for (let i = 0; i < people.length; i++) {
//     console.log(i, people[i].toUpperCase());
// }

// // Nested FOR Loops
// let str = 'LOL';
// for (let i = 0; i <= 4; i++) {
//     console.log("Outer:", i);
//     for (let j = 0; j < str.length; j++) {
//         console.log(' Inner:', str[j]);
//     }
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`i is: ${i}`);
//     for (let j = 1; j < 4; j++) {
//         console.log(`   j is:${j}`);
//     }
// }

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ];

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`ROW #${i + 1} `)
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

//While Loops

// let num = 0;
// while (num <= 10) {
//     console.log(num);
//     num++;
// }

// let count = 0
// while (count < 10) {
//     count++
//     console.log(count)
// }

// const SECRET = "lion";

// let guess = prompt("Guess the secret animal....").toLowerCase();
// while (guess !== SECRET) {
//     guess = prompt("Guess the secret animal....").toLowerCase();
// }
// console.log("Congrats you got the secret animal correct!")

//The BREAK Keyword
// let input = prompt("Hey, say something!")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") {
//         console.log("break")
//         break;
//     }
// }
// console.log("Ok you win!")

// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     if (i === 100) {
//         break;
//     }
// }

// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     if (i === 100) break;
// }

// The Guessing Game Example
