/*
The number guessing game 
stores a number between 1 and 10 
and gives the player one attempt to 
guess the number.
*/

// When the game begins, the guess is false.
let correctGuess = false;
const number =  5; //number to guess
const guess = prompt("Guess a number between 1 and 10.");

/*
  1. Test if a player's guess matches the number.
  2. Change the value of correctGuess to true if they match
*/
 if( +guess === number ){
    correctGuess = true;
} else {
    correctGuess = false;
}

// Test if guess is correct and output response
if (correctGuess === true ) {
  console.log('You guessed the number!');
} else {
  console.log(`Sorry. the number was ${number}.`);
}
