console.log("password Generator");

let password_length = document.querySelector("[data-passwordLength]");
let inputSlider = document.querySelector("[data-inputSlider]");
const symbole = "!@#$%^&*()_+[]{}<>?/~";

// init
let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider()


function handleSlider() {
     inputSlider.value = passwordLength;
     password_length.textContent = passwordLength;

     let min = inputSlider.min;
     let max = inputSlider.max;
     
     let a = inputSlider.style.backgroundSize = ((passwordLength - min) * 100 / (max - min)) + "% 100%";
     console.log(passwordLength);
}
// get value of input slider 
inputSlider.addEventListener("input", (e) => {
     passwordLength = e.target.value;
     handleSlider()
})

// Random integer Generator function
function getIntNumber(min,max) {
     return Math.floor(Math.random() * (max - min) + min);
}
// Generate Random Number
function generateRandomNumber() {
    return getIntNumber(0, 9);
}

// Generate Random UpperCase
function generateRandomUpperCase() {
     return String.fromCharCode(getIntNumber(65, 90));
}

// Generate Random LowerCase
function generateRandomLowerCase() {
     return String.fromCharCode(getIntNumber(97, 122));
}

// Generate Random Symbole
function generateRandomSymbol() {
     const randomIndexNum = getIntNumber(0, symbole.length)
     return symbole.charAt(randomIndexNum);
}





