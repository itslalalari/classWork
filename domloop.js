
//04FEB2024
//Larissa Giddings
const divLoop = document.querySelector("containerDOM");

for(var i = 0; i < 5; i++){
const p = document.createElement("p");
const words = document.createTextNode("Text Line...");
p.appendChild(words);
document.body.appendChild(p);}