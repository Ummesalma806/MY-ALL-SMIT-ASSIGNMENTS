// ------01------
// var a = 20;
// console.log("The value of a is " + a);
// console.log("The value of ++a is " + ++a);
// console.log("Now the value of a is " + a);
// console.log("The value of a++ is " + a++);
// console.log("Now the value of a++ is " + a);
// console.log("The value of --a is " + --a);
// console.log("Now the value of --a is " + a);
// console.log("The value of a-- is " + a--);
// console.log("Now the value of a-- is " + a);

// -----02----

// var a = 1;
// var b = 2;
// console.log("a is " + a);
//  console.log("b is " + b);
//  // step by step:
// // // console.log(--a);
// // // console.log(--a - --b);
// // // console.log(--a - --b + ++b);
// // console.log(--a - --b + ++b + b--);
//  var result = --a - --b + ++b + b--;
//  console.log("result is " + result);

// -------03--------
// var user_name = prompt("Enter your name")
// alert("Welcome " + user_name )

// ------04 & 05------
//  var number = prompt("which number's table do you want?", 5)
//     console.log(number + " x 1 = " + number * 1)
//     console.log(number + " x 2 = " + number * 2)
//     console.log(number + " x 3 = " + number * 3)
//     console.log(number + " x 4 = " + number * 4)
//     console.log(number + " x 5 = " + number * 5)
//     console.log(number + " x 6 = " + number * 6)
//     console.log(number + " x 7 = " + number * 7)
//     console.log(number + " x 8 = " + number * 8)
//     console.log(number + " x 9 = " + number * 9)
//     console.log(number + " x 10 = " + number * 10)

// -------06--------
var sub_1_name = prompt("Enter first subject name:")
var sub_2_name = prompt("Enter second subject name:")
var sub_3_name = prompt("Enter third subject name:")

var total_of_each = 100 ;
var obt_marks_1 = +prompt("Enter first subject marks:")
var obt_marks_2 = +prompt("Enter second subject marks:")
var obt_marks_3 = +prompt("Enter third subject marks:")
var obt_total = obt_marks_1 + obt_marks_2 + obt_marks_3

var all_total = total_of_each * 3;
var Percentage = (obt_total / all_total) * 100;
document.write(`
     <table>
        <tr>
            <th>Subject</th>
            <th>Total Marks</th>
            <th>Obtained Marks</th>
            <th>Percentage</th>

        </tr>
        <tr>
            <td>${sub_1_name}</td>
            <td>${total_of_each}</td>
            <td>${obt_marks_1}</td>
            <td>${(obt_marks_1 / total_of_each) * 100}%</td>
        </tr>
        <tr>
            <td>${sub_2_name}</td>
            <td>${total_of_each}</td>
            <td>${obt_marks_2}</td>
            <td>${(obt_marks_2 / total_of_each) * 100}%</td>
        </tr>
        <tr>
            <td>${sub_3_name}</td>
            <td>${total_of_each}</td>
            <td>${obt_marks_3}</td>
            <td>${(obt_marks_3 / total_of_each) * 100}%</td>
        </tr>
  <tr>
    <th>TOTAL</th>
    <th>${all_total}</th>
    <th>${obt_total}</th>
    <th>${Percentage}%</th>
</tr>
    </table>
   `
)