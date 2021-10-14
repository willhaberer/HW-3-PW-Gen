// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", userDefinePass);

var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var specialChars = [
  "!",
  " ",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "~",
];

var numList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

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

  var includeSpecialChars = confirm(
    "Would you like to include special characters?"
  );
  alert(includeSpecialChars);
}
