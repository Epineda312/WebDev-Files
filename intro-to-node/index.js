//jshint esversion:6

//--------------------------------Super-Heroes-----------------------//
const superheroes = require('superheroes');
 /*
superheroes.all;
//=> ['3-d Man', 'A-Bomb', ...]

superheroes.random();
//=> 'Spider-Ham'
 */

//Displays a random super hero name each time code is ran
var mySuperHeroName = superheroes.random();
console.log(mySuperHeroName);


//Display all potential random super hero names
var allSuperHeroNames = superheroes.all;
// console.log(allSuperHeroNames);


//--------------------------------Super-Villains-----------------------//
const supervillains = require('supervillains');
/*
supervillains.all;
//=> ['Abattoir', 'Able Crown', …]

supervillains.random();
//=> 'Mud Pack'
*/

//Displays a random super villain name each time code is ran
var superVillainName = supervillains.random();
console.log(superVillainName);

//Display all potential super villain names
var allSuperVillainNames = supervillains.all;
// console.log(allSuperVillainNames);
