let myLandbot = this;
myLandbot.onLoad(function() { 
var d = new Date();
var n = d.getDay();
var now = d.getHours() + "." + d.getMinutes();
var weekdays = [
  ["Sunday"],
  ["Monday", 8.00, 17.00],
  ["Tuesday", 8.00, 17.00],
  ["Wednesday", 8.00, 17.00],
  ["Thursday", 8.00, 17.00],
  ["Friday", 8.00, 17.00],
  ["Saturday"] // we are closed, sorry!
];
var day = weekdays[n];


if (now > day[1] && now < day[2] || now > day[3] && now < day[4]) {
  console.log("We're open right now!");
}
else {
  console.log("Sorry, we're closed!");
 myLandbot.destroy();
}
       }) 