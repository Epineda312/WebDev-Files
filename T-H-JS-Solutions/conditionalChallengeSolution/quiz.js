/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correctAnswers = 0;

// 2. Store the rank of a player
let playerRank;

// 3. Select the <main> HTML element
const main = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
let q1 = prompt("Do you know the word?");
if(q1.toUpperCase() === 'BIRD'){
  correctAnswers++;
  console.log(correctAnswers);
} 
let q2 = prompt("Do you skate?");
if(q2.toUpperCase() === 'YES'){
  correctAnswers++;
  console.log(correctAnswers);
}
let q3 = prompt("Do you bike?");
if(q3.toUpperCase() === 'YES'){
  correctAnswers++;
  console.log(correctAnswers);
}
let q4 = prompt("Do you write JS?");
if(q4.toUpperCase() == 'YES'){
  correctAnswers++;
  console.log(correctAnswers);
}
let q5 = prompt("Do you enjoy it?");
if(q5.toUpperCase() === 'YES'){
  correctAnswers++;
  console.log(correctAnswers);
}



/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if(correctAnswers === 0){
  playerRank = 'No Crown :(';
  console.log(playerRank);
} else if (correctAnswers === 2 || correctAnswers === 1){
  playerRank = 'Bronze Crown';
  console.log(playerRank);
} else if(correctAnswers === 3 || correctAnswers === 4){
  playerRank = 'Silver Crown';
  console.log(playerRank);
} else {
  playerRank = 'Gold Crown';
  console.log(playerRank); 
}



// 6. Output results to the <main> element
main.innerHTML = `
  <h2> you got ${correctAnswers} out of 5 questions correct.</h2>
  <p>Crown earned: <strong>${playerRank}</strong></p>
    `;