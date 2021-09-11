// JavaScript Functions

// function helloWorld() {
//     console.log('Hello world!');
// }
// helloWorld();

// function sing() {
//     console.log('LA LA LA');
// }
// sing();

// function greet(person) {
//     console.log(`person is: ${person}`)
//     console.log(`Hi ${person}!`);
// }

// greet('Stee');

// function rant(message) {
//     console.log(message.toUpperCase())
//     console.log(message.toUpperCase())
//     console.log(message.toUpperCase())
// }

// rant('I hate beets');

// function greet(firstName, lastName) {
//     console.log(`Hey there ${firstName} ${lastName[0]}`);
// }

// greet('Stee', 'Pena');

// function repeat(str, number) {
//     let result = ' ';
//     for (let i = 0; i < number; i++) {
//         // console.log(`BINK: ${str}`)
//         result += str;
//     }
//     console.log(result);
// }

// repeat('$', 5);

// define isSnakeEyes below:
// function isSnakeEyes(num1, num2) {
//     if (num1 === 1 && num2 === 1) {
//         console.log(`${num1} and ${num2} is snake eyes!`);
//     } else {
//         console.log(`${num1} and ${num2} is not snake eyes!`);
//     }
// }

// isSnakeEyes(1, 1);
// isSnakeEyes(1, 2);

// function add(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         return false;
//     }
//     let sum = x + y;
//     return sum;
// }

// DEFINE YOUR FUNCTION BELOW:
// function multiply(num1, num2) {
//     return num1 * num2;
// }
// multiply(2, 3);//6

// function isShortsWeather(temperature) {
//     if (temperature >= 75) {
//         return true;
//     } else {
//         return false;
//     }
// }
// isShortsWeather(74);//false
// isShortsWeather(75);//True

// function lastElement(array) {
//     if (array.length === 0) {
//         return null;
//     } else {
//         return array[array.length - 1];
//     }
// }

// function capitalize(str) {
//     let newStr = str[0].toUpperCase() + str.slice(1, str.length);
//     console.log(newStr)
//     return newStr;
// }
// capitalize('eggplant');
// capitalize('squid');


// DEFINE YOUR FUNCTION BELOW:
// function sumArray(array) {
//     let total = 0;
//     for (let i = 0; i < array.length; i++) {
//         total += array[i]
//     }
//     console.log(total);
//     return total
// }
// sumArray([1, 2, 3]); //6

// function returnDay(x) {
//     const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//     if (x > 7 || x <= 0) {
//         return null
//     }
//     return week[x - 1];
// }

//Function Scope
// let totalEggs = 0;
// function collectEggs() {
//     let totalEggs = 6;
//     console.log(totalEggs);
// }
// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs); //Not defined if total eggs is declared within function

// let bird = 'Scarlet Macaw';
// function birdWatch() {
//     let bird = 'Great Blue Heron';
//     console.log(bird);
// }
// birdWatch();
// console.log(bird);

//Block Scope

// let radius = 9;
// if (radius) {
//     const PI = 3.14159;
//     let msg = 'Hiii!';
// }

// // console.log(radius);
// // console.log(msg);

// for (let i = 0; i < 5; i++) {
//     let msg = 'ASADASDASDA';
//     console.log(msg);
// }


//Lexical scope
// function bankRobbery() {
//     const heroes = ['SpiderMan', 'Wolverine', 'Black Panther', 'Batwoman'];
//     function cryForHelp() {
//         function inner() {
//             for (let hero of heroes) {
//                 console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
//             }
//         }
//         inner();
//     }
//     cryForHelp();
// }
// bankRobbery();

//Function Expressions
// const square = function (num) {
//     return num * num;
// }
// square(7); //49

// function add(x, y){
//     return x + y;
// }

// const add = function (x, y) {
//     return x + y;
// }
// console.log(add(5, 5));

//Higher Order Functions
// function callTwice(func) {
//     func();
//     func();
// }

// function CallTenTimes(f) {
//     for (let i = 0; i < 10; i++) {
//         f();
//     }
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(`${roll}`);
// }
// // callTwice(rollDie);
// CallTenTimes(rollDie);

//Returning Functions
// function makeMysteryFunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function () {
//             console.log("CONGRATS, I AM A GOOD FUNCTION!");
//             console.log("YOU WIN A MILLI")
//         }
//     } else {
//         alert("YOU HAVE BEEN INFECTED");
//         alert("STOP TRYING TO CLOSE THIS WINDOW");
//     }
// }

// function makeBetweenFunc(min, max) {
//     return function (num) {
//         return num >= min && num <= max;
//     }
// }

// makeBetweenFunc(50, 100)

// function isBetween(num) {
//     return num >= 50 && num <= 100
// }
// function isBetween2(num) {
//     return num >= 1 && num <= 10
// }

//Defining Methods
// const myMath = {
//     PI: 3.14159,
//     square: function (num) {
//         return num * num;
//     },
//     cube: function (num) {
//         return num ** 3;
//     }
// }

//Shorthand
// const myMath = {
//     PI: 3.14159,
//     square(num) {
//         return num * num;
//     },
//     cube(num) {
//         return num ** 3;
//     }
// }

// const square = {
//     area(side) {
//         return side * side;
//     },
//     perimeter(side) {
//         return side * 4
//     }
// }

// 'this' Keyword
// const person = {
//     first: 'Airic',
//     last: 'Pea',
//     fullName() {
//         return `${this.first} ${this.last}`
//     }
// }

// console.log(person.fullName()); //Airic Pea
// person.last = 'P3A'
// console.log(person.fullName()); //Airic P3A

// const birb = {
//     name: 'Poty',
//     color: 'Grey',
//     breed: 'Cockatiel',
//     chirp() {
//         // return console.log('Chirp');
//         console.log("This is:", this);
//         console.log(`${this.name} loves to chirp`);
//     }
// }
// const birb2 = birb.chirp;

//Egg Laying Excercise
// const hen = {
//     name: 'Helen',
//     eggCount: 0,
//     layAnEgg() {
//         this.eggCount++;
//         return 'EGG'
//     }
// }

//Try/Catch

// try {
//     hello.toUpperCase();
// } catch {
//     console.log('Error!');
// }
// hello.toUpperCase(); //Produces Error, all code stops here
//with a try catch the error is handled and the code goes on to print 'AFTER'
// console.log('AFTER');

// function yell(msg) {
//     try {
//         console.log(msg.toUpperCase().repeat(3));
//     } catch (e) {
//         // console.log(e);
//         console.log('Entered an invalid type');
//     }
// }

//The forEach method

// const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// nums.forEach(function (n) {
//     console.log(n * n)
//     //print:81,64,49,36,25,16,9,4,1
// });

// nums.forEach(function (num) {
//     if (num % 2 === 0) {
//         console.log(num)
//         //prints 8,6,4,2
//     }
// });

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// function print(element) {
//     console.log(element)
// }
// print(numbers[0])
// print(numbers[1])
// numbers.forEach(print);

// for (let el of numbers) {
//     console.log(el);
// }

// numbers.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el);
//     }
// })

// const movies = [
//     {
//         title: 'Alien',
//         score: 100
//     },
//     {
//         title: 'Baker2G',
//         score: 90
//     },
//     {
//         title: 'Stand By Me',
//         score: 55
//     },
//     {
//         title: 'Parasite',
//         score: 12
//     }
// ]

// movies.forEach(function (movie) {
//     console.log(`${movie.title} - ${movie.score}/100`)
// })


//The Map Method
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// const doubles = numbers.map(function (num) {
//     return num * 2
// })
// console.log(doubles);

// const movies = [
//     {
//         title: 'Alien',
//         score: 100
//     },
//     {
//         title: 'Baker2G',
//         score: 90
//     },
//     {
//         title: 'Stand By Me',
//         score: 55
//     },
//     {
//         title: 'Parasite',
//         score: 12
//     }
// ]

// const titles = movies.map(function (movie) {
//     return movie.title
// });

// const scores = movies.map(function (movie) {
//     return movie.score
// });

// console.log(titles);
// console.log(scores);

// // DO NOT ALTER THE FOLLOWING CODE:
// const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

// // Write your code here
// const firstNames = fullNames.map(function (names) {
//     return names.first;
// })
// console.log(firstNames);

//Arrow Functions

// const add = function(x,y){
//     return x +y;
// }

// const add = (x, y) => {
//     return (x + y);
// }

// const square = num => {
//     return (num * num);
// }

// // const rollDie = () => {
// //     return Math.floor(Math.random() * 6) + 1
// // }
// const greet = (name) => {
//     return `Hey ${name}!`
// }

//Parens are optional if there's only one parameter:
// const square = x => {
//     return x * x;
// }

// //Use empty parens for function w/ no parameters 
// const singASong = () => {
//     return "LA LA LAAAAA LA LA LAAAAA LA ";
// }

//Implicit Return
//All These Functions Do The Same Thing
// const isEven = function (num) { // regular function expression
//     return num % 2 === 0;
// }
// const isEven = (num) => { // arrow function with parens around param
//     return num % 0 === 0;
// }
// const isEven = num => { //no parens around param
//     return num % 2 ==== 0;
// }
// const isEven = num => ( // implicit return
//     num % === 0
// );
// const isEven = num => num % 2 === 0; // one-liner implicit return

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }

// const rollDie = () => (
//     Math.floor(Math.random() * 6) + 1
// )

// const add = (a, b) => {
//     return a + b;
// }

//implicit return version
// const add = (a, b) => a + b;

//Arrow functions wrapup - Array example
// const movies = [
//     {
//         title: 'Alien',
//         score: 100
//     },
//     {
//         title: 'Baker2G',
//         score: 90
//     },
//     {
//         title: 'Stand By Me',
//         score: 55
//     },
//     {
//         title: 'Parasite',
//         score: 12
//     }
// ]

//regular function expression
// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })

// // implicit return version
// const newMovies = movies.map(movie => (
//     `${movie.title} - ${movie.score / 10}`
// ));
// //implict return on one line
// const newMovies = movies.map(movie => (`${movie.title} - ${movie.score / 10}`));


// setTimeout and setInterval
// setTimeout(() => {
//     console.log("HELLO!!!");
// }, 3000) // Waits 3 seconds than prints HELLO!!! in the console

// console.log('Hello');
// setTimeout(() => {
//     console.log('Are you still there?')
// }, 3000); //Prints Hello immediately, prints are you still there after 3 seconds

// console.log('Hello');//Prints immediately
// setTimeout(() => {
//     console.log('Are you still there?')
// }, 3000);//Prints after 3 seconds
// console.log('GOODBYE')//Prints immediately

// const id = setInterval(() => {
//     console.log(Math.random());
// }, 1000); // Prints a random number every second

//The Filter Method
// const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// const odds = nums.filter(n => {
//     return n % 2 === 1; //Our callback returns true or false
//     //If it returns true, n is added to the filtered array
// })
// //[9, 7, 5, 3, 1]

// const smallNums = nums.filter(n => n < 5);
// //[4, 3, 2, 1]

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// numbers.filter(n => {
//     return n < 10;
// });

// const movies = [
//     {
//         title: 'Alien',
//         score: 100,
//         year: 2001
//     },
//     {
//         title: 'Baker2G',
//         score: 90,
//         year: 2000
//     },
//     {
//         title: 'Stand By Me',
//         score: 55,
//         year: 1900
//     },
//     {
//         title: 'Parasite',
//         score: 12,
//         year: 1814
//     },
//     {
//         title: 'Notting Hill',
//         score: 25,
//         year: 1999
//     }
// ]

// const goodMovies = movies.filter(movie => {
//     return movie.score > 80
// })

// const goodMovies = movies.filter(m => m.score > 80);
// const goodTitles = goodMovies.map(m => m.title);

// movies.filter(m => m.score > 80).map(m => m.title);

// const badMovies = movies.filter(m => m.score < 55);
// const recentMovies = movies.filter(m => m.year >= 1999);

//Filter Excercise
/*Write a function called (validUserNames) that accepts and array of usernames (strings).
It should return a new array containing only the usernames that are less than 10 characters.
for example: validUserNames['mark','Staceysmom1978','q131232112','carrie98','MoanaFan'];
// => ['mark', 'carrie98', 'MoanaFan'];
 */
//Solution
// function validUserNames(usernames){
//     return usernames.filter(username => {
//         return username.length < 10;
//     });
// }

//SOME and EVERY Methods
//----------------SOME METHOD-----------------------
//Similar to EVERY, but returns true if ANY of the array elements
//Pass the test function
// const words = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];

// //Are there any words longer than 4 characters?
// words.some(word => {
//     return word.length > 4;
// }) // true

// //Do any words start with 'Z'?
// words.some(word => word[0] === 'Z'); //false

// //Do any words contain 'cake'?
// words.some(w => w.includes('cake')) //true

// const movies = [
//     {
//         title: 'Alien',
//         score: 100,
//         year: 2001
//     },
//     {
//         title: 'Baker2G',
//         score: 90,
//         year: 2000
//     },
//     {
//         title: 'Stand By Me',
//         score: 55,
//         year: 1900
//     },
//     {
//         title: 'Parasite',
//         score: 12,
//         year: 1814
//     },
//     {
//         title: 'Notting Hill',
//         score: 25,
//         year: 2016
//     }
// ]

// movies.some(movie => movie.year > 2015); //true

//---------------EVERY METHOD-----------------
//Tests whether all elements in the array pass the provided function. It returns a boolean value.

// const words = ['dog', 'dig', 'log', 'bag', 'wag'];

// words.every(word => {
//     return word.length === 3;
// }) // true

// words.every(word => word[0] === 'd')//false

// words.every(w => {
//     let last_letter = w[w.length - 1];
//     return last_letter === 'g';
// })//true

// const exams = [80, 90, 98, 92, 78, 70, 100];
// exams.every(score => score >= 75);//false

//Define a function called allEvens that accepts a single array pf numbers/ Of the array contains all even numbers, return true. Otherwise, return false. Use some or every to help you do this.
// function allEvens(arr) {
//     return arr.every(n => n % 2 == 0);
// }

//Summing an array
// [3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });

const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for (let price of prices) {
//     total += price;
// }
// console.log(`The total is ${total}`);

// prices.reduce((total, price) => {
//     return total + price;
// });

// const total = prices.reduce((total, price) => total + price);