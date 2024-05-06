var guestlist = ["Faisal", "Faiz", "Ahmed"];
var dontCome = guestlist[0];
console.log(dontCome, "nahi aaraha hai");
guestlist.splice(0, 1, "Faizan");
guestlist.forEach(function (guest) { return console.log("Assalam o Alaikum ".concat(guest, " would you like to dinner with me")); });
