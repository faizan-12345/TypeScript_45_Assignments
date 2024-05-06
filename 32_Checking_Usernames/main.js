// Array of current users
var currentUsers = ["Faisal", "Faiz", "Ahmed"];
// Array of new user
var newUsers = ["Uzair", "Ali", "Saim", "Babar", "Virat"];
// creating loop through new user to check user name  availablity 
newUsers.forEach(function (newoneUser) {
    // making a conditon for user name already exist
    var ourCondition = currentUsers.some(function (currentoneUsers) { return currentoneUsers.toLowerCase() === newoneUser.toLowerCase(); });
    if (ourCondition) {
        console.log("Sorry ".concat(newoneUser, " is already Taken"));
    }
    else {
        console.log("This user ".concat(newoneUser, " is available "));
    }
});
