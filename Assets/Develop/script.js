function generatePassword(){
  //TODO: your code goes here
  var length = parseInt(prompt("How long would you like your password to be? Please choose between '8' and '128'."));

  // checking for length of the password

  while (!(length >= 8 && length <= 128)) {
    alert("Oops sorry! This isn't a number between '8' and '128'. Please try again!");
    var length = parseInt(prompt("How long would you like your password to be? Please choose between '8' and '128'."));

  };

  // Asking for any other password specifications (Uppercase, lowercase, numbers, and special characters)


  alert("Now we will ask what type of characters you want in your password. For each option, click 'Ok' for Yes and 'Cancel' for No.");
  var uppercase = confirm("Would you like uppercase letters in your password?");
  var lowercase = confirm("Would you like lowercase letters in your password?");
  var numbers = confirm("Would you like numbers in your password?");
  var specialCharacters = confirm("Would you like special characters (e.g. '!', '%', '$') in your password?");

  // Creating the various arrays we will use

  var characterSet = [];
  var passwordArray = [];
  var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numbersArray = ["0","1","2","3","4","5","6","7","8","9"];
  var specialCharArray = ["!","@","#","$","%","^","&","*","?","~","<",">","{","}","[","]",":",";"];

  // User chooses Uppercase

  if (uppercase) {
    characterSet = characterSet.concat(uppercaseArray);

} 

// User chooses lowercase

if (lowercase) {
    characterSet = characterSet.concat(lowercaseArray);

} 

// User chooses numbers

if (numbers) {
    characterSet = characterSet.concat(numbersArray);

} 

// User chooses special characters

if (specialCharacters) {
    characterSet = characterSet.concat(specialCharArray);

} 
  
// User doesn't choose anything (returns password as if they chose all 4 options)
  
if (!uppercase && !lowercase && !numbers && !specialCharacters) {
    characterSet = uppercaseArray.concat(lowercaseArray, numbersArray, specialCharArray);

}

// For loop that creates final password Array; this is made into var password as a string

for (var i = 0; i < length; i++) {
      passwordArray.push(characterSet[Math.floor(Math.random() * characterSet.length)]);
      var password = passwordArray.join('');
}

// Returns final variable password to function

return password; 

}


// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
