let guestlist = ["Faisal","Faiz","Ahmed"];

let dontCome = guestlist[0];

console.log(dontCome,"nahi aaraha hai");

guestlist.splice(0, 1,"Faizan");

guestlist.forEach(guest=>console.log(`Assalam o Alaikum ${guest} would you like to dinner with me`));