/*  programme somme entier 
*	but :       calculer la somme des nombres compris entre 1 et un entier saisi
*	auteur :    Vincent TEISSIER-COUTURIER
*	date :      14/04/2021
*/
    
// Ajoute la librairie scanf
const scanf = require('scanf');

// Initialise les variables
let somme = 0;

// Saisit 1 nombre
console.log("Saisir un nombre entier supérieur à 0 :");
let number = scanf('%d');

// boucle pour obtenir la somme
for(let i = 0; i != number; i++) {
    somme = i+somme;
}

// Afficher la somme
console.log(`la somme entre 1 et ${number} est : ${somme}`);