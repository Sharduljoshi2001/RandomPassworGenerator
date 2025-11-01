const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let generatePasswordButton = document.getElementById("generate-password-btn");
let passwordDisplayOne = document.getElementById("password-one");
let passwordDisplayTwo = document.getElementById("password-two");
let length = 15;
let passwordStringOne = "";
let passwordStringTwo = "";

// Debug: To check if elements are found
// console.log("Button found:", generatePasswordButton);
// console.log("Password display one found:", passwordDisplayOne);
// console.log("Password display two found:", passwordDisplayTwo);
function generateRandomPassword(){
    console.log("Button clicked!"); // Debug message
    passwordStringOne="";
    passwordStringTwo="";
    for(let i=0;i<length;i++){
        let randomNumber = Math.floor(Math.random()*characters.length);
        passwordStringOne+=characters[randomNumber];  
    }
    for(let i=0;i<length;i++){
        let randomNumber = Math.floor(Math.random()*characters.length);
        passwordStringTwo+=characters[randomNumber];  
    }
    passwordDisplayOne.textContent=passwordStringOne;
    passwordDisplayTwo.textContent=passwordStringTwo;
    // return characters[randomNumber];
}




