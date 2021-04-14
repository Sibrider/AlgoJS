
/*  programme moyenne tab 
*	but :       calculer la moyenne des valeurs d'un tableau
*	auteur :    Vincent TEISSIER-COUTURIER
*	date :      14/04/2021
*/
   
// Ajoute la librairie scanf
const scanf = require('scanf');

// Initialise les variables
let i = 1;
let tab = [];
let total = 0;

// Ajoute les valeurs dans un tableau
while(i != 6){
    console.log(`saisir la valeur ${i}`);
    let number = scanf('%f');
    tab.push(number);
    i++;
}

// Détermine l'indice maiximum du tableau
let valeurMax = Math.max(...tab);
let indiceMax = tab.indexOf(valeurMax);
console.log(`l'indice maximum du tableau est: ${indiceMax}`);

// Calcul le total des nombres du tableau
for (let n = 0; n <= indiceMax; n++) {
    total = total+tab[n];
}

// Calcul la moyenne
let moyenne = total/5;
console.log(`la moyenne est de : ${moyenne}`);