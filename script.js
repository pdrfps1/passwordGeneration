let passwordLength = 16;

function generatePassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let password = "";

  for (let i = 0; i < passwordLenght; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  const inputEl = document.querySelector("#password");
  inputEl.value = password;
  console.log(password);
}

const passwordLengthEl = document.querySelector("#password-lenght");
passwordLengthEl.addEventListener("input", function () {
  passwordLength = passwordLengthEl.value;
  console.log(passwordLength);
});

function copyPassword() {
  navigator.clipboard.writeText(inputEl.value);
}

document.querySelector("#copy-1").addEventListener("click", copyPassword());
document.querySelector("#copy-2").addEventListener("click", copyPassword());
