//creating an array 
var userName = ["Faisal", "Faiz", "Ahmed"];
// creating for each loop on Array
userName.forEach(function (user) {
    if (user === "Admin") {
        console.log("Hello ".concat(user, ", Would you like to see a status report ? "));
    }
    else {
        console.log("Hello ".concat(user, ", Than you for loging again "));
    }
});
