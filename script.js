// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterLength = 8;
var choiceArr =[];

var specialCharArr = ['!','@','#','$','%','^','&','*','(',')','[',']','{','}','|','?','/','<','>'];
var lowerCassArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','Y'];
var numberArr =['1','2','3','4','5','6','7','8','9','0',];

// Write password to the #password input
function writePassword() {
  // I need a new, secure password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// I click the button to generate a password
function generatePassword(){
  console.log("button works!")

   return "Generated password"
 }

 function getPrompts(){
   characterLength = parseInt(prompt("How many characters would you want your password be?" ('8 - 128 characters'))

    if(isNaN(characterLength)|| characterLength <8 || characterLength > 128 ){
       alert('Character lenght has to be a number, 8 -128 digits. TRY AGAIN.');
       return false;
    }
 }
// I am presented with a series of prompts for password criteria
// prompted for password criteria


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
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

