// //------01-----

// var integer = +prompt("Enter any positive integer..");
// document.write(`Number: ${integer} <br> 
//      Round off value: ${Math.round(integer)} <br>
//      Floor value: ${Math.floor(integer)} <br> 
//      Ceil value: ${Math.ceil(integer)}`);


    // //  -------02--------
     
    // var number =  +prompt('Enter a negative floating point number...');
    // document.write(`Number: ${number} <br> 
    //  Round off value: ${Math.round(number)} <br>
    //  Floor value: ${Math.floor(number)} <br> 
    //  Ceil value: ${Math.ceil(number)}`); 

    // //---------03------
    // var userInput= +prompt("Enter a number...")
    // document.write(`The absolute value of ${userInput} is ${Math.abs(userInput)}`)

    // // -------04------
    
//  var dice = Math.random();
//  var dicefinal = Math.floor((dice * 6)+1);
//  document.write(`Random dice value: ${dicefinal}`);


//  //------05-------

// var toss = Math.random();
// var value = Math.floor((toss * 2) + 1);
// if (value == 1) {
    
//     document.write(`${value} <br> Random coin value : Heads`);
// }
// else{
//     document.write(`${value} <br> Random coin value : Tails`);

// }

// //----06-----

// var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write(`Random number between 1 - 100: <b>${randomNumber}</b>`)

//  //-----07--------
// var weight = +prompt('Enter your weight: ')
// document.write(`The weight of user is ${parseFloat(weight)}`)

// //---------08--------
// var num = 5;
var secretNum = +prompt("Enter a number...");

if (secretNum == num) {
    alert("🎉 Congratulations!\nYou guessed the right number!");
}
else if (secretNum == num + 1 || secretNum == num - 1) {
    alert("😃 Close enough! Try again.");
}
else {
    alert("❌ Oops! That's not the secret number. Give it another try!");
}