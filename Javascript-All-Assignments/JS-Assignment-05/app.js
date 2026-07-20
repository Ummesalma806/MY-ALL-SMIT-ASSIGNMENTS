// //---------01---------
// var firstName = prompt("Enter your first name!");
// var lastName = prompt("Enter your last name!");

// var fullName = firstName + lastName;
// alert(`Salam ${fullName}...\n Have a Nice Day`)

// //---02------
// var modelName = prompt("What is your favourite Mobilephone Model?")
// var lengthOf = modelName.length
// console.log(lengthOf);
// document.write(`My Favourite Phone is: ${modelName}
//     <br> Length of string: ${lengthOf}`)
 
// //-----03------
// var country = "Pakistani";
// document.write(`String: ${country} <br>`)
// document.write(`Index of 'n': ${country.indexOf('n')}`)

// //---------04--------
// var word = "Hello World!"
// document.write(`String : ${word}<br>Last index of 'l' : ${word.indexOf('l',7)}`)


// //--------05--------
// var string = "Pakistani"
// console.log(string.charAt(3));
// document.write(`String : ${string}<br> Character at index 3: ${string.charAt(3)}`)


//  //--------06------
// var firstName = "Rabia";
// var lastName = "Anum Khan"
// var fullName = firstName.concat(" ",lastName)
// // console.log(fullName);

// document.write(fullName)

// //------07-----
// var cityName = "Hyderabad";
// cityNew = cityName.replace("Hyder","Islam")
// console.log(cityNew)
// document.write(`<b>City: </b>${cityName}<br><b>After replacement: </b>${cityNew} <br><br><br>`)


// // -----08---------
// var message = "Ali and Sami are best friends.They play cricket and football together."
// var newMessage = message.replace(/and/g, "&")

// console.log(message);
// console.log(newMessage);
// document.write(`<b>Message:</b> ${message}<br><b>After replacement: </b>${newMessage}`)

// //----09------
var string = "472"
newString = Number("472")

document.write(`<b>Value: </b>${string} <br><b>Type: </b>${typeof string}<br> <b>Value after changing into number: </b>${newString}<br><b>Type: </b>${typeof newString}`)

// // ---------10-------
// var userInput = prompt("Enter any fruit or vegetable?")
// output = userInput.toUpperCase()
// // console.log(userInput)
// // console.log(output)
// document.write(`<b>User Input: </b>${userInput}<br><b>To Upper Case: </b>${output}`)

// ------11-------
// var userInput = prompt("Enter your name..")
// var firstletter = userInput.slice(0,1)
// firstletter = firstletter.toUpperCase()
// var remaining = userInput.slice(1)
// remaining = remaining.toLowerCase()
// var fullname = firstletter + remaining

// document.write(`User Input: ${userInput}<br> Title Case: ${fullname}`)


// //--------12-------
// var num = 35.36
// num = num.toString()
// document.write("Number: "+num +"<br>");
// console.log(typeof num);
// num = num.replace(".", "")
// document.write("Result: "+ num);

// //------13--------
// var passcode = prompt("Enter your username..!")
// var valid = true;
// for(i = 0 ; i < passcode.length ; i++){

//     var ascii = passcode.charCodeAt(i)


//     if (ascii == 33 || ascii == 44 || ascii == 46 || ascii == 64){
//        valid = false;
//        break;
// }
// }
// if (valid) {
//     alert("Username is found")
    

// } 
// else {
//  alert("Invalid Input..\n Please Enter a valid username")
         
    
// }

// //---------14-------
// var A = ["cake",'Apple pie', 'cookies', " chips", "patties"]

// var order = prompt("What do you like to order sir/maam??")

// order = order.toLowerCase()

// var index = A.indexOf(order)

// if (index == -1) {
    
//     alert(`We are sorry ${order} is not available in our bakery`)
// } 
// else {

//     alert(`${order} is available at index ${index} in our bakery`)
// }

// //-------15-------
// var password = prompt("Enter your password...");

// var ascii = password.charCodeAt(0);

// if (ascii >= 48 && ascii <= 57) {
//     alert("Invalid Password");
// }
// else {

//     var hasLetter = false;
//     var hasNumber = false;

//     for (var i = 0; i < password.length; i++) {

//         var ascii = password.charCodeAt(i);

//         if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
//             hasLetter = true;
//         }

//         if (ascii >= 48 && ascii <= 57) {
//             hasNumber = true;
//         }
//     }

//     if (password.length >= 6 && hasLetter && hasNumber) {
//         alert("Password is Strong");
//     }
//     else {
//         alert("Your password is invalid");
//     }
// }

// //---------16-----
// var university = 'University of Karachi';
// var result = university.split('')

// for (var i = 0; i < result.length; i++) {
//     document.write("<b>" + result[i] + "</b><br>");
// }


// //------------17---------
// var userInput = prompt("Enter any word.....")
// var output = userInput.charAt(userInput.length - 1);
// document.write(`User Input: ${userInput}<br> Last character of input: ${output}`);

// //--------18--------
// var string = 'The quick brown fox jumps over the lazy dog'
//  string = string.toLowerCase()
// var count = 0
// for(i = 0 ; i < string.length ; i++){
//     if(string.slice(i , i + 3 )== "the"){
// count++;
//     }
// }
// document.write(count)