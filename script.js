let pin = "";

function addNumber(num) {
  if (pin.length < 4) {
    pin += num;
    document.getElementById("pinInput").value = "*".repeat(pin.length);
  }
}

function clearPin() {
  pin = "";
  document.getElementById("pinInput").value = "";
}

function login() {
  if (pin === "1234") {
    alert("Login berhasil!");
  } else {
    alert("PIN salah!");
    clearPin();
  }
}