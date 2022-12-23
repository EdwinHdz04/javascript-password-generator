// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterLength = 8;
var choiceArr =[];

var specialCharArr = ['!','@','#','$','%','^','&','*','(',')','[',']','{','}','|','?','/','<','>'];
var lowerCassArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','Y'];
var numberArr =['1','2','3','4','5','6','7','8','9','0',];



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
 // I need a new, secure password

function writePassword() {
  var correctPrompts = GetPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) { 
    var newPassword = generatePassword();
    passwordText.value = newPassword;
    

  }
}

// I click the button to generate a password
function generatePassword(){

  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = (Math.floor.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
  }
   

// I am presented with a series of prompts for password criteria
// prompted for password criteria
function GetPrompts() {
  choiceArr = [];
  characterLength = parseInt(prompt ("How man characters do you want your password to be? (8 - 128 characters"));
// I choose a length of at least 8 characters and no more than 128 characters
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character Length has to be a number, 8 - 128 digits. TRY AGAIN.");
    return false;
  }
  if (confirm("Would you like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowerCassArr);
  }
  if (confirm("Would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(uppercaseArr);
  }
  if (confirm("Would you like special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  if (confirm("Would you like numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;

}

 
// I select which criteria to include in the password
// I choose a length of at least 8 characters and no more than 128 characters
// asked for character types to include in the password
// I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// I answer each prompt
// my input should be validated and at least one character type should be selected
// all prompts are answered
// a password is generated that matches the selected criteria
// the password is generated
// the password is either displayed in an alert or written to the page



