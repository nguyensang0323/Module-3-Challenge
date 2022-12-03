// Assignment code here

var password = []

var userchosenCharacters = []

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
  "'",
  '!',
];

function generatePassword() {
  var length = prompt ("How long is your desired password?")

  if (Number.isNaN(length)) {
    alert("Password length must be a number");
    return null;
  }

  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }

  if (length > 128) {
    alert('Password length must be less than 129 characters');
    return null;
  }
  var hasLowerCasedCharacters = confirm ("Click OK to add lower-cased characters")
  alert("Your password includes lower-case letters");

  var hasUpperCasedCharacters = confirm ("Click OK to add Upper-Cased characters")
  alert("Your password includes upper-case letters");

  var hasSpecialCharacters = confirm ("Click OK to add special characters")
  alert("Your password includes special characters");

  var hasNumericCharacters = confirm ("Click OK to add numbers")
  alert("Your password includes numbers");

// variable to store lowercase, uppercase, numeric, special values
  if (hasLowerCasedCharacters){
    userchosenCharacters=userchosenCharacters.concat(lowerCasedCharacters);
    console.log(userchosenCharacters)
  } else {
    alert('Your passwork does not include lower-case letters')
  }

  if (hasUpperCasedCharacters){
    userchosenCharacters=userchosenCharacters.concat(upperCasedCharacters);
    console.log(userchosenCharacters)
  } else {
    alert('Your passwork does not include upper-case letters')
  }

  if (hasSpecialCharacters){
    userchosenCharacters=userchosenCharacters.concat(specialCharacters);
    console.log(userchosenCharacters);
  } else {
    alert('Your passwork does not include special characters')
  }

  if (hasNumericCharacters){
    userchosenCharacters=userchosenCharacters.concat(numericCharacters);
    console.log(userchosenCharacters);
  } else {
    alert('Your password does not include numbers')
  }

  for (var i=0; i < length; i++){
    var randomCharacters = getRandom(userchosenCharacters);
    password.push(randomCharacters);
    console.log(password);
  
  } return password.join("");
}

function getRandom(arr) {
  var index = Math.floor(Math.random()*arr.length)
  return arr[index]
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
