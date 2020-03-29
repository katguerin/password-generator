
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var charLength = Number(window.prompt("How long would you like your password to be?", "8"));
    while (charLength >= 129 || charLength <= 7){
        charLength = Number(window.prompt("Password needs to be between 8 - 128 characters")); 
    } 
    console.log("password length is " + charLength);

    var charLowercase = window.confirm("Do you want lower case letters?");
    console.log("I want lower case " + charLowercase);

    var charUppercase = window.confirm("Do you want upper case letters?");
    console.log("I want upper case " + charUppercase);

    var charNumber = window.confirm("Do you want numbers?");
    console.log("I want numbers " + charNumber);

    var charSpecial = window.confirm("Do you want upper special characters?");
    console.log("I want special characters " + charSpecial);



    function generatePassword(charLowercase, charUppercase, charNumber, charSpecial, charLength) {

        var generatePassword = '';
    
        var typesCount = charLowercase + charUppercase + charNumber + charSpecial;

        console.log('typesCount: ', typesCount);

        var typesArr = [{ charLowercase }, { charUppercase }, { charNumber }, { charSpecial }].filter
        (
            item => Object.values(item)[0]
        );
        
        console.log('typesArr: ', typesArr);

        if(typesCount === 0) {
            return '';
        }    

        for(let i = 0; i < charLength; i += charLength) {
            typesArr.forEach(type => {

            });
        }

//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

    
    }
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


console.log('getRandomLower ' + getRandomLower()); 
console.log('getRandomUpper ' + getRandomUpper()); 
console.log('getRandomNumber ' + getRandomNumber()); 
console.log('getRandomSymbol ' + getRandomSymbol()); 