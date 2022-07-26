// Assignment code here
var generateBtn = document.querySelector("#generate");



function generatePassword()
{
var userInput = prompt("What should the password length be?")



var passcodelength = parseInt(userInput)

if(isNaN(passcodelength)) {


alert("not a number!")
return
}


if (passcodelength < 8 || passcodelength > 128){
  alert("passcode length has to be between 8 and 128 characters!")
  return
}


var needsNumbers= confirm("Will you use numbers in your passcode?")

var needsCharacters = confirm("Will you use speciaal characters in your passcode?")

var needsLowercase =confirm ("Will you use lowercase letters in your passcode?")

var needsUppercase = confirm("Will you use uppercase letters in your passcode?")

var numbers = ["0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9"]
var characters = ["1", "@" , "$" , "&" , "*","%"]
var lowercase = ["a" , "b" , "c" , "d" ,"e" , "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = []
var lists = []

for (var i = 0; i < lowercase.length-1; i++); {
  uppercase[i] = lowercase[i].toUpperCase(); 

}

if (needsNumbers === true);{
lists.push(numbers)

}
if(needsCharacters === true); {
  lists.push(characters)

}
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
