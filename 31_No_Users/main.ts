// creating array
let userName = ["Faisal","Faiz","Ahmed"];
userName = [];
// check the is is not emmpty
if (userName.length === 0){
    console.log("Your Array is empty you need to add some users");
} else{
    
// creating for each loop on Array
userName.forEach(user=>{
    if(user==="Admin"){
        console.log(`Hello ${user}, Would you like to see a status report ? `);
    }else {
        console.log(`Hello ${user}, Than you for loging again `);
    }
 } )

}