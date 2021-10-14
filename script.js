// Assignment Code
var generateBtn = document.querySelector("#generate");

if (gererateBtn.addEventListener)
  generateBtn.addEventListener("click", promptUser(), false);
else if (generateBtn.attachEvent)
  generateBtn.attachEvent("onclick", promptuser());

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var el = document.getElementById("clickMe");
if (el.addEventListener) el.addEventListener("click", promptUser(), false);
else if (el.attachEvent) el.attachEvent("onclick", promptUser());

//Creating prompt tree
function promptUser() {
  var specialCharacters = prompt(
    "Would you like to include special characters?"
  );
}
