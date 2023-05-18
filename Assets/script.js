// Assignment Code

// variable targeting the big red "Generate Password button"
var generateBtn = document.querySelector("#generate");

//testing to see if button works
function generatePassword() {
  console.log("hello this is a test")
  //setting up intial values
  var passwordLength = 0
  var lowerCase = false
  var upperCase = false
  var digits = false
  var specialChars = false

// 1. prompt the user for the password criteria
passwordLength = prompt('How many characters would you like in your password? Choose "number 8 through 128"');
console.log(passwordLength);



//if (passwordLength > 8) 
//else if (passwordLength < 128) ----





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

generatePassword();

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

