// creating array of guest list
var guestList = ["Faisal", "Faiz", "Ahmed"];
// make variable for those guset who cannot come
var dontCome = guestList[0];
//print the name of the guest ame who is not comming
console.log(dontCome, "nahi aa sakh ta hai");
//Add and remove the name of guest in guest list Array
guestList.splice(0, 1, "Faizan");
//Annousment of Good news of bigger Dinner table
console.log("Good News we have found a bigger table for a Dinner ");
//Add new guest name at the start of guestlist Array
guestList.unshift("Uzair");
//Add the new guest at the end of guestList Array
guestList.push("Ali");
// find the middle index of guestList Array
var middleIndex = Math.floor(guestList.length / 2);
//Add the new guest at the middle of guestList Array
guestList.splice(middleIndex, 0, "Usman");
// Annousment of updated list of guest
console.log("update list of our guest");
// Now sending the message for our guest
guestList.forEach(function (guest) { return console.log("Assalamualikum ".concat(guest, " would you like to diiner with me ?")); });
// only two guest are invite
console.log("unfortunnatly the dinner table wont arrive on time so i can invite only two guest to dinner with me");
// while llop to remove guest from guestList Array
while (guestList.length > 2) {
    var updateguestList = guestList.pop();
    console.log("sorry ,".concat(updateguestList, " I cant invite you to dinner "));
}
// invite the remaining guest
console.log("invite the remaining guest");
guestList.forEach(function (guest) { return console.log("lucky ".concat(guest, " you are still invite in dinner")); });
//remove the last two guest from guestList Array
guestList.pop();
guestList.pop();
// update guestList whish is Empty
console.log("the Empty guest list", guestList);
