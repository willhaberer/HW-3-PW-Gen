// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

//defining possible charSets
var lowercase = [
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
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Write password to the #password input
function writePassword() {
  var newPass = "";
  var charSet = [];
  var passLength = prompt(
    "How many Characters would you like the password to be?"
  );

  //check for proper length value
  while (!(8 <= passLength && passLength <= 128)) {
    var passLength = prompt("Please enter a numeric value between 8 and 128");
  }

  //prompts user to decide if they should use special chars and adds them to the charSet if true
  var useSpecialChars = confirm(
    "Would you like to include special characters?"
  );
  if (useSpecialChars) {
    charSet = charSet.concat(specialChars);
  }

  //prompts user to decide if they should use UpperCase and adds them to the charSet if true
  var useUpperCase = confirm("Would you like to include Upper Case Letters?");
  if (useUpperCase) {
    charSet = charSet.concat(uppercase);
  }

  //prompts user to decide if they should use LowerCase and adds them to the charSet if true
  var useLowerCase = confirm("Would you like to include Lower Case Letters?");
  if (useLowerCase) {
    charSet = charSet.concat(lowercase);
  }

  //prompts user to decide if they should use Numbers and adds them to the charSet if true
  var useNumbers = confirm("Would you like to include numbers?");
  if (useNumbers) {
    charSet = charSet.concat(numList);
  }

  //extra randomizer...not crucial for functionality
  shuffleArrays(charSet);

  //loop to write the password by picking a random index from the charset array
  for (i = 0, n = charSet.length; i < passLength; ++i) {
    newPass += charSet[Math.floor(Math.random() * n)];
    console.log(newPass);
  }
  pHolder.textContent = newPass;
}

//shuffle arrays function, turns out this is not crucial for functionality but keeping it as a backup idea
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

//allows placeholder to be a variable
var pHolder = document.querySelector("#password");
pHolder.textContent = "Your Secure Password";
