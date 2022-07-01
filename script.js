// Assignment code here
var charLength = 8;
var choiceArray = [];

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click" , writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = showPrompts(); 
  var passwordText = document.querySelector("#password");

  if(correctPrompts) {
	var password = generatePassword();
	passwordText.value = password;
  } else {
	passwordText.value = "";
  }
}  

function generatePassword() {
var password = "";
for(var i = 0; i < charLength; i++) {
	var randomNum = Math.floor(Math.random() * choiceArray.length);
	password = password + choiceArray[randomNum];
   } 	
   return password;	
}

// Prompts

function showPrompts() {
	choiceArray = [];

	charLength = parseInt(prompt("How many characters do you want in your password?")); //NaN?
	
	if (isNaN(charLength) || charLength < 8 || charLength > 128) {
		alert("password needs to be more than 8 characters and less than 128 characters! Try again.");
		return false;
	}
	if(confirm("Do you want to include lowercase letters in your password?")) {
		choiceArray = choiceArray.concat(lowerCase);
	}
	if(confirm("Do you want to include uppercase letters in your password?")) {
		choiceArray = choiceArray.concat(upperCase);
	}
	if(confirm("Do you want to include special characters in your password?")) {
		choiceArray = choiceArray.concat(specialCharacters);
	}
	if(confirm("Do you want to include numbers in your password?")) {
		choiceArray = choiceArray.concat(numbers);
	}
	return true;
}