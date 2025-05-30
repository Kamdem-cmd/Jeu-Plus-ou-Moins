let min = 1;
let max = 100;
const commencer = document.getElementById("commencer");
const jeu = document.getElementById("game");
const essaieInput = document.getElementById("essaie"); 
const valider = document.getElementById("valider");
const commentaire = document.getElementById("commentaire");

let nbreAleatoire;
let tentatives;

jeu.style.display = "none";

function startGame() {
    essaieInput.value = ""; // Vider le champ de saisie
    jeu.style.display = "inline";
    commencer.innerHTML = "Recommencer";

    nbreAleatoire = Math.floor(Math.random() * max) + min; 
    console.log(`Nombre à deviner (pour débogage): ${nbreAleatoire}`); // Utile pour le test
    tentatives = 5;

    commentaire.innerHTML = `Vous avez ${tentatives} tentatives pour essayer de deviner un nombre compris entre ${min} et ${max}.`;
    valider.disabled = false; // S'assurer que le bouton est cliquable
    essaieInput.disabled = false; // S'assurer que l'input est utilisable
}

function check() {
    const valeurSaisie = parseInt(essaieInput.value);

    if (isNaN(valeurSaisie) || valeurSaisie < min || valeurSaisie > max) {
        commentaire.innerHTML = `Veuillez entrer un nombre valide entre ${min} et ${max}. Il vous reste ${tentatives} tentatives.`;
        essaieInput.value = "";
        essaieInput.focus();
        return;
    }

    tentatives--;

    if (valeurSaisie === nbreAleatoire) {
        let count = 5 - tentatives;
        commentaire.innerHTML = `Félicitations ! Vous avez trouvé le nombre ${nbreAleatoire} en ${count} tentative(s) !`;
        endGame();
    } else if (tentatives > 0) {
        let indice = "";
        if (valeurSaisie < nbreAleatoire) {
            indice = "C'est plus !";
        } else {
            indice = "C'est moins !";
        }
        commentaire.innerHTML = `${indice} Il vous reste ${tentatives} tentative(s).`;
        essaieInput.value = "";
        essaieInput.focus();
    } else {
        commentaire.innerHTML = `Vous avez perdu... Le nombre aléatoire était ${nbreAleatoire}.`;
        endGame();
    }
}

function endGame() {
    valider.disabled = true; // Désactiver le bouton valider
    essaieInput.disabled = true; // Désactiver l'input
    jeu.style.display = "none";
}

commencer.addEventListener("click", startGame);
valider.addEventListener("click", check); // L'écouteur est ajouté une seule fois ici

// Optionnel: permettre de valider avec la touche "Entrée" dans le champ d'essai
essaieInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        if (!valider.disabled) { // Ne pas valider si le jeu est terminé
            check();
        }
    }
});