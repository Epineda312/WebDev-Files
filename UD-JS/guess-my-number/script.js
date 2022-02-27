'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When There is No input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number 🛑';
    displayMessage('No Number 🛑');
    //When Player Wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too High📈' : 'Too Low 📉';
      displayMessage(guess > secretNumber ? 'Too High📈' : 'Too Low 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You Lost the game! 💥';
      displayMessage('You Lost the game! 💥');
      document.querySelector('.score').textContent = 0;
    }
  }

  //1. Select the element with the 'again' class and attach a click event handler
  document.querySelector('.again').addEventListener('click', function () {
    //2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);

    //3. Restore the initial conditions of the message, number, score and guess input fields
    // document.querySelector('.message').textContent = 'Start Guessing.....';
    displayMessage('Start Guessing....');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';

    //4. Also restore the original background color (#222) and number width (15rem
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    // //debug
    // console.log(document.querySelector('.score').textContent);
    // console.log(secretNumber);
    // console.log(guess);
  });

  //Guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High📈';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost the game! 💥';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   //When Guess is Too Low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low 📉';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost the game! 💥';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
