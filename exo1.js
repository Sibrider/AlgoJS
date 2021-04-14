
/*  programme compare chaine 
*	but :       déterminer si la première chaine de caractère est deux fois plus grande que la deuxième
*	auteur :    Vincent TEISSIER-COUTURIER
*	date :      14/04/2021
*/

// Ajoute la librairie scanf
const scanf = require('scanf');

// Saisit 2 chaines de caractères
console.log("Saisir la première chaine :");
let firstChaine = scanf('%s');
console.log("Saisir la deuxième chaine :");
let secondChaine = scanf('%s');

// Compare la taille des chaines saisit
if (firstChaine.length >= 2*secondChaine.length) {
    console.log("La première chaine est au moins 2 fois plus grande que la deuxième chaine");
  } else {
    console.log("La première chaine n'est pas 2 fois plus grande que la deuxième chaine");
  }