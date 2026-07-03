var output = document.getElementById("output");
var heading = document.getElementById("heading");
var choice = +prompt("What you want to do first? \n 1..Backward counting \n 2..Forward counting \n 3.. Generate Table  \n \n  choose numbers(1-3) ")
if(choice == 1){
  heading.innerHTML = "Backward Counting"
  var first = +prompt("Enter starting number")
  var second = +prompt("Enter end number")
  if(first < second){
    alert("Starting number must be greater than second number")
  }
  else{
    for (let i = first; i >= second; i--) {
      output.innerHTML += `<div>${i}</div>`
      
    }
  }
}
else if(choice == 2){
  heading.innerHTML = "Forward Counting"
  var firstNum = +prompt("Enter starting number...!")
  var secondNum = +prompt("Enter end number...!")
  
  
  if(firstNum > secondNum){
    alert("Starting number should be smaller than ending number")
  }
  else{
    for(var i = firstNum; i <= secondNum ;i++){
      output.innerHTML += `<div>${i}</div>`
      
    }
  }
}
else if(choice == 3){
  output.style.display = "block";
  output.style.textAlign = "center";
  var tableNumber = +prompt("Which multiplication table do you want?");
  heading.innerHTML = `Multiplication Table of ${tableNumber}`
var start = +prompt("Enter the starting multiplier:");
var end = +prompt("Enter the ending multiplier:");
 if (start > end){
  alert("Starting multiplier should be smaller than ending multiplier")
 }
 else{
  for (let i = start; i <= end; i++) {
    output.innerHTML += `${tableNumber} × ${i} = ${tableNumber * i}<br>`;
    
    
    
  }
 }


  }

  else{
    alert("Please choose number from 1-3")
  }