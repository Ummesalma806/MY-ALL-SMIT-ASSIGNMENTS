let display = document.getElementById("display");

let firstNumber = 0;
let secondNumber = 0;
let operator = '';
let isCalculated = false; // NEW FLAG: tracks if '=' was just clicked

// --- 1. LIGHT / DARK THEME SWITCHER ---
let themeToggle = document.getElementById("themeToggle");
let themeIcon = document.getElementById("themeIcon");

themeToggle.onclick = function() {
  let isLight = document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme", !isLight);
  
  themeIcon.innerHTML = isLight ? "☀️" : "🌙";
  localStorage.setItem("user-theme", isLight ? "light" : "dark");
};

if (localStorage.getItem("user-theme") === "light") {
  document.body.classList.add("light-theme");
  document.body.classList.remove("dark-theme");
  themeIcon.innerHTML = "☀️";
}

// --- 2. HELPER FUNCTION FOR DIGITS (Fixes the Append Bug) ---
function appendDigit(digit) {
  if (isCalculated) {
    display.innerHTML = digit;
    isCalculated = false; // Flag reset
  } else {
    if (display.innerHTML === "0") {
      display.innerHTML = digit;
    } else {
      display.innerHTML += digit;
    }
  }
}

// --- 3. NUMBER BUTTONS ---
document.getElementById("one").onclick = function() { appendDigit("1"); };
document.getElementById("two").onclick = function() { appendDigit("2"); };
document.getElementById("three").onclick = function() { appendDigit("3"); };
document.getElementById("four").onclick = function() { appendDigit("4"); };
document.getElementById("five").onclick = function() { appendDigit("5"); };
document.getElementById("six").onclick = function() { appendDigit("6"); };
document.getElementById("seven").onclick = function() { appendDigit("7"); };
document.getElementById("eight").onclick = function() { appendDigit("8"); };
document.getElementById("nine").onclick = function() { appendDigit("9"); };

document.getElementById("zero").onclick = function () {
  if (isCalculated) {
    display.innerHTML = "0";
    isCalculated = false;
  } else if (display.innerHTML !== "0") {
    display.innerHTML += "0";
  }
};

document.getElementById("decimal").onclick = function () {
  if (isCalculated) {
    display.innerHTML = "0.";
    isCalculated = false;
  } else if (!display.innerHTML.includes(".")) {
    display.innerHTML += ".";
  }
};

// --- 4. OPERATORS (+, -, *, /) ---
function setOperator(opSymbol) {
  firstNumber = Number(display.innerHTML);
  operator = opSymbol;
  display.innerHTML = "0";
  isCalculated = false; // Operator set karne par normal mode me wapas
}

document.getElementById("plus").onclick = function () { setOperator("+"); };
document.getElementById("minus").onclick = function () { setOperator("-"); };
document.getElementById("multiply").onclick = function(){ setOperator("*"); };
document.getElementById("division").onclick = function(){ setOperator("/"); };

// --- 5. PERCENTAGE (%) ---
document.getElementById("percent").onclick = function() {
  let currentValue = Number(display.innerHTML);
  display.innerHTML = (currentValue / 100).toString();
  isCalculated = false;
};

// --- 6. CLEAR (AC) ---
document.getElementById('clear').onclick = function(){
  display.innerHTML = '0';
  firstNumber = 0;
  secondNumber = 0;
  operator = '';
  isCalculated = false;
};

// --- 7. DELETE (DEL) ---
document.getElementById('delete').onclick = function(){
  if (isCalculated) {
    display.innerHTML = '0';
    isCalculated = false;
    return;
  }
  
  if (display.innerHTML !== '0') {
    display.innerHTML = display.innerHTML.slice(0, -1);
    if (display.innerHTML === '' || display.innerHTML === '-') {
      display.innerHTML = '0';
    }
  }
};

// --- 8. EQUALS (=) ---
document.getElementById("equals").onclick = function () {
  if (operator === '') return; // Operator select kiye bina = dabayein toh kuch na ho

  secondNumber = Number(display.innerHTML);

  if (operator === '+') display.innerHTML = firstNumber + secondNumber;
  else if (operator === '-') display.innerHTML = firstNumber - secondNumber;
  else if (operator === '*') display.innerHTML = firstNumber * secondNumber;
  else if (operator === '/') {
    display.innerHTML = secondNumber === 0 ? "Error" : firstNumber / secondNumber;
  }

  operator = '';
  isCalculated = true; // Mark as calculated!
};