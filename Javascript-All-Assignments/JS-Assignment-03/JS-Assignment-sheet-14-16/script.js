// //----01---
// var students = [];

// //------02-----
// var names = new Array()

// // ---03----
// var strarr = ["Ali" , "Ahmed" , "Sara" , "Saba" , "Sana"]

// //----04------
// var numarr = [1,2,3,4,5,6,7,8,9,0]

// //------05--------
// var booleanarr = [true, false , false , true]
 
//  //----06----
// var mixarr = ["Aisha","Umme","Mariam",7,[],9,0,true,null,{},undefined,false,"Rabia"]

// // ------07-------
// var education = ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"]
// console.log(education);
// document.write("  <h3>Qualifications</h3>")
// document.write("1) " + education[0] + "<br>")
// document.write("2) " + education[1] + "<br>")
// document.write("3) " + education[2] + "<br>")
// document.write("4) " + education[3] + "<br>")
// document.write("5) " + education[4] + "<br>")
// document.write("6) " + education[5] + "<br>")
// document.write("7) " + education[6] + "<br>")
// document.write("8) " + education[7] + "<br>")

// //----08--------
// var names = ["Zainab" , "Zarnaab" , "Zubaida"]
// var score = [300 , 450 , 250]
// var total_marks = 500
// var percentage1 = score[0] / total_marks * 100 + "%"
// var percentage2 = score[1] / total_marks * 100 + "%"
// var percentage3 = score[2] / total_marks * 100 + "%"
// document.write(`Score of ${names[0]} is ${score[0]}. Percentage: ${percentage1} <br>`)
// document.write(`Score of ${names[1]} is ${score[1]}. Percentage: ${percentage2} <br>`)
// document.write(`Score of ${names[2]} is ${score[2]}. Percentage: ${percentage3} <br>`)

// //-----09------
// var colors = ["Blue","Red","Yellow","Green","Pink","Purple"]
// document.write(`<h2 >Pick any color of the following:</h2> <br>`)
// document.write(`<h2 style=" color:blue;">${colors}</h2>`)
// var color = prompt("Enter a color to add at the beginning of the list:")
// colors.unshift(color)
// document.write(`<h2 style=" color:blue;">${colors}</h2>`)
// var update = prompt("Enter a color to add at the end of the list:")
// colors.push(update)
// document.write(`<h2 style=" color:blue;">${colors}</h2>`)
// colors.unshift("Limegreen","Gray")
// console.log(colors);
// document.write(`<h2 style=" color:blue;">${colors}</h2>`)
// colors.shift()
// document.write(`<h2 style=" color:blue;">${colors}</h2>`)
// colors.pop()
// document.write(`<h2 style=" color:blue;">${colors}</h2>`)
// var index = +prompt("Choose an index at which you want to add the color")
// var add = prompt("Choose the color you want to add at " + index)
// colors.splice(index , 0, add)
// console.log(colors)
// document.write(`<h2 style=" color:green;">${colors}</h2>`)
// var number = +prompt("Choose an index at which you want to delete the color")
// var deletecount = +prompt("How many colors do you want to delete?")
// colors.splice(number ,deletecount)
// console.log(colors)
// document.write(`<h2 style=" color:red;">${colors}</h2>`)

// ------10-------
// var scores = [320,230,480,120]
// document.write(`Scores of Students: ${scores} <br>`)
// var newscore = scores.sort()
// document.write(`Ordered Scores of Students: ${newscore}`)
 
// console.log(scores)

// //----11-----
// var cities = ["Karachi","Lahore","Quetta","Islamabad","Peshawar"]
// var newList = cities.slice(2,4)
// console.log(newList)


// //-----12----
// var arr = ["This","is","my","cat"]
// document.write("Array:" +  "<br>" + arr + "<br>")
// var newArr = arr.join(' ')
// document.write("String:" +  "<br>" + newArr + "<br>")


// //-----13------
// var devices = []
// devices.push("keyboard")
// devices.push("mouse")
// devices.push("printer")
// devices.push("monitor")
// console.log(devices)
// devices.shift()
// console.log(devices)
// devices.shift()
// console.log(devices)
// devices.shift()
// console.log(devices)
// devices.shift()
// console.log(devices)

// //----14----
// var devices = []
// devices.push("keyboard")
// devices.push("mouse")
// devices.push("printer")
// devices.push("monitor")
// devices.pop()
// console.log(devices);
// devices.pop()
// console.log(devices);
// devices.pop()
// console.log(devices);
// devices.pop()
// console.log(devices);

// //-----15----
// var phones = ["Apple","Samsung", "Motorola"," Nokia", "Sony" ,"Haier"]
// document.write(`<select style="margin-top: 10%; margin-left: 30%; width: 250px; height: 40px; border-radius: 30px;">
//     <option value="select" hidden>Select</option>
//     <option value="Apple">${phones[0]}</option>
//     <option value="Samsung">${phones[1]}</option>
//     <option value="Motorola">${phones[2]}</option>
//     <option value="Nokia">${phones[3]}</option>
//     <option value="Sony">${phones[4]}</option>
//     <option value="Haier">${phones[5]}</option>
// </select>`)

