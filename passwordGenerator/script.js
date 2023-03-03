console.log("password Generator");

const password_length = document.querySelector("[data-passwordLength]");
const inputSlider = document.querySelector("[data-inputSlider]");
const checkboxs = document.querySelectorAll(".checkboxs");
const indicator = document.querySelector(".strenth-color");
const passwordDisplay = document.getElementById("passwordDisplay");
const copyPassword = document.querySelector("[data-copyContent]");

//get checkbox 
const checkUpperCase = document.getElementById("hasUpperCase");
const checkLowerCase = document.getElementById("hasLowerCase");
const checkNumber = document.getElementById("hasNumber");
const checkSymboles = document.getElementById("hasSymboles");

// Symbol String
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
}
// get value of input slider 
inputSlider.addEventListener("input", (e) => {
    passwordLength = e.target.value;
    handleSlider()
})

// Random integer Generator function
function getIntNumber(min, max) {
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

function setIndicator(color) {
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 8px 1px ${color}`;
}

function caclStrength() {

    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasNumber = false;
    let hasSymboles = false;

    // check if checkedbox are checked or not
    if (checkUpperCase.checked) hasUpperCase = true;
    if (checkLowerCase.checked) hasLowerCase = true;
    if (checkNumber.checked) hasNumber = true;
    if (checkSymboles.checked) hasSymboles = true;

    if (hasUpperCase && hasLowerCase && (hasNumber || hasSymboles) && passwordLength >= 8) {
        setIndicator("#0f0");
    } else if ((hasUpperCase || hasLowerCase) && (hasNumber || hasSymboles) && passwordLength >= 6) {
        setIndicator("#ff0");
    } else {
        setIndicator("#f00")
    }

}

// checkbox handle
function handleCheckboxs() {
    // console.log("click checkbox");
    let checkCount = 0;

    checkboxs.forEach((checkbox) => {
        if (checkbox.checked) checkCount++;
    })

    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider()
    }
}

// all checkbox addEventListener "chang"
checkboxs.forEach(checkbox => {
    checkbox.addEventListener("chang", handleCheckboxs);
})

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyPassword.innerText = "copied";

    } catch (err) {
        copyPassword.innerText = "Failed";
    }



}