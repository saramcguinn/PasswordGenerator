// Assignment Code ------------------------------------------------------------------------
var generateBtn = document.querySelector("#generate");
var passwordLength
var passwordNumbers
var passwordCharacters
var passwordUppercase
var passwordLowercase

var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialCharactersArray = [".", ",", ";", ":", "?", "<", ">", "!", "#", "$", "%", "^", "&", "*", "-", "=", "+"]
var fullArray = []
var passwordString = ""

// Write password to the #password input --------------------------------------------------
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Generate password that meets user's criteria --------------------------------------------
function generatePassword() {

  //Get input from user
  passwordLength = prompt("How many characters long should the password be? (min 8, max 128)");
  passwordNumbers = confirm("Do you want to use numbers?");
  passwordCharacters = confirm("Do you want to use special characters?");
  passwordUppercase = confirm("Do you want to use uppercase letters?");
  passwordLowercase = confirm("Do you want to use lowercase letters?");

  //Make sure password length fits parameters
  if(passwordLength >7 && passwordLength <129) {
  } else {
    alert("Please enter a password length between 8 and 128. Click Generate Password to try again.");
  }

  //Make sure user chooses at least one set of characters
  if(passwordNumbers||passwordCharacters||passwordUppercase||passwordLowercase) {
  } else {
    alert("Please agree to use at least one set: numbers, special characters, uppercase, or lowercase. Click Generate Password to try again.")
  }

  //Create array from which to generate password
  if(passwordNumbers) {
    fullArray = fullArray.concat(numbersArray);
  }
  if(passwordLowercase) {
    fullArray = fullArray.concat(lowercaseArray);
  }
  if(passwordCharacters) {
    fullArray = fullArray.concat(specialCharactersArray);
  }
  if(passwordUppercase) {
    fullArray = fullArray.concat(uppercaseArray);
  }

  //Randomly choose an item from the full array, repeat 'passwordLength' number of times, each time add new item to the password array
  for(i=0; i<passwordLength; i++) {
    //choose random number between 0 and fullArray.length-1
    random = Math.floor((Math.random() * (fullArray.length - 1) ) + 1);
    //get that random number index from fullArray & add to passwordArray
    passwordString = passwordString.concat(fullArray[random])
  }
  return passwordString;
}

// Add event listener to generate button --------------------------------------------------
generateBtn.addEventListener("click", writePassword);
