// Input Variables

var input;
var promptNumber;
var promptCharacter;
var promptUppercase;
var promptLowercase;

// Password variable values
// Characters value
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~",];

//Numbers value
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Letter value
letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var info

//Converting letters to lowercase
var toLower = function (x) {
  return x.toLowerCase();
};

//Variable for lowercase
letter2 = letter.map(toLower);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  input = parseInt(prompt("Choose between 8 and 128 characters for your password"));

  if (!input) {
    alert("Value Required");
  }else if (input < 8 || input > 128) {
    input = parseInt(prompt("Password must be between 8 and 128"));
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
