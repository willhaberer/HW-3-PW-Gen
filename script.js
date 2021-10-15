// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

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
var newPass = [];
// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  newPass = [];
  var passLength = prompt(
    "How many Characters would you like the password to be?"
  );

  while (!(8 <= passLength && passLength <= 128)) {
    var passLength = prompt("Please enter a numeric value between 8 and 128");
  }

  //convert a string to a int
  var intLength = parseInt(passLength);
  var includeSpecialChars = confirm(
    "Would you like to include special characters?"
  );

  var useUpperCase = confirm("Would you like to include Upper Case Letters?");
  var useNumbers = confirm("Would you like to include numbers?");

  if (includeSpecialChars) {
    shuffleArrays(specialChars);
    var addSpecialChar = specialChars[0];
    newPass.unshift(addSpecialChar);
    intLength--;
  }

  if (useUpperCase) {
    shuffleArrays(alphabet);
    var addUppercase = alphabet[0];
    addUppercase.toUpperCase;
    newPass.unshift(addUppercase);
    intLength--;
  }

  if (useNumbers) {
    shuffleArrays(numList);
    var addNum = numList[0];
    newPass.unshift(addNum);
    intLength--;
  }
  alert(intLength);
  for (i = 0; i < intLength; i++) {
    i++;
  }
  passwordText.value = password;
  return passwordText;
}

//shuffle arrays function
function shuffleArrays(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//allows placeholder to be a variable
var pHolder = "Placeholder";
document.getElementById("password").value = passwordText;
