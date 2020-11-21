/*function say(something){
  console.log(something);
}

say('Hello');

function exec(func, arg){
  func(arg);
}

exec((something) => {
  console.log(something);
}, 'Greetings Everyone');
*/

window.setTimeout((something) => {
  console.log(something);
}, 3000, 'Greetings Everyone');