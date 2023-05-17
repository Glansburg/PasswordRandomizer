// Assignment Code

// variable targeting the big red "Generate Password button"
var generateBtn = document.querySelector("#generate");

//testing to see if button works
function generatePassword() {
  console.log("hello this is a test")
  //STARTER: setting up intial value assumptions computer doesnt know.
  var passwordLength = 0;
  var upperCase = false;
  var lowerCase = false;
  var digits = false;
  var specialChars = false;

  passwordLength = prompt('How many characters would you like in your password? Choose "number 8 through 128"');


// 1. prompt the user for the password criteria

confirm('Would you like lowercase letters in your password?');
confirm("Would you like uppercase leters in your password?");
confirm("Would you like digits in your password?");
confirm("Would you like special characters in your password?");




//   a: Password length 8 < 128
//   b: lower, uppercase, numbers, special characters

//2. Validate the input, 
//3. Generate password based on criteria.



//4. Display password to the page.
  return "generated password will go here!"
}



// Write password to the #password input
function writePassword() {
  //empty function?
  
  // variable targeting the big TEXT box where the generated password is at
  var passwordText = document.querySelector("#password");
// returns the variable defined aboves value. It is equal to the password variable which is equal to the generatePaswword(): function
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

