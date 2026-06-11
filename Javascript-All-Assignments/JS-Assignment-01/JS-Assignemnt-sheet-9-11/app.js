// //---------01------
// var city = prompt("Enter your city");
// if (city = "karachi") {
//     console.log("Welcome to the city of lights");
// }

// // ------02------
// var gender = prompt("Select gender: Male or Female");
// if (gender == "Male") {
//     console.log("Good Morning Sir!");}
//     else  {
//     console.log("Good Morning Ma'am!");
//     }

// // -----03--------
// var color = prompt("Any color of Road Traffic Signal");
// if (color == "red") {
// alert("Must Stop!!!");
//    console.log("Must Stop!!!");
    
// } else if (color == "yellow") {
//     alert("Ready to Move");
//     console.log("Ready to Move");
    
// }
// else if (color == "green") {
//     alert("Move Now");
//     console.log("Move Now");
    
// }
// else{
//     alert("INCORRECT INPUT");
//     console.log("INCORRECT INPUT");
    
// }

// // -------04---------
// var fuel = +prompt("Your remaining fuel in car")
// if (fuel <= 0.25 ){
//     alert("Please refill the fuel in your car")
//     console.log("Please refill the fuel in your car")
// }
// else if( fuel > 0.25){
//     alert("Your fuel is up to date Go on a DRIVE");
//     console.log("Your fuel is up to date Go on a DRIVE");
    
// }
// else{
//     alert("Incorrect input pleasse enter your value in litres");
//     console.log("Incorrect input pleasse enter your value in litres");
    
// }

// // -----05------
// //(a)
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true")
// }

// //(b)
// var b = 84;
// if (b++ === 85) {
//     alert("given condition for variable b is true")
// }
// else{
//     alert("False statement")
// }

// // (c)
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c===13){
//     alert("condition 2 is true")
// }
// if (++c < 14){
//     alert("condition 3 is true")
// }
// if (c===14){
//     alert("condition 4 is true")
// }

// // (d)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if(totalCost === laborCost + materialCost){
//     alert("The cost equals")
// }

// //(e)
// if(true){
//     alert(true)
// }
// if(false){
//     alert(false)
// }

// //(f)
// if ("car" < "cat"){
//     alert("car is smaller than cat")
// }

// // ---------06------
// var physics_marks = +prompt("Enter your Physics number");
// var maths_marks = +prompt("Enter your Maths number");
// var english_marks = +prompt("Enter your English number");

// var total_marks = +prompt("Enter your Total Marks");
// var obtained_marks = physics_marks + maths_marks + english_marks;
// var Percentage = (obtained_marks / total_marks ) * 100;


// console.log("MARKS SHEET");
// console.log("Total Marks: " +  total_marks);
// console.log("Marks obtained: " + obtained_marks);
// console.log("Percentage: " + Percentage +"%");
// if (Percentage > 0 && Percentage < 100){
//     if (Percentage >= 80 && Percentage < 100){
//     console.log("Grade: A-One")
//     console.log("Excellent")
    
// }
// if (Percentage >= 70 && Percentage < 70){
//     console.log("Grade: A")
//     console.log("Good")
// }   
// if (Percentage >= 60 && Percentage < 50){
//     console.log("Grade: C")
//     console.log("You need to improve")
// }  
// if (Percentage <= 60 ){
//     console.log("Grade: Fail")
//     console.log("Sorry")
// } 
// }



// else{
//     console.log("Incorrect Input");
    
// }

// // ----------07-------
// var secret_number = 8;
// var guess_number = +prompt("Guess a number!!!");
 
// if (guess_number == secret_number){
//     alert("BINGO!! Correct Answer")
// }

//     else if(guess_number + 1 == secret_number){
//         alert("Close enough to the correct answer!!")
//     }
//     else if(guess_number - 1 == secret_number){
//         alert("Close enough to the correct answer!!")
//     }

// else{
//     alert("far enough!! try again")
// }

// //-------08------

// var numb = +prompt("Enter a number");
// if (numb % 3 == 0){
//     alert("The given number is divisible by 3");
// }
// else{
//     alert("Sorry!! The number is not divisible by 3... Try again!")
// }

// // ---------09-------
// var even_or_odd = +prompt("Enter a number");
// if(even_or_odd % 2 == 0){
//     alert("The given number is Even")
// }
// else{
//     alert("The given number is Odd")
// }

// //---------10---------
// var temp = +prompt("What is the temperature today?");
// if (temp > 40){
//     alert("It's so hot today!")
// }
// else if(temp > 30){
//     alert("The Weather today is Normal.")
// }
// else if(temp > 20){
//     alert("Today’s Weather is cool.")
// }
// else if(temp > 10){
//     alert("OMG! Today’s weather is so Cool.")
// }
// else{
//     alert("Don't go outside It's freezing cold")
// }

// //-----11-----
// var firstnum = +prompt("Enter first number to do math operation");
// var secondnum = +prompt("Enter second number to do math operation");
// var opertor = prompt("Pick any operator you want to: \n +, -, *, /, % ");

// if (opertor == "+"){
//     alert("Answer is: " + (firstnum+secondnum));
// }
// else if (opertor == "*"){
//     alert("Answer is: " + (firstnum*secondnum));
// }
// else if (opertor == "-"){
//     alert("Answer is: " + (firstnum-secondnum));
// }
// else if (opertor == "%"){
//     alert("Answer is: " + (firstnum%secondnum));
// }
// else {
//     alert("Answer is: " + (firstnum/secondnum))
// }
