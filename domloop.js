
//04FEB2024
//Larissa Giddings
const divLoop = document.querySelector(".containerDOM");

for(var i = 0; i < 5; i++){
const p = document.createElement("p");
const words = document.createTextNode("Text Line...");
p.appendChild(words);

const firstPara = document.querySelector("p");
//const parent = firstPara.parentNode;

parent.insertBefore(p, firstPara.nextElementSibling)

//document.body.appendChild(p);
}