// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
const https = require ('https');

//Function to print message to console
function printMessage(username, badgeCount, points){
  const message =`${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
  console.log(message);
}

function getProfile(username){
//Connect to the API URL(https://teamtreehouse.com/username.json)
const request = https.get(`https://teamtreehouse.com/${username}.json`, response =>{
                            let body = "";
                        //Read the data
                           response.on('data', data => {
                              body += data.toString();
                           });
                            response.on('end', () => {
                        //Parse the data
                              const profile = JSON.parse(body);                          
                        //Print the data
                        printMessage (username, profile.badges.length, profile.points.JavaScript);
                              });   
                           });
}

//const users = ["chalkers", "alenaholligan", "airish"];
const users = process.argv.slice(2);
users.forEach(getProfile);



// Output
// node app.js chalkers airish alenaholligan                                             
// airish has 109 total badge(s) and 4112 points in JavaScript                                                  
// alenaholligan has 143 total badge(s) and 623 points in JavaScript                                            
// chalkers has 209 total badge(s) and 5991 points in JavaScript 