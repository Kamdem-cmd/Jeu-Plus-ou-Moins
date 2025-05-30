let min = 1;
let max = 100;
const commencer = document.getElementById("commencer");
const jeu = document.getElementById("game");
const essaie = document.getElementById("essaie");
const valider = document.getElementById("valider");
const commentaire = document.getElementById("commentaire");

jeu.style.display = "none";

function startGame(){
  jeu.style.display = "inline";  
  commencer.type= "reset";
  commencer.innerHTML= "Recommencer";
}
let entierAleatoire = Math.floor(Math.random() * (max)) + min;
console.log(entierAleatoire);
commencer.addEventListener("click", startGame);