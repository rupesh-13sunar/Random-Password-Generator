// general variable declaration
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let rIndex = 0; //random indexing for character[]
let psdLength = 10; //password length initialized
let getPsdLength = document.getElementById("psd-length"); // for user define password length
let firstPsdBox = document.getElementById("first-psd");
let secondPsdBox = document.getElementById("second-psd");
let psdBtn = document.getElementById("psd-button"); // for button changing behaviour

//fucntion to for users input for password length and some validating rules
function setPsdLength() { // calling function changed to this when button pressed
    if (getPsdLength.value > 4 && getPsdLength.value < 17 ) {
        psdLength = getPsdLength.value;
        generatePassword(); //as to validate the [else] that the generating password cannot be proceed.
    } else if (getPsdLength.value == "") {
        psdLength = 10;
        generatePassword();
    } else {
       alert ("Password either too long either to short");
    }
};
//random password generates on button click 
function generatePassword() {
    let firstPsd = ""; // needed for overwriting previous generation  on input box
    let secondPsd = ""; // " " " "
    for (let i=0; i<psdLength; i++) {   // adding loop to first password box
        rIndex = Math.floor(Math.random()*91);
        firstPsd += characters[rIndex];
        firstPsdBox.value = firstPsd;
    };
    for (let i=0; i<psdLength; i++) { // adding loop to second password box
        rIndex = Math.floor(Math.random()*91);
        secondPsd += characters[rIndex];
        secondPsdBox.value =secondPsd;
    };
    psdBtn.textContent = "Generate Another"; // changing button value for user experience purpose
};
// const inputText = document.querySelector("input");
// inputText.addEventListener("click", copyOnClick);
// function copyOnClick() {
//     let copyTextFromFirst =  document.getElementById("first-psd");
//     copyTextFromFirst.select();
//     navigator.clipboard.writeText(copyTextFromFirst.value);

//     // let copyTextFromSecond =  document.getElementById("second-psd");
//     // copyTextFromSecond.select();
//     // navigator.clipboard.writeText(copyTextFromSecond.value);

//     // alert("Copied to Clipboard!");
// }