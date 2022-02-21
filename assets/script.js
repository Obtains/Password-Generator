// Input Variables

var input;
var promptNumber;
var promptCharacter;
var promptUppercase;
var promptLowercase;

// Password variable values
//  Special Characters value
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~",];

//Numbers value
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Letter Uppercase value
letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Letter Lowercase value
letter2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var info;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  random = writePassword();
  document.getElementById("password").placeholder = random;
});

// Write password to the #password input
function writePassword() {
  input = parseInt(prompt("Choose between 8 and 128 characters for your password"));

  if (!input) {
    alert("Value Required. Please input number between 8 and 128.");
  }else if (input < 8 || input > 128) {
    input = parseInt(prompt("Password must be between 8 and 128"));
  }
  else {
    promptNumber = confirm("Do you want numbers included?");
    promptCharacter = confirm("Do you want Special characters included?");
    promptUppercase = confirm("Do you want Uppercase letters included?");
    promptLowercase = confirm("Do you want Lowercase letters included?");
  };

  // If no prompts are selected for password
  if (!promptNumber && !promptCharacter && !promptUppercase && !promptLowercase) {
    info = alert("Please select a prompt to properly create a random passsword")
  }
  // If 4 prompts are selected
  else if (promptCharacter && promptNumber && promptUppercase && promptLowercase) {
    info = character.concat(number, letter, letter2);
  }
  // If 3 prompts are selected
  else if (promptCharacter && promptNumber && promptUppercase) {
    info = character.concat(number, letter);
  }
  else if (promptCharacter && promptNumber && promptLowercase) {
    info = character.concat(number, letter2);
  }
  else if (promptNumber && promptLowercase && promptUppercase) {
    info = number.concat(letter2, letter);
  }
  else if (promptCharacter && promptLowercase && promptUppercase) {
    info = character.conact(letter2, letter);
  }
  // If 2 prompts are selected
  else if (promptLowercase && promptNumber) {
    info = letter2.conact(number);
  }
  else if (promptLowercase && promptUppercase) {
    info = letter2.conact(letter);
  }
  else if (promptNumber && promptUppercase) {
    info = number.conact(letter);
  }
  else if (promptCharacter && promptNumber) {
    info = character.conact(number);
  }
  else if (promptCharacter && promptUppercase) {
    info = character.conact(letter);
  }
  else if (promptCharacter && promptLowercase) {
    info = character.conact(letter2);
  }
  // If 1 prompt is selected
  else if (promptNumber) {
    info = number;
  }
  else if (promptCharacter) {
    info = character;
  }
  else if (promptUppercase) {
    info = letter;
  }
  else if (promptLowercase) {
    info = letter2;
  };

  var password = [];

  // Random input for all variables
  for (var i = 0; i < input; i++) {
    var pickInfo = info[Math.floor(Math.random() * info.length)];
    password.push(pickInfo);
  }

  var random = password.join("");
  PassInput(random);
  return random;
};

// Adds the password input to the textbox
function PassInput(random) {
  document.getElementById("password").textContent= random;
};