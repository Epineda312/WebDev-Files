// var houseKeeper1 = {
//   yearsOfExperiance: 12,
//   name: "jane";
//   cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
// }

// function clean(){
//   alert("Cleaning in progress");
// }

function HouseKeeper (yearsOfExperience, name, cleaningRepertoire){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function clean(){
      alert("Cleaning in progress");
    }
}

// var bellBoy1 = {
//   name: "Timothy",
//   age: 19,
//   hasWorkPermit: true,
//   languages: ["French", "English"]
// }

// function moveSuitCase{
//   alert("May I take your suitcase?");
//   pickUpSuitcase();
//   move();
// }

function BellBoy (name, age, hasWorkPermit, languages){
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.moveSuitcase = function(){
    alert("May I take your suitcase?");
    pickUpSuitcase();
    move();
  }
}

var BellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);
var BellBoy2 = new BellBoy("Jimmy", 21, true, ["English", "German"]);
var BellBoy3 = new BellBoy("Tommy", 27, true, ["English","Spanish"]);

var HouseKeeper = new HouseKeeper(9, "Tom", ["lobby", "bedroom"]);
var HouseKeeper2 = new HouseKeeper(12, "mary", ["kitchen", "Dining Room"]);
var Housekeeper3 = new HouseKeeper(15, "olga", ["Bedroom", "Bathroom"]);
