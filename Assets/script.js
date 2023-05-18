// Assignment Code

// variable targeting the big red "Generate Password button"
var generateBtn = document.querySelector("#generate");

//testing to see if button works with console.log
function generatePassword() {
  console.log("hello this is a test")
  //setting up intial values
  var passwordLength = 0
  var lowerCase = false
  var upperCase = false
  var digits = false
  var specialChars = false

  // Setting up intial arrays of Data.
  var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// 1. prompt the user for the password criteria
passwordLength = prompt('How many characters would you like in your password? Choose "number 8 through 128"');

while(((passwordLength < 8) || (passwordLength > 128))) {
  console.log(passwordLength);
  alert("Please choose a number between 8 and 128 only!")
  passwordLength = prompt('How many characters would you like in your password? Choose "number 8 through 128"');
}

//START HERE ON GETTING LOWERCASE LETTERS OF USER ADDED IN DATA
lowerCase = confirm('Would you like lowercase letters in your password?');
if (lowerCase === true) {
  lowerCase = lowerCaseChars;
  console.log(lowerCase);
} else {
  lowerCase === false;
  console.log(lowerCase);
}

//Getting UpperCase letters of user added in data
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

