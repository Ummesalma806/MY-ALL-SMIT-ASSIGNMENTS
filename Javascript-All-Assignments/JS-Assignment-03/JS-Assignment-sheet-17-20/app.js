// // //-----01-----
// var foodArray = ["Burger","Pizza","Biryani","Sandwich",["Chips","Chocolates","Biscuits",["Lollipops","Toffeess","Gummies"]]]
// var numberArr = [1,2,3,4,5,[55,45,33[10,9,8,5]],33] 

// // //-----02-----
// var matrix = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]
// console.log(matrix);
// for(var i = 0; i < matrix.length; i++){
//     document.write(matrix[i] + "<br>");
// }

// //--03-----
//  var numericNumbers = [1,2,3,4,5,6,7,8,9,10]
//  for (var i = 0; i < numericNumbers.length; i++){
//     console.log(numericNumbers[i])
//     document.write(numericNumbers[i]+'<br>')
//  }
// //-----04--------
// var tableNumber = +prompt("Enter a number to show it's multiplication table!")
// var tableLength = +prompt("Enter length of multiplication table")
// document.write(`<h2>Multiplication table of ${tableNumber}</h2>`)
// document.write(`<h3>Length ${tableLength}</h3>`)
// for(var i = 1; i <= tableLength ; i++ ){
//     document.write(`${tableNumber} x ${i} = ${tableNumber * i} <br>`)
// }

// //------05--------
// var fruits =  ['apple', 'banana', 'mango', 'orange','strawberry']
// for (var i = 0 ; i < fruits.length; i++){
//    document.write("Element at index " + i + " is " + fruits[i] +"<br>");
   
// }

// //----------06------
//     document.write("<b>Counting: </b>")

// for (var i = 0; i <= 15; i++){
//     document.write(i + " ")
// }

// document.write("<br><b>Reverse Counting: </b>")
// for(var i = 10 ; i >= 1 ; i--){
//     document.write(i +" ")
// }
// document.write("<br><b>Even: </b>")
// for(var i = 0 ; i <= 20 ; i+=2){
//     document.write(i +" ")
// }
// document.write("<br><b>Odd: </b>")
// for(var i = 1 ; i <= 19 ; i+=2){
//     document.write(i +" ")
// }
// document.write("<br><b>Series: </b>")
// for(var i = 2 ; i <= 20 ; i+=2){
//     document.write(i +"k" +" ")
// }

// //-------07------
// var A = ["cake",'Apple pie', 'cookies', " chips", "patties"]

// var order = prompt("What do you like to order sir/maam??")

// var found = false


// for (var i = 0 ; i < A.length ; i++){
   
//     if(order == A[i]){
//         document.write(`${order} is <b>available</b> at index ${i} in our bakery`)
//         found = true;
//         break;
//     }
// }
//     if (found == false){
//         document.write(`We are sorryyy....${order} is <b>not available </b> at our bakery`)
//     }

// //-------08-------
// var numbers = [24, 53, 78, 91, 12]
// document.write("Array items: "+ numbers +"<br>")
// var largestNum = numbers[0]
// for (i = 0; i < numbers.length ;i++ ){
//     if(numbers[i] > largestNum){
//         largestNum = numbers[i]
//     }
// }
// document.write("The largest number is " + largestNum)


// //-------09------
// var numbers = [24,53,78,91,12]
// document.write("Array items: " + numbers +"<br>")
// var smallestNum = numbers[0]
// for (var i = 0; i < numbers.length ; i++){
//     if(smallestNum > numbers[i] ){
//         smallestNum = numbers[i]
//     }
// }
// document.write("The smallest number is: " + smallestNum)

// //------10--------
// document.write("<br><b>Multiples of 5: </b>")
// for(var i = 5 ; i <= 100 ; i+=5){
//     document.write(i +" ")
// }
