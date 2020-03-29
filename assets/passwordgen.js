// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();

    if(password !== false){
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
    }
}

function generatePassword() {
    var charLength = Number(window.prompt("How long would you like your password to be?", "8"));
    while (charLength >= 129 || charLength <= 7){
        charLength = Number(window.prompt("Password needs to be between 8 - 128 characters")); 
    } 
    // console.log("password length is " + charLength);

    var charLowercase = window.confirm("Do you want lower case letters?");
    // console.log("I want lower case " + charLowercase);

    var charUppercase = window.confirm("Do you want upper case letters?");
    // console.log("I want upper case " + charUppercase);

    var charNumber = window.confirm("Do you want numbers?");
    // console.log("I want numbers " + charNumber);

    var charSymbol = window.confirm("Do you want special characters?");
    // console.log("I want special characters " + charSymbol);   

    var password = '';
   
    if (charLowercase == false && charUppercase == false && charNumber == false && charSymbol == false){
        alert('You must choose at least one option, please try again.');
        return false;
    }

    for (i = 0; i < charLength;){
        if (charLowercase) {
            password = password + getRandomLower();   
            // console.log(password);
            i++;
            if (i == charLength) break;
        }
        if (charUppercase) {
            password = password + getRandomUpper();   
            // console.log(password);
            i++;
            if (i == charLength) break;
        }
        if (charNumber) {
            password = password + getRandomNumber();   
            // console.log(password);
            i++;
            if (i == charLength) break;
        }
        if (charSymbol) {
            password = password + getRandomSymbol();   
            // console.log(password);
            i++;
            if (i == charLength) break;
        }
    }

    // console.log('The password is ' + password);
    return password;
}


function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*()<>_-+=~`?/{}[]\|';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
