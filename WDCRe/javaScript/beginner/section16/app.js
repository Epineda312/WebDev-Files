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
