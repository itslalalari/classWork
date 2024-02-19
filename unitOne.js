
document.addEventListener("DOMContentLoaded", () => {

var input = prompt("enter your name, please", "Stranger");
var number = prompt("And give me a number: ", 5);

for(var i = 0; i< number; i++) {
const p = document.createElement("p");

const text = document.createTextNode(input);
p.appendChild(text);

const firstP = document.querySelector("p");
const parent = firstP.parentNode;

parent.insertBefore(p, firstP.nextElementSibling);
}

var button = document.getElementById("btnColor");
button.addEventListener("click", ()=>{
    document.getElementById("body").style.backgroundColor = "white";
       });
    });

