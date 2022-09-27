// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = GeneratePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//TODO: Write GeneratePassword() function based on the specifics in the README

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
