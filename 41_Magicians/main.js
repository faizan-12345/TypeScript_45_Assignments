//Define a function to print a each magician name from an array
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
//defininf an array containing magicians names
var magicianNames = ["Harry porter", "Dynamo", "Series", "Criss Angel"];
// calling function 
show_magician(magicianNames);
