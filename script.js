// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", promptUser);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Creating prompt tree
function promptUser() {
  var specialCharacters = prompt(
    "Would you like to include special characters?"
  );
}
