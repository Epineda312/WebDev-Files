// $(document).ready(function() {
//   $("h1").css("color", "red");
// }); // changes h1 to red even if JQuery is declared in the head of the document

// $("h1").css("font-size"); //Gets the value
// $("h1").css("font-size", "5rem"); //Sets the value

// $("h1").addClass("big-title"); //adds class made in styles.css
// $("h1").addClass("big-title margin-50"); //adds two classes

// $("h1").text("Bye"); //Changes h1 text to "Bye"
// $("Button").text("Don't Click Me"); //Changes button text to "Don't click me"
// $("Button").html("<em>Hey</em>"); // Changes button to emphasized Hey
// $("Button").text("<em>Hey</em>") // changes button text to <em>Hey</em>

// console.log($("img").attr("src")); //diplays src of image in console
// $("a").attr("href", "https://www.yahoo.com"); //changes google link to yahoo

$("h1").click(function(){
  $("h1").css("color", "purple");
}); //Changes h1 color to purple on click

for(var i = 0; i<5; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    document.querySelector("h1").style.color = "purple";
  });
} //changes h1 color to purple when any buttons are clicked
