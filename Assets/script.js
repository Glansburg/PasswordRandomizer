// Assignment Code

// variable targeting the big red "Generate Password button"
var generateBtn = document.querySelector("#generate");

//testing to see if button works
function generatePassword() {
  console.log("hello this is a test")
  return "generated password will go here!"
}

// Write password to the #password input
function writePassword() {
  //empty function?
  var password = generatePassword();
  // variable targeting the big text box where the generated password is at
  var passwordText = document.querySelector("#password");
// returns the variable defined aboves value. It is equal to the password variable which is equal to the generatePaswword(): function
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

