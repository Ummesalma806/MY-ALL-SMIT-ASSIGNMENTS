// --- GLOBAL VARIABLES ---
let currentPin = String(localStorage.getItem("atm_pin") || "1234");
let balance = Number(localStorage.getItem("atm_balance")) || 10000;
let history = JSON.parse(localStorage.getItem("atm_history")) || [];

// DOM Elements
let pinInput, pinError, pinScreen, dashboardScreen, balanceDisplay, amountInput, transactionMsg, historyList;

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", function () {
  pinInput = document.getElementById("pinInput");
  pinError = document.getElementById("pinError");
  pinScreen = document.getElementById("pinScreen");
  dashboardScreen = document.getElementById("dashboardScreen");
  balanceDisplay = document.getElementById("balanceDisplay");
  amountInput = document.getElementById("amountInput");
  transactionMsg = document.getElementById("transactionMsg");
  historyList = document.getElementById("historyList");

  if (balanceDisplay) balanceDisplay.innerText = "****";
});

// --- 1. KEYPAD & PIN LOGIC ---
function pressKey(num) {
  if (!pinInput) pinInput = document.getElementById("pinInput");
  if (!pinError) pinError = document.getElementById("pinError");

  pinError.innerText = "";

  if (pinInput.value.length < 4) {
    pinInput.value += num;
  }
}

function clearPin() {
  if (!pinInput) pinInput = document.getElementById("pinInput");
  if (!pinError) pinError = document.getElementById("pinError");

  pinInput.value = "";
  pinError.innerText = "";
}

function verifyPin() {
  if (!pinInput) pinInput = document.getElementById("pinInput");
  if (!pinError) pinError = document.getElementById("pinError");

  let enteredPin = pinInput.value.trim();

  // Condition 1: Less than 4 digits
  if (enteredPin.length < 4) {
    pinError.style.color = "#ef4444";
    pinError.innerText = "❌ Please enter a 4-digit PIN";
    return;
  }

  // Condition 2: Correct PIN (Authentication Successful)
  if (String(enteredPin) === String(currentPin)) {
    pinError.innerText = "";
    pinScreen.classList.add("hidden");
    dashboardScreen.classList.remove("hidden");
    
    updateUI();
  } else {
    // Condition 3: Wrong PIN
    pinError.style.color = "#ef4444";
    pinError.innerText = "❌ Incorrect PIN! Try again.";
    pinInput.value = "";
  }
}

// --- 2. ATM TRANSACTIONS ---
function handleDeposit() {
  let amount = Number(amountInput.value);
  if (amount <= 0 || isNaN(amount)) {
    showMsg("Please enter a valid amount", "#ef4444");
    return;
  }

  balance += amount;
  addHistory("Deposit", amount, "#4ade80");
  showMsg(`Successfully deposited PKR ${amount.toLocaleString()}`, "#4ade80");
  saveData();
  resetInput();
}

function handleWithdraw() {
  let amount = Number(amountInput.value);
  if (amount <= 0 || isNaN(amount)) {
    showMsg("Please enter a valid amount", "#ef4444");
    return;
  }
  if (amount > balance) {
    showMsg("Insufficient Balance!", "#ef4444");
    return;
  }

  balance -= amount;
  addHistory("Withdraw", amount, "#f87171");
  showMsg(`Successfully withdrew PKR ${amount.toLocaleString()}`, "#4ade80");
  saveData();
  resetInput();
}

function fastCash(amount) {
  amountInput.value = amount;
  handleWithdraw();
}

// --- 3. CHANGE PIN MODAL ---
function openPinModal() {
  document.getElementById("pinModal").classList.remove("hidden");
  document.getElementById("oldPinInput").value = "";
  document.getElementById("newPinInput").value = "";
  document.getElementById("modalMsg").innerText = "";
}

function closePinModal() {
  document.getElementById("pinModal").classList.add("hidden");
}

function saveNewPin() {
  let oldPin = document.getElementById("oldPinInput").value;
  let newPin = document.getElementById("newPinInput").value;
  let modalMsg = document.getElementById("modalMsg");

  if (oldPin !== currentPin) {
    modalMsg.style.color = "#ef4444";
    modalMsg.innerText = "Current PIN is incorrect!";
    return;
  }

  if (newPin.length !== 4 || isNaN(newPin)) {
    modalMsg.style.color = "#ef4444";
    modalMsg.innerText = "New PIN must be 4 digits!";
    return;
  }

  currentPin = newPin;
  localStorage.setItem("atm_pin", newPin);

  modalMsg.style.color = "#4ade80";
  modalMsg.innerText = "PIN updated successfully!";

  setTimeout(() => {
    closePinModal();
  }, 1200);
}

// --- 4. HELPERS & LOCALSTORAGE ---
function addHistory(type, amount, color) {
  history.unshift({ type, amount, color, date: new Date().toLocaleTimeString() });
  updateUI();
}

function updateUI() {
  balanceDisplay.innerText = balance.toLocaleString();
  historyList.innerHTML = "";

  if (history.length === 0) {
    historyList.innerHTML = '<li class="empty-msg">No transactions recorded.</li>';
    return;
  }

  history.forEach((item) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <span>${item.type} (${item.date})</span>
      <span style="color: ${item.color}; font-weight: bold;">
        ${item.type === "Deposit" ? "+" : "-"} PKR ${item.amount.toLocaleString()}
      </span>
    `;
    historyList.appendChild(li);
  });
}

function saveData() {
  localStorage.setItem("atm_balance", balance);
  localStorage.setItem("atm_history", JSON.stringify(history));
}

function showMsg(msg, color) {
  transactionMsg.style.color = color;
  transactionMsg.innerText = msg;
  setTimeout(() => {
    transactionMsg.innerText = "";
  }, 3000);
}

function resetInput() {
  amountInput.value = "";
}

function logout() {
  dashboardScreen.classList.add("hidden");
  pinScreen.classList.remove("hidden");
  
  if (balanceDisplay) balanceDisplay.innerText = "****";
  
  clearPin();
  transactionMsg.innerText = "";
}