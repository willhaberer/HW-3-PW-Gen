// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", userDefinePass);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Creating prompt tree
function userDefinePass() {
  var passLength = prompt(
    "How many Characters would you like the password to be?"
  );

  while (!(8 <= passLength && passLength <= 128)) {
    var passLength = prompt("Please enter a numeric value between 8 and 128");
  }

  var specialChars = confirm("Would you like to include special characters?");
  alert(specialChars);
}
