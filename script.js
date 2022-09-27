// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = GeneratePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var passwordLength = 0;

//An array to house all available characters
var passwordCharacters = [];

//an arra to hold the final password
var passwordArray = [];

//a string to hold the final password
var passwordString;

//an array to hold all the special characters
var specialCharacters = [
  " ", "!", '"', "#", "$", "%","&","'", 
  "(",")","*", "+", ",","-",".","/",":", 
  ";", "<", "=", ">", "?", "@","[", "]",
  "\\", "^", "_", "`", "{", "|", "}", "~"];

//string that holds entire alphabet
var lowercaseAlphaString = 'abcdefghijklmnopqrstuvwxyz';

//array that containes usable numbers 
var numberCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//function to gather an array of available characters for the password
function GeneratePassword(){

  //gets password length input
  passwordLength = prompt("How many characters do you want your password to be?");

  //if password is less than 8, stops the program
  if(passwordLength < 8){
    alert("Password length must be more than 8 characters.")

    //if password is more than 128, stops the program
  } else if (passwordLength > 128){
    alert("Password length must be less than 128 characters.")

  } else {

    //checks if user wants lower case letters
    if(confirm("Use Lowercase Letters?")){

      //creates an array of lowercase letters from alpha string
      lowercaseAlpha = Array.from(lowercaseAlphaString);

      //adds lowercaseAlpha array to the full list of password characrers available
      passwordCharacters = passwordCharacters.concat(lowercaseAlpha);

    }

    //checks if user wants uppercase letters
    if(confirm("Use Uppercase Letters?")){

      //changes lowercaseAlphaString to uppercase
      uppercaseAlphaString = lowercaseAlphaString.toUpperCase();

      //creates an array of Uppercase letters from alpha string
      uppercaseAlpha = Array.from(uppercaseAlphaString);

      //adds uppercaseAlpha array to the full list of password characters
      passwordCharacters = passwordCharacters.concat(uppercaseAlpha);

    }
    //checks if user wants to use numbers
    if(confirm("Use Numbers?")){

      //adds numberCharacters array to the full list of password characters
      passwordCharacters = passwordCharacters.concat(numberCharacters);

    }
    //checks if user wants special characters
    if(confirm("Use Special Characters?")){

      //adds specialCharacters array to the full list of password characters
      passwordCharacters = passwordCharacters.concat(specialCharacters);
    }
  }
  console.log(passwordCharacters);
  CreatePassword();
}

//A function to create a password with the available characters
function CreatePassword(){
  for(var i = 0; i < passwordLength; i ++){
    var randomNumber = Math.floor(Math.random() * passwordCharacters.length);
    passwordArray.push(passwordCharacters[randomNumber]);
  }
  passwordString = passwordArray.toString();

  alert("Your new secure password is: " + passwordString);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
