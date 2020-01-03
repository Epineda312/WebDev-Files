//jshint esversion:6

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
//console.log(allSuperHeroNames);
