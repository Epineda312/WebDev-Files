/*
//My inital solution
// 1. Create a multidimensional array to hold quiz questions and answers
const quiz = [
  ["Is JavaScript fun?", 'yes'],
  ["Is JavaScript cool?", 'no'],
  ["Is JavaScript fresh?", 'no']
];

// 2. Store the number of questions answered correctly
 let numberCorrect = 0;

  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1


for( let i = 0; i < quiz.length; i++){
  let answer = prompt(quiz[i][0]); 
    
   if(answer.toLowerCase() != quiz[i][1]){
     console.log('Wrong Answer');
    } else {
      console.log('Correct Answer!');
      numberCorrect++;
    }
  console.log( `Questions answered correctly = ${numberCorrect}`);
 } 
  
 


// 4. Display the number of correct answers to the user
 console.log( `The number of questions you answered correctly is ${numberCorrect}`);
document.querySelector('main').innerHTML = `<ol>${numberCorrect}</ol>`;
*/

