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



// 1. Create a multidimensional array to hold quiz questions and answers
const questions = [ 
  ['How many planets are in the Solar System?', '8'],
  ['How many continents are there?', '7'],
  ['How many legs does an insect have?', '6'],
  ['What year was JavaScript created?', '1995']  
];
let rightAnswers = [];
let wrongAnswers = [];

// 2. Store the number of questions answered correctly
 let correctAnswers = 0;


  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1


for( let i = 0; i < questions.length; i++){
  let question = questions[i][0];
  let answer = questions[i][1];
  let response = prompt(question);
  
  if( response === answer){
    console.log('correct answer');
    rightAnswers.push(question);
    correctAnswers++;
    
  } else {
    console.log('wrong answer');
    wrongAnswers.push(question);
  }
}

function createListItems( arr ) {
  let items = '';
  for ( let i = 0; i < arr.length; i++ ) {
    items += `<li>${ arr[i] }</li>`;
  }
  return items;
}

// 4. Display the number of correct answers to the user
let html = `<h1>You got ${correctAnswers} question(s) correct</h1>`;
let htmlRight = `<h2>You got these questions right</h2><ol>${createListItems(rightAnswers)}</ol>`;
let htmlWrong = `<h2>You Got these questions wrong</h2><ol>${createListItems(wrongAnswers)}</ol>`;
  
document.querySelector('main').innerHTML = html + htmlRight + htmlWrong;
