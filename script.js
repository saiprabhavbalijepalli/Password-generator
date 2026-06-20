function generatePassword() {
  let length = document.getElementById("length").value;

  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let symbols = "!@#$%^&*()_+";

  let characters = lowercase;

  if (document.getElementById("uppercase").checked) {
    characters += uppercase;
  }

  if (document.getElementById("numbers").checked) {
    characters += numbers;
  }

  if (document.getElementById("symbols").checked) {
    characters += symbols;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  document.getElementById("password").value = password;
}

function copyPassword() {
  let password = document.getElementById("password");
  password.select();
  document.execCommand("copy");
  alert("Password copied!");
}