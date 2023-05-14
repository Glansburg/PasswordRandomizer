// Assignment Code


function passwordGeneration() {
  // created sets of arrays for all the array criteria for the project.
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numbers = ["0","1","2","3","4","5","6","7","8","9"];
  var specialChars = ["!","@","#","$", "%","%","^", "&", "*", "(",")","-","+","?","/",":",";","[","}",".","<","<","=","_","'","|","~"];
  var selectedArray= [];
}

var pwordLength = getPwordLength

var charTypePicked = false;
















var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button. goes to end
generateBtn.addEventListener("click", writePassword);
