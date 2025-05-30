let min = 1;
let max = 100;
const commencer = document.getElementById("commencer");
const jeu = document.getElementById("game");
const essaie = document.getElementById("essaie");
const valider = document.getElementById("valider");
const commentaire = document.getElementById("commentaire");

jeu.style.display = "none";

function startGame(){
    essaie.innerHTML = "";
  jeu.style.display = "inline";  
  commencer.innerHTML= "Recommencer";

  let nbreAleatoire = Math.floor(Math.random() * (max)) + min;
  let tentatives = 5;

  commentaire.innerHTML =`vous avez ${tentatives} tentatives pour essayer de deviner un nombre compris entre 1 et 100.`;
  while(tentatives > 0 || parseInt(essaie) != nbreAleatoire){
    essaie.innerHTML = "";
    valider.addEventListener("click", function(){
        tentatives--;
        if(parseInt(essaie) === nbreAleatoire && tentatives != 0){
            let count = 5 - tentatives;
            commentaire.innerHTML = `Felicitation, Vous avez trouver le nombre en ${count} tentatives `;
            return;
        }else if(parseInt(essaie) != nbreAleatoire && tentatives != 0){
            commentaire.innerHTML =`il vous reste ${tentatives} tentatives.`;
        }else if(parseInt(essaie) != nbreAleatoire && tentatives === 0){
            commentaire.innerHTML = `Vous avez perdu... le nombre aleatoire etait ${nbreAleatoire}`;
        }
    })
  }
}
commencer.addEventListener("click", startGame);