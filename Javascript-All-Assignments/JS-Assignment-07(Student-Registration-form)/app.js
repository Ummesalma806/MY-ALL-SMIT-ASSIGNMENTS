function showResult() {
  let UserName = document.getElementById("name").value;
  let UserEmail = document.getElementById("email").value;
  let UserAge = document.getElementById("age").value;
  let UserCity = document.getElementById("city").value;
  let UserCourse = document.getElementById("course").value;

  if (
    UserName == "" ||
    UserEmail == "" ||
    UserAge == "" ||
    UserCity == "" ||
    UserCourse == ""
  ) {
    alert("Please fill all the input fields..!");
  } else if (UserAge >= 35 || UserAge <= 15) {
    alert("Age should be between 15-35");
  } else if (!UserEmail.includes("@")) {
    alert("Email should contain @");
  } else {
    var result = document.getElementById("result");

    result.style.display = "block";

    result.innerHTML = `<h2> 🎓 STUDENT INFORMATION: </h2>
     <b> 👤 Full Name: </b> ${UserName} <br>
     <b> 📧 Email Address: </b> ${UserEmail} <br>
     <b> 🎂 Age: </b> ${UserAge} <br>
     <b> 📍 City: </b> ${UserCity} <br>
     <b> 💻 Course: </b> ${UserCourse}`;

    alert("✅ Registration Successfull");
  }
}
function resetForm() {
  document.getElementById("stu-form").reset();
  var result = document.getElementById("result");
  result.style.display = "none";
}
