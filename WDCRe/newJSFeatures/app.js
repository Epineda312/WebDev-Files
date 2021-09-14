//----------------Default Params-----------------------------
// function rollDie(numSides) { //Old way of setting defaults
//     if (numSides === undefined) {
//         numSides = 6
//     }
//     return Math.floor(Math.random() * numSides) + 1;
// }

// function multiply(a, b) {
//     b = typeof b !== 'undefined' ? b : 1;
//     return a * b;
// }
// multiply(7); //7
// multiply(7, 3); //21

// function multiply(a, b = 1) { // The new way
//     return a * b;
// }
// multiply(4); //4
// multiply(4, 5); //20

// function rollDie(numsides = 6) {
//     return Math.floor(Math.random() * numSides) + 1;
// }

// function greet(person, msg = "Hey There", punc = '!') {
//     console.log(`${msg}, ${person}${punc}`);
// }

//---------Spread in function calls ---------------
/* Spread syntax allows an iterable such as an array to be expanded in places where zero
or more arguments (for function calls) or elements (for arrray literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
 */

//Spread for function calls.
//Expands an iterable (array, string, etc.) into a list of arguments.
// const nums = [9, 3, 2, 8, 67];
// Math.max(nums); // NaN
// // Use spread!
// Math.max(...nums); //67
//Same as calling:
//Math.max(9,3,2,8)

//Spread with array literals.
// const cats = ['Blue', 'Scout', 'Rocket'];
// const dogs = ['Rusty', 'Wyatt'];

// const allPets = [...cats, ...dogs]; //['Blue', 'Scout', 'Rocket', 'Rusty', 'Wyatt'];

// //Spread with objects
// // Copies properties from one object into another object literal.

// const feline = { legs: 4, family: 'Felidae' };
// const canine = { family: 'Caninae', furry: true };

// const dog = { ...canine, isPet: true };
// //{family: 'Caninae', furry: true, isPet: true}

// const lion = { ...feline, genus: 'Panthera' };
// //{legs: 4, family: 'Felidae', genus: 'Panthera'}

// const catDog = { ...feline, ...canine, };
// //{legs: 4, family: 'Caninae', furry: true}

// //REST params
// // function sum() {
// //     console.log(arguments);
// // }

// function sum(...nums) {
//     return nums.reduce((total, el) => total + el);
// }

// function raceResults(gold, silver, ...everyoneElse) {
//     console.log(`GOLD MEDAL GOES TO: ${gold}`);
//     console.log(`SILVER MEDAL GOTS TO: ${silver}`);
//     console.log(`THANKS TO EVERYONE ELSE: ${everyoneElse}`);
// }

//--------------Destructuring Arrays
/* A short, clean syntax to 'unpack':
-Values from arrays
-Properties from objects into distinct variables.
*/

// const raceResults = ['Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp'];

// const [gold, silver, bronze] = raceResults;
// gold; //Eliud Kipchoge
// silver; //'Feyisa Lelisa'
// bronze; //Galen Rupp

// const [fastest, ...everyoneElse] = raceResults;
// fastest; //"Eliud Kipchoge"
// everyoneElse; // ["Feyisa Lelisa", "Galen Rupp"] 

// const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

// const highScore = scores[0];
// const secondHighScore = scores[1];

// const [gold, silver, bronze, ...everyoneElse] = scores;

//-----------Destructuring Objects
// const runner = {
//     first: 'Eliud',
//     last: 'Kipchoge',
//     country: 'Kenya',
//     title: 'Elder of the Order of the Golden Heart of Kenya'
// }
// const { first, last, country } = runner;
// first;//'Eluid"
// last;//'Kipchoge'
// country;//'Kenya'

const user = {
    email: 'harveyB@yahoo.com',
    password: 'Password123',
    firstName: 'Harvey',
    lastName: 'Bink',
    born: 1992,
    died: 2020,
    bio: 'American Politician',
    city: 'San Francisco',
    state: 'California'
}

// const user2 = {
//     email: 'EmilyB@yahoo.com',
//     firstName: 'Emily',
//     lastName: 'Gonz',
//     born: 1992,
//     city: 'Tulsa',
//     state: 'Oklahoma'
// }

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

// const { email, firstName, lastName, city, bio } = user;
// const { born: birthYear, died: deathYear = 'N/A' } = user;
// const { city, state, died = 'N/A' } = user2;

//--------destructuing params
// const fullName = ({ first, last }) => {
//     return `${first}  ${last}`
// }

// const runner = {
//     first: 'Eluid',
//     last: 'Kipchoge',
//     country: 'Kenya',
// }
// fullName(runner); //'Eluid Kipchoge'

// function fullname(user) {
//     return `${user.firstName} ${user.lastName}`
// }

// function fullname(user) {
//     const { firstName, lastname } = user;
//     return `${firstName} ${lastName}`
// }

// function fullName({ firstName, lastName }) {
//     return `${firstName} ${lastName}`
// }

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

// // movies.filter((movie) => movie.score >= 90)
// // movies.filter(({ score }) => score >= 90)

// // movies.map(movie => {
// //     return `${movie.title} ${movie.year} is rated ${movie.score}`
// // })


// movies.map(({ title, score, year }) => {
//     return `${title} ${year} is rated ${score}`
// })

