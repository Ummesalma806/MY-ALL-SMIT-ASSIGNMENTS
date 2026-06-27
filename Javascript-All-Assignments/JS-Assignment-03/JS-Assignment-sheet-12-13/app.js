// A-Z=65-90
// a-z=97-122

//  //-------01-------
var char = "i";
var ascii = char.charCodeAt(0)
if (ascii >= 65 && ascii <= 90 ){
    console.log("It is a Uppercase letter")
}
else if(ascii >= 97 && ascii <= 122){
    console.log("It is a Lowercase letter");
    
}
else if(ascii >= 48 && ascii <= 57){
    console.log("It is a number");
    
}
else{
    console.log("Incorrrect input");
    
}

// //------02-------
// var num1 = 9;
// var num2 = 42;
// if (num1 > num2) {
    
// console.log(num1 + " is larger than " + num2);

// }
// else if(num2 > num1) {
    
// console.log(num2 + " is larger than " + num1);

// }
// else {
//     console.log("Both Integers are equal");
    
// }

// //-------03--------

// var $number = +prompt("Enter any Number to find whether it is: \n Positive number, Negative number or Zero");
// if($number > 0){
//     alert("Positive number")
//     console.log("It is a positive number");
    
// }
// else if($number < 0){
//     alert("Negative number")
//     console.log("It is a Negative number");
    
// }
// else if($number == 0) {
//     alert("Number is ZERO")
//     console.log("Number is ZERO");   
// }
// else{
//     alert("Incorrect Input")
// }

// //---------04-------
// var vowel = "e";
// if(vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u"){
//  console.log(true);
 
// }
// else{
//     console.log(false);
    
// }

// // ---05--------

// var password = "abc123"
// var check = prompt("Enter your password")
// if(check == null || check == ""){
//     alert("Please!! Enter your password")
// }
// else if(check == password){
//     alert('Correct!  The password you entered matches the original password')
// }
// else{
//     alert("Incorrect Password....Please try again!!")
// }

// //--------06---------
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";

// }
// else{
// greeting = "Good evening";
// }
// console.log(greeting)

// //---------07-------
// var time = +prompt("Please enter time in 24-hour format (0000 - 2359)");
// if(time >= 0 && time < 1200 ){
//     console.log("GOOD MORNNING");
//     alert("GOOD MORNING");
    
// }
// else if(time >= 1200 && time < 1700 ){
//     console.log("GOOD AFTERNOON");
//     alert("GOOD AFTERNOON");
    
// }
// else if(time >= 1700 && time < 2100 ){
//     console.log("GOOD EVENING");
//     alert("GOOD EVENING");
    
// }
// else if(time >= 2100 && time < 2359 ){
//     console.log("GOOD NIGHT");
//    alert("GOOD NIGHT");
    
// }
// else{
//     console.log("Please! Enter valid time (in 24-hour format)")
//     alert("Please! Enter valid time (in 24-hour format)")
// }
