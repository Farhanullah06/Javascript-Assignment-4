// Logical AND (&&)
let age = 21;
let feepaid = true
if(age >=18 && feepaid===true){
    console.log('Allowed to couse');
}else{
    console.log('Not Allowed to the couse');
}
//Allowed to the course because the both conditon are true \\ if one conditon is false so they don return because of &&  operator.

// Logical OR (||)
let emailCorrect = false;
let phoneCorrect = true;
if(emailCorrect === true || phoneCorrect === true){
    console.log("Welcome You can login");
}else{
    console.log("Sorry You cannot login");
}
//In this case you can login because we use the or gate and in or gate if one condition is true so you can login.\\ if both conditon are false so you cannot login

// Logical NOT (!)
let isBlocked = false;
if (!isBlocked) {
  console.log("Access allowed");
} else {
  console.log("Access denied");
}


// combine logic operator
// let isLoggedin = true;
// let isPremium = false;
// let hasCopen = true;
// if(isLoggedin ===true && ( isPremium===true || hasCopen===true) ){
//     console.log("User get Special Discount");
// }else{
//     console.log("Did not get special discount");
// }

//In this case the user get special discount because first we use the && operator and in && operator both condition are must be true at the right side of if-conditon value is already true bt the left side we use anothe operator Or operator so in or operator is only 1 value is true so they return true so from the right side the true value is return ........
//in shor the from the OR operator value return true and from the left conditon value return so both conditon are true so they print the special discount


// now change the value and obserb the output
// let isLoggedin = true;
// let isPremium = false;
// let hasCopen = false;
// if(isLoggedin ===true && ( isPremium===true || hasCopen===true) ){
//     console.log("User get Special Discount");
// }else{
//     console.log("Did not get special discount");
// }

//in this case use did not get special discount because from the or operator the value is return false and from the left side value is return true so 1 conditon is false and we use the adn operator so they wiil return the false and user did not git discount...


//Now change the another value
let isLoggedin = false;
let isPremium = true;
let hasCopen = true;
if(isLoggedin ===true && ( isPremium===true || hasCopen===true) ){
    console.log("User get Special Discount");
}else{
    console.log("Did not get special discount");
}
//in this case the user did not git discount because from the OR operator the value return true but from the And operator the value return false so hole value return false and use did not get the disscount