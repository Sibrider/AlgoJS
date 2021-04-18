
/*  programme moyenne tab 
*	but :       calculer la moyenne des valeurs d'un tableau
*	auteur :    Vincent TEISSIER-COUTURIER
*	date :      14/04/2021
*/
   
// Ajoute la librairie scanf
const scanf = require('scanf');

// Initialise les variables
let tab = [];
let total = 0;

// Ajoute les valeurs dans un tableau
for(let i=0; i<5; i++) {
    console.log(`saisir la valeur ${i+1} :`);
    tab.push(scanf('%d'));
}

// Détermine l'indice de la valeur maiximal du tableau
let valeurMax = Math.max(...tab);
let indiceMax = tab.indexOf(valeurMax);
console.log(`l'indice de la valeur maximal du tableau est ${indiceMax} qui pointe sur la valeur ${valeurMax}`);

// additionne les entiers du tableau
for (let n = 0; n <= 4; n++) {
    total = total+tab[n];
}

// Calcul et affiche la moyenne
let moyenne = total/5;
console.log(`la moyenne est de : ${moyenne}`);