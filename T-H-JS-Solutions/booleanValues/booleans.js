let correctGuess = false;
const number =  5;
const guess = prompt("Guess a number between 1 and 10.");

 if( +guess === number ){
    correctGuess = true;
} else {
    correctGuess = false;
}
                     
if (correctGuess === true ) {
  console.log('You guessed the number!');
} else {
  console.log(`Sorry. the number was ${number}.`);
}
