// Assignment Code ---------------------------------------------------------------------------------------------------------------------------------
var generateBtn = document.querySelector("#generate");
var clearBtn = document.querySelector("#clear");
var passwordText = document.querySelector("#password");
var passwordLength;
var passwordNumbers;
var passwordCharacters;
var passwordUppercase;
var passwordLowercase;

var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharactersArray = [".", ",", ";", ":", "?", "<", ">", "!", "#", "$", "%", "^", "&", "*", "-", "=", "+"];
var fullArray = [];
var passwordArray = [];

// Write password to the #password input -----------------------------------------------------------------------------------------------------------
function writePassword() {
  passwordText.value = "";
  var password = generatePassword();
  passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Reset arrays to empty and booleans to false ------------------------------------------------------------------------------------------------------
function reset() {
  passwordText.value = "";
  passwordArray = [];
  fullArray = [];
  passwordNumbers = false;
  passwordCharacters = false;
  passwordUppercase = false;
  passwordLowercase = false;
}

//Get user input regarding length of password ------------------------------------------------------------------------------------------------------
function promptLength() {
  passwordLength = prompt("How many characters long should the password be? (min 8, max 128)");
}

//Get user input regarding character sets to use ---------------------------------------------------------------------------------------------------
function promptCharacters() {
  passwordNumbers = confirm("Do you want to use numbers? (Click OK for Yes, Click Cancel for No)");
  passwordCharacters = confirm("Do you want to use special characters? (Click OK for Yes, Click Cancel for No)");
  passwordUppercase = confirm("Do you want to use uppercase letters? (Click OK for Yes, Click Cancel for No)");
  passwordLowercase = confirm("Do you want to use lowercase letters? (Click OK for Yes, Click Cancel for No)");
}

//Create array from which to generate password based on user input ---------------------------------------------------------------------------------
function createFullArray() {
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
}

//Create array that meets user's criteria for password length and characters -----------------------------------------------------------------------
function createPasswordArray() {
  //Randomly choose an item from the full array, repeat 'passwordLength' number of times, each time add new item to the password array
  for(i=0; i<passwordLength; i++) {
    //choose random number between 0 and fullArray.length-1
    random = Math.floor(Math.random() * fullArray.length);
    //get that random number index from fullArray & add to passwordArray
    passwordArray.push(fullArray[random]);
  }
}

//Generate password that meets user's criteria & program requirements ------------------------------------------------------------------------------
function generatePassword() {
  reset();
  promptLength();

  //Make sure password length fits parameters
  if(passwordLength >7 && passwordLength <129) {
    promptCharacters();

    //Make sure user chooses at least one set of characters
    if(passwordNumbers||passwordCharacters||passwordUppercase||passwordLowercase) {

      //Create password when above requirements are met
      createFullArray();
      createPasswordArray();
      return passwordArray.join("");
    } 
    //If at least one set of characters is not selected, alert user
    else {
      alert("You need to choose at least one set: numbers, special characters, uppercase, or lowercase. Please try again.");
      reset();
      return passwordArray;
    }
  }
  //If input does not meet min/max length parameters, alert user
  else {
    alert("You need to enter a password length between 8 and 128. Please try again.");
    reset();
    return passwordArray;
  }
}

// Add event listener to generate button & clear button --------------------------------------------------------------------------------------------
generateBtn.addEventListener("click", writePassword);
clearBtn.addEventListener("click", reset);
