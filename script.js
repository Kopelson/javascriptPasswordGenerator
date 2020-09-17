///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////

//slider in modal code:
//this allows the window to load before grabing the slider info
window.onload = function() {
  //this grabs the slider/range element.
  let slider = document.getElementById("myRange");
  //this grabs the display of the slider value element that is in the <p> of the modal.
  let output = document.getElementById("sliderValue");
  //this assigns the sliderValue element to be the same as the range value.
  output.innerHTML = slider.value;
  //this updates the value for the display as the user adjusts the slider.
  slider.oninput = function() {
  output.innerHTML = this.value;
  };
};

//this function creates an array of random characters according to the amount selected on the modal slider. 
function generatePassword() {
  //this grabs the length of password needed by getting the value of the slider/range element
  let lengthValue = document.getElementById("myRange").value;
  //this initializes the array that will store the new password.
  let randomPassword = [];
  //this sets i to 0 for the while loop;
  let i = 0;
  //this loops through the function getRandomChar untill the length of the desired password is reached with valid entrys.
  while (i < lengthValue) {
      //this added the new character to the array randomPassword.
      randomPassword.push(getRandomChar());
      //this adds 1 to i.
      i++;
  };
  //this returns the array as a combined string back to the function writePassword and stored as password.
  return randomPassword.join("");
};

//this function produces a random character that is valid to the modal requests.
function getRandomChar() {
  //these grab the modal elements lowercase, uppercase, numeric, and special boxes.
  let useLowercase = document.getElementById("lowercase");
  let useUppercase = document.getElementById("uppercase");
  let useNumeric = document.getElementById("numeric");
  let useSpecial = document.getElementById("special");
  //this produces a random number 0 - 3.
  let getRandomChar = Math.floor(Math.random()*4);
  //this initializes i to 0 for the do/while loop.
  let i = 0;
    //this loops through untill a valid option is selected.
    do {
      //these if statments check to see if the randomize option is valid and then will run the assoicated function.
      if (getRandomChar === 0 && useLowercase.checked){
        //this adds 1 to i to stop the do loop.
        i++;
        //this returns the random lowercase letter by runing this function.
        return getRandomLowerLetter();
      } else if (getRandomChar === 1 && useUppercase.checked){
        //this adds 1 to i to stop the do loop.
        i++;
        //this returns the random uppercase letter by runing this function.
        return getRandomUpperLetter();
      } else if (getRandomChar === 2 && useNumeric.checked){
        //this adds 1 to i to stop the do loop.
        i++;
        //this returns the random number by runing this function.
        return getRandomNum();
      } else if (getRandomChar === 3 && useSpecial.checked) {
        //this adds 1 to i to stop the do loop.
        i++
        //this returns the random special character by runing this function.
        return getSpecialChar();
        //this checks if no options are checked and returns nothing.
      } else if (useLowercase.checked === false && useUppercase.checked === false && useNumeric.checked === false && useSpecial.checked === false) {
        //this adds 1 to i to stop the do loop.
        i++
        return;
      } else {
        //this will randomly change the getRandomChar number before the do/while loop repeats.
        getRandomChar = Math.floor(Math.random()*4);
      };
      //this do/while loop will repeat untill a valid entry is selected.
    } while (i = 1);
};

//this function will return a random lowercase letter.
function getRandomLowerLetter() {
  //this initalizes an array of lowercase letters.
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  //this assigns randomCharacters a random number 0 - 25.
  let randomCharacter = Math.floor(Math.random()*26);
  //this assigns randomCharacters an index of the alphebet array.
  randomCharacter = alphabet[randomCharacter];
  //this returns a random lower case letter back to the getRandomChar function.
  return randomCharacter;
};

//this function will return a random uppercase letter.
function getRandomUpperLetter() {
  //this initalizes an array of uppercase letters.
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  //this assigns randomCharacters a random number 0 - 25.
  let randomCharacter = Math.floor(Math.random()*26);
  //this assigns randomCharacters an index of the alphabet array.
  randomCharacter = alphabet[randomCharacter];
  //this returns an uppercase letter to the getRandomChar function.
  return randomCharacter;
};

//this function will return a special character.
function getSpecialChar() {
  //this initalizes an array of special characters.
  const special = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
  //this assigns randomCharacter a random number 0 - 29.
  let randomCharacter = Math.floor(Math.random()*30);
  //this assigns randomCharacter an idex of the special array.
  randomCharacter = special[randomCharacter];
  //this returns a special character to the getRandomChar function.
  return randomCharacter;
};

//this function will return a random integer from 0 - 9.
function getRandomNum() {
  //this initalizes an array of integers from 0 - 9.
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  //this assigns randomNum a random number 0 - 9.
  let randomNum = Math.floor(Math.random()*10);
  //this assigns randomNum to an index of the numbers array. *note this should be the same as the random number that it was given*
  randomNum = numbers[randomNum];
  //this returns a random integer that ranges from 0 - 9 back to the getRandomChar function.
  return randomNum;
};


